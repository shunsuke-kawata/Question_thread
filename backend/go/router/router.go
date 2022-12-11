package router

import (
	"fmt"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

// サインインのバリデーション
type Signin struct {
	Email    string
	Nickname string
	Password string
}

// ログインのバリデーション
type Login struct {
	Email    string
	Password string
}

// 質問投稿のバリデーション
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

func CreateRouter() *gin.Engine {
	router := gin.Default()
	//corsの設定
	router.Use(cors.New(cors.Config{
		AllowOrigins: []string{"*"},

		//許可するメソッド
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

	//ルーティング→corsの後にする
	router.POST("/signin", signin)
	router.POST("/login", login)
	router.POST("/questionPost", questionPost)

	return router
}
