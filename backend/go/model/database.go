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

// importしたときに呼ばれる(packageがmainでないため)
func init() {
	//dsn
	err := godotenv.Load(os.Getenv("DSN"))
	//{user}:{password}@tcp({dockerのコンテナ名}:{port})/{データベース名}
	dsn := "user:password@tcp(backend-db-mysql:3306)/question_thread_db?charset=utf8mb4"

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

// サインインを行うモデル
func SigninModel(email string, nickname string, password string) (*User, error) {
	signinUser := User{}
	db.Debug().Where("email = ?", email).First(&signinUser)
	if signinUser.ID != 0 {
		err := errors.New("A user with the same address has already been registered.")
		return nil, err
	}
	encryptPw, err := crypt.PasswordEncrypt(password)
	if err != nil {
		fmt.Println("An error occurred while encrypting the password.", err)
		return nil, err
	} else {
		fmt.Println("fjgieowjfgeiowjgiirhgofe")
	}

	signinUser = User{Email: email, Nickname: nickname, Password: encryptPw}
	db.Create(&signinUser)

	return &signinUser, nil

}

func LoginModel(email string, password string) (*User, error) {
	loginUser := User{}
	db.Debug().Where("email = ?", email).First(&loginUser)
	if loginUser.ID == 0 {
		err := errors.New("User with matching email address does not exist.")
		return nil, err
	} else {
		fmt.Println("user exists")
	}

	err := crypt.CompareHashAndPassword(loginUser.Password, password)
	if err != nil {
		fmt.Println("Password did not match.", err)
		return nil, err
	} else {
		fmt.Println("login successed")
	}

	return &loginUser, nil

}
