package model

import (
	"fmt"
	"time"

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

var db *gorm.DB
var err error

func Init() {

	//権限が×

	dsn := "user:password@tcp(backend-db-mysql:3306)/question_thread_db?charset=utf8mb4"
	fmt.Println("dsn", dsn)
	db, err = gorm.Open(mysql.Open(dsn), &gorm.Config{})
	if err != nil {
		fmt.Println("failed")
	} else {
		fmt.Println("successed")
	}
	//作成したデータベースに対してスキーマをマイグレーションする

}
