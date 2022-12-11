package main

import (
	"os"

	"github.com/shunsuke-kawata/Question_thread/go/model"
	"github.com/shunsuke-kawata/Question_thread/go/router"
)

func main() {
	model.Init()
	router := router.CreateRouter()
	router.Run(":" + os.Getenv("GO_PORT"))
}
