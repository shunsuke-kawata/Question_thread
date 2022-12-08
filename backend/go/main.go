package main

import (
	"fmt"
	"net/http"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

func main() {
	// ginのEngineインスタンスを生成
	router := gin.Default()
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

	router.POST("/post", func(c *gin.Context) {
		/*
		   DB操作など
		*/
		email := c.PostForm("email")
		c.JSON(http.StatusCreated, gin.H{
			"status": "ok",
		})
		fmt.Println(email)
	})
	router.Run(":8080")

}
