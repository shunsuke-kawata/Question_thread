package redis

import (
	"crypto/rand"
	"encoding/base64"
	"fmt"
	"io"

	"github.com/gin-gonic/gin"
	"github.com/go-redis/redis/v8"
)

type SessionInfo struct {
	UserID         interface{} //ログインしているユーザのID
	NickName       interface{} //ログインしているユーザの名前
	IsSessionAlive bool        //セッションが生きているかどうか
}

var conn *redis.Client

// init関数
func init() {
	conn = redis.NewClient(&redis.Options{
		Addr:     "backend-redis:6379",
		Password: "",
		DB:       0,
	})
}

// ランダムなセッションIDを作成する
// NewSession関数は新規登録時とログイン時に呼び出される。
// ランダムなSessionIDを作成し、go-redisのSet関数を使いSessionIdとValueを登録する。
// 同時にgin.ContextのSetCookie関数でCookieの保存する。
// CookieのKeyには環境変数LOGIN_USER_ID_KEYを、ValueにはUserモデルのUserIdを指定する。
func NewSession(c *gin.Context, cookieKey, redisValue string) {
	//make(スライスの型指定、スライスの長さを指定、スライスの容量)を指定する
	//可変長の配列を作成する
	b := make([]byte, 64)
	if _, err := io.ReadFull(rand.Reader, b); err != nil {
		panic(err)
	}

	//キーの作成
	newRedisKey := base64.URLEncoding.EncodeToString(b)

	if err := conn.Set(c, newRedisKey, redisValue, 0).Err(); err != nil {
		panic("Session登録時にエラーが発生：" + err.Error())
	}
	c.SetCookie(cookieKey, newRedisKey, 0, "/", "localhost", false, false)
}

// ログイン中のセッション情報を取得する
// CookieKeyからCookieに保存されているRedisKeyを読み出し、RedisKeyからRedisに保存されているValue(今回はUserId)を読み出す。
// ログインしていない時はgo-redisのGet関数でSession情報が見つからず、err == redis.Nilの判定となる。
func GetSession(c *gin.Context, cookieKey string) interface{} {
	redisKey, _ := c.Cookie(cookieKey)
	redisValue, err := conn.Get(c, redisKey).Result()
	switch {
	case err == redis.Nil:
		fmt.Println("SessionKeyが登録されていません。")
		return nil
	case err != nil:
		fmt.Println("Session取得時にエラー発生：" + err.Error())
		return nil
	}
	return redisValue
}

// セッション情報を削除する
// 同時にgin.ContextのSetCookie関数のMaxAgeをマイナスに設定することでCookieを削除することができる。
// ログアウト時に呼び出される
func DeleteSession(c *gin.Context, cookieKey string) {
	redisId, _ := c.Cookie(cookieKey)
	conn.Del(c, redisId)
	c.SetCookie(cookieKey, "", -1, "/", "localhost", false, false)
}
