package main

import (
	"fmt"
	"net/http"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

// 	"github.com/shunsuke-kawata/Question_thread/go/router"
//

type Signin struct {
	Flag     string `json:"flag"`
	Mail     string `json:"email"`
	Nickname string `json:"nickname"`
	Password string `json:"password"`
}

func test(c *gin.Context) {
	/*
	   DB操作など
	*/
	flag := c.PostForm("flag")
	c.JSON(http.StatusCreated, gin.H{
		"status": "ok",
	})
	fmt.Println(flag)
}

func signin(c *gin.Context) {
	// var signinUser Signin
	// c.BindJSON(&signinUser)
	// fmt.Println(signinUser)
	var form map[string]interface{}
	c.BindJSON(&form)
	flag := c.PostForm("flag")
	fmt.Println(flag)

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
	router.POST("/login", test)
	router.POST("/post", test)

	router.Run()
}
