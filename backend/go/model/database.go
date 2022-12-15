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

// type QuestionJson struct {
// 	// ID        uint      `json:"id"`
// 	Title string `json:"title"`
// 	Body  string `json:"body"`
// }

// type Response struct {
// 	Questions []QuestionJson `json:"questions"`
// }

// UserID    uint      `json:"userid"`
// Comments  []Comment `json:"comments"`
// CreatedAt time.Time `json:"created_at"`
// UpdatedAt time.Time `json:"updated_at"`

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
	newQuestion := Question{Title: title, Body: body}
	db.Create(&newQuestion)

	return &newQuestion, nil

}

func GetDataModel() ([]Question, error) {
	questions := []Question{}

	//mysqlからデータ一覧の取得
	db.Debug().Find(&questions)
	fmt.Printf("%T\n", questions)

	return questions, nil

}

// response := new(Response)

// var array []QuestionJson
// //gorm.DBの中をforで回す

// for _, question := range questions {
// 	//json構造の定義
// 	questionJson := QuestionJson{}
// 	questionJson.Title = question.Title
// 	questionJson.Body = question.Body
// 	array = append(array, QuestionJson{
// 		Title: question.Title,
// 		Body:  question.Body,
// 	})
// }
// response.Questions = array

// return response, nil
