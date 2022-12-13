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
	ID        uint `gorm:"primaryKey"`
	Nickname  string
	Email     string
	Password  string
	CreatedAt time.Time
	UpdatedAt time.Time
}

type Question struct {
	ID        uint `gorm:"primaryKey"`
	Title     string
	Body      string
	UserID    uint
	Comments  []Comment
	CreatedAt time.Time
	UpdatedAt time.Time
}

type Comment struct {
	ID         uint `gorm:"primaryKey"`
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
	//parseTime=true created_at,updated_atを型変換する
	dsn := "user:password@tcp(backend-db-mysql:3306)/question_thread_db?charset=utf8mb4&parseTime=true"

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
func SignupModel(email string, nickname string, password string) (*User, error) {
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

	fmt.Println(loginUser.Email)
	fmt.Println(loginUser.Password)
	if loginUser.ID == 0 {
		err := errors.New("User with matching email address does not exist.")
		return nil, err
	} else {
		fmt.Println("user exists")
	}

	fmt.Println(loginUser.ID)
	fmt.Println(loginUser)
	fmt.Println(&loginUser)
	fmt.Printf("%T\n", loginUser.Email)
	fmt.Printf("%T\n", loginUser.Password)
	fmt.Println(password)
	err := crypt.CompareHashAndPassword(loginUser.Password, password)
	if err != nil {
		fmt.Println("Password did not match.", err)
		return nil, err
	} else {
		fmt.Println("login successed")
	}

	return &loginUser, nil

}
