package router

import (
	"fmt"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
	"github.com/shunsuke-kawata/Question_thread/go/model"
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

func SignupRouter(c *gin.Context) {
	var signupUser SignupUser
	c.BindJSON(&signupUser)
	fmt.Println(signupUser.Email, signupUser.Nickname, signupUser.Password)
	user, err := model.SignupModel(signupUser.Email, signupUser.Nickname, signupUser.Password)
	if err != nil {
		c.JSON(400, err.Error())
		fmt.Println(err)
		return
	}
	fmt.Println(user)
}

// 3000/loginからのpostを取得する
func LoginRouter(c *gin.Context) {
	var loginUser LoginUser
	c.BindJSON(&loginUser)
	user, err := model.LoginModel(loginUser.Email, loginUser.Password)
	if err != nil {
		c.JSON(400, err.Error())
		fmt.Println(err)
		return
	} else {
		fmt.Println(user)
	}

}

// 3000/newQuestionからのpostを取得する
func QuestionPostRouter(c *gin.Context) {
	var postQuestion PostQuestion
	c.BindJSON(&postQuestion)
	newQuestion, err := model.NewQuestionModel(postQuestion.Title, postQuestion.Body)

	if err != nil {
		c.JSON(400, err.Error())
		fmt.Println(err)
		return
	} else {
		fmt.Println(newQuestion)
	}

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
