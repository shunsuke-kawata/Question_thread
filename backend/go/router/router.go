package router

import (
	"fmt"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

type SignupUser struct {
	Email    string
	Nickname string
	Password string
}

type LoginUser struct {
	Email    string
	Password string
}

type PostQuestion struct {
	Title string
	Body  string
}

// 3000/signinからのpostを取得する
<<<<<<< HEAD
<<<<<<< HEAD
func SignupRouter(c *gin.Context) {
	var signupUser SignupUser
	c.BindJSON(&signupUser)
	fmt.Println(signupUser.Email, signupUser.Nickname, signupUser.Password)
	user, err := model.SignupModel(signupUser.Email, signupUser.Nickname, signupUser.Password)
	if err != nil {
		fmt.Println(err)
		return
	}
	fmt.Println(user)
=======
=======
>>>>>>> parent of 3d9983c (create サインイン機能を作成)
func SigninRouter(c *gin.Context) {
	var signinUser SigninUser
	c.BindJSON(&signinUser)
	fmt.Println(signinUser.Email, signinUser.Nickname, signinUser.Password)
	fmt.Println(c.ContentType())
<<<<<<< HEAD
>>>>>>> parent of 3d9983c (create サインイン機能を作成)
=======
>>>>>>> parent of 3d9983c (create サインイン機能を作成)

}

// 3000/loginからのpostを取得する
func LoginRouter(c *gin.Context) {
	var loginUser LoginUser
	c.BindJSON(&loginUser)
	fmt.Println(loginUser.Email, loginUser.Password)
	user, err := model.LoginModel(loginUser.Email, loginUser.Password)
	if err != nil {
		fmt.Println(err)
		return
	}
	fmt.Println(user)

}

// 3000/newQuestionからのpostを取得する
func QuestionPostRouter(c *gin.Context) {
	var postQuestion PostQuestion
	c.BindJSON(&postQuestion)
	fmt.Println(postQuestion.Title, postQuestion.Body)
	fmt.Println(c.ContentType())
	fmt.Println(postQuestion)

}

func CreateRouter() *gin.Engine {
	//routerのインスタンスを作成
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
	router.POST("/signup", SignupRouter)
	router.POST("/login", LoginRouter)
	router.POST("/questionPost", QuestionPostRouter)

	return router
}
