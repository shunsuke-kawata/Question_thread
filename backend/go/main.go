package main

import (
	"fmt"
	"net/http"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

// 	"github.com/shunsuke-kawata/Question_thread/go/router"
//

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

	router.POST("/signin", test)
	router.POST("/login", test)

	router.Run()
}
