package model

import (
	"errors"
	"fmt"
	"os"
	"strconv"
	"time"

	"github.com/joho/godotenv"
	"github.com/shunsuke-kawata/Question_thread/go/crypt"
	"gorm.io/driver/mysql"
	"gorm.io/gorm"
)

// データベースのスキーマ
type User struct {
	gorm.Model
	ID        uint `gorm:"primaryKey"`
	Nickname  string
	Email     string
	Password  string
	CreatedAt time.Time
	UpdatedAt time.Time
}

type Question struct {
	gorm.Model
	ID        uint `gorm:"primaryKey"`
	Title     string
	Body      string
	UserID    uint
	Comments  []Comment
	CreatedAt time.Time
	UpdatedAt time.Time
}

type Comment struct {
	gorm.Model
	Body string
	// UserID     uint
	QuestionID uint
	CreatedAt  time.Time
	UpdatedAt  time.Time
}

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
		err := errors.New("An error occurred while encrypting the password.")
		return nil, err
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

	err := crypt.CompareHashAndPassword(loginUser.Password, password)
	if err != nil {
		err := errors.New("Password did not match.")
		fmt.Println("Password did not match.", err)
		return nil, err
	} else {
		fmt.Println("login successed")
	}

	return &loginUser, nil

}

func NewQuestionModel(title string, body string) (*Question, error) {
	comment := Comment{
		Body: "テストコメント",
	}
	// comment := Comment{
	// 	Body: "testコメント",
	// }
	// comments = append(comments, comment)

	// fmt.Println(comments)

	newQuestion := Question{Title: title, Body: body, Comments: []Comment{comment}}
	db.Debug().Create(&newQuestion)

	return &newQuestion, nil
}

func GetDataModel() ([]Question, error) {
	questions := []Question{}

	//mysqlからデータ一覧の取得
	db.Debug().Find(&questions)

	return questions, nil

}

func GetCommentsModel(parameter string) ([]Comment, error) {

	fmt.Printf("%T\n", parameter)
	questionID, _ := strconv.Atoi(parameter)
	comments := []Comment{}
	db.Debug().Find(&comments, "question_id = ?", questionID)
	fmt.Println(comments)
	return comments, nil
}

// ログイン時に使用する
// 0のユーザーはログインしていない
func LoggedIn(question Question) bool {
	return question.UserID != 0
}
