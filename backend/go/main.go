package main

import (
	"fmt"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

// 	"github.com/shunsuke-kawata/Question_thread/go/router"
//

type Signin struct {
	Email    string
	Nickname string
	Password string
}

type Login struct {
	Email    string
	Password string
}

type Post struct {
	Title string
	Body  string
}

// 3000/signinからのpostを取得する
func signin(c *gin.Context) {
	var signinUser Signin
	c.BindJSON(&signinUser)
	fmt.Println(signinUser.Email, signinUser.Nickname, signinUser.Password)
	fmt.Println(c.ContentType())

}

// 3000/loginからのpostを取得する
func login(c *gin.Context) {
	var loginUser Login
	c.BindJSON(&loginUser)
	fmt.Println(loginUser.Email, loginUser.Password)
	fmt.Println(c.ContentType())

}

// 3000/newQuestionからのpostを取得する
func questionPost(c *gin.Context) {
	var postQuestion Post
	c.BindJSON(&postQuestion)
	fmt.Println(postQuestion.Title, postQuestion.Body)
	fmt.Println(c.ContentType())

}

func main() {
	// router := router.createRouter()
	// ginのEngineインスタンスを生成
	router := gin.Default()

	//corsの設定
	router.Use(cors.New(cors.Config{
		AllowOrigins: []string{"*"},
		AllowMethods: []string{
			"POST",
			"GET",
			"OPTIONS",
		},
		AllowHeaders: []string{
			"Access-Control-Allow-Credentials",
			"Access-Control-Allow-Headers",
			"Content-Type",
			"Content-Length",
			"Accept-Encoding",
			"Authorization",
		},
	}))

	router.POST("/signin", signin)
	router.POST("/login", login)
	router.POST("/questionPost", questionPost)

	router.Run()
}
