package router

import (
	"errors"
	"fmt"
	"net/http"
	"os"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
	"github.com/shunsuke-kawata/Question_thread/go/model"
	"github.com/shunsuke-kawata/Question_thread/go/redis"
)

type SignupUser struct {
	Email           string
	Nickname        string
	Password        string
	ConfirmPassword string
}

type LoginUser struct {
	Email    string
	Password string
}

type ResponseInfo struct {
	Email    string
	Nickname string
}

type PostQuestion struct {
	Title string
	Body  string
}

type PostComment struct {
	Qid  string
	Uid  string
	Body string
}

// 3000/signinからのpostを取得する

func SignupRouter(c *gin.Context) {
	var signupUser SignupUser
	c.BindJSON(&signupUser)
	fmt.Println(signupUser.Email, signupUser.Nickname, signupUser.Password, signupUser.ConfirmPassword)
	if signupUser.Password != signupUser.ConfirmPassword {
		err := errors.New("password and password to confirm don't match")
		c.JSON(400, err.Error())
		fmt.Println(err)
		return
	}
	user, err := model.SignupModel(signupUser.Email, signupUser.Nickname, signupUser.Password)
	if err != nil {
		c.JSON(400, err.Error())
		fmt.Println(err)
		return
	} else {
		fmt.Println(user)
		//responseを返す
		c.JSON(200, nil)
	}
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
		response := ResponseInfo{user.Email, user.Nickname}
		c.JSON(201, response)
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
		c.JSON(201, nil)
	}

}

// データベースからデータ一覧を取得する
func GetDataRouter(c *gin.Context) {
	result, err := model.GetDataModel()
	if err != nil {
		fmt.Println(err)
	} else {
		fmt.Println(result)
		c.JSON(201, result)
		fmt.Printf("%T\n", result)
	}
}

func GetCommentsRouter(c *gin.Context) {
	id := c.Param("id")
	comments, err := model.GetCommentsModel(id)
	if err != nil {
		fmt.Println(err)
	} else {
		c.JSON(201, comments)
		fmt.Printf("%T\n", comments)
	}
}

func CommentPostRouter(c *gin.Context) {
	var postComment PostComment
	c.BindJSON(&postComment)
	newComment, err := model.NewCommentModel(postComment.Qid, postComment.Uid, postComment.Body)

	if err != nil {
		fmt.Println(err)
	} else {
		fmt.Println(newComment)
		c.JSON(201, nil)
	}
	fmt.Println(postComment.Qid, postComment.Uid, postComment.Body)

}

// ルーターのインスタンスを作成する
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

	//ルーティング→corsの設定の後にする
	router.GET("/getData", GetDataRouter)
	router.POST("/questionPost", QuestionPostRouter)
	router.POST("/signup", SignupRouter)
	router.POST("/login", LoginRouter)
	router.GET("/getComments/:id", GetCommentsRouter)
	router.POST("/commentPost", CommentPostRouter)

	return router
}

// ログインしているかを判定する
func checkLogin() gin.HandlerFunc {
	return func(c *gin.Context) {
		//環境変数を取得
		cookieKey := os.Getenv("LOGIN_USER_ID_KEY")
		id := redis.GetSession(c, cookieKey)
		if id == nil {
			c.Redirect(http.StatusFound, "/login")
			c.Abort()
		} else {
			c.Next()
		}
	}

}

// ログアウトしているかを判定する
func checkLogout() gin.HandlerFunc {
	return func(c *gin.Context) {
		//環境変数を取得
		cookieKey := os.Getenv("LOGIN_USER_ID_KEY")
		id := redis.GetSession(c, cookieKey)
		if id != nil {
			c.Redirect(http.StatusFound, "/")
			c.Abort()
		} else {
			c.Next()
		}
	}
}
