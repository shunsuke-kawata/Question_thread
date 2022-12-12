package model

import (
	"errors"
	"fmt"
	"os"
	"time"

	"github.com/joho/godotenv"
	"github.com/shunsuke-kawata/Question_thread/go/crypt"
	"gorm.io/driver/mysql"
	"gorm.io/gorm"
)

// データベースのスキーマ
type User struct {
	gorm.Model
	Nickname  string
	Email     string
	Password  string
	CreatedAt time.Time
	UpdatedAt time.Time
}

type Question struct {
	gorm.Model
	Title     string
	Body      string
	UserID    uint
	Comments  []Comment
	CreatedAt time.Time
	UpdatedAt time.Time
}

type Comment struct {
	gorm.Model
	Body       string
	UserID     uint
	QuestionID uint
	CreatedAt  time.Time
	UpdatedAt  time.Time
}

// データベースとそのエラー
var db *gorm.DB
var err error

// importしたときに呼ばれる
func init() {
	//dsn
	err := godotenv.Load(os.Getenv("DSN"))
	//{user}:{password}@tcp({dockerのコンテナ名}:{port})/{データベース名}
	dsn := "user:password@tcp(backend-db-mysql:3306)/question_thread_db?charset=utf8mb4"
	fmt.Println("dsn", dsn)
	//データベースに接続する
	db, err = gorm.Open(mysql.Open(dsn), &gorm.Config{})
	if err != nil {
		fmt.Println("failed")
	} else {
		fmt.Println("successed")
	}
	//作成したデータベースに対してスキーマをマイグレーションする
	db.AutoMigrate(&User{}, &Question{}, &Comment{})

}

func OpenDB() *gorm.DB {
	dsn := "user:password@tcp(backend-db-mysql:3306)/question_thread_db?charset=utf8mb4"
	db, err = gorm.Open(mysql.Open(dsn), &gorm.Config{})
	if err != nil {
		fmt.Println("failed")
	} else {
		fmt.Println("successed")
	}
	db.AutoMigrate(&User{}, &Question{}, &Comment{})

	return db
}

func SigninModel(email string, nickname string, password string) (*User, error) {
	signinUser := User{}
	db.Where("id = ?", signinUser.ID).First(&signinUser)
	if signinUser.ID != 0 {
		err := errors.New("同一名のUserIdが既に登録されています。")
		fmt.Println(err)
		return nil, err
	}
	encryptPw, err := crypt.PasswordEncrypt(password)
	if err != nil {
		fmt.Println("パスワード暗号化中にエラーが発生しました。：", err)
		return nil, err
	}

	signinUser = User{Email: email, Nickname: nickname, Password: encryptPw}
	db.Create(&signinUser)

	return &signinUser, nil

}
