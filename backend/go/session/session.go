package session

type SessionInfo struct {
	UserID         interface{} //ログインしているユーザのID
	NickName       interface{} //ログインしているユーザの名前
	IsSessionAlive bool        //セッションが生きているかどうか
}
