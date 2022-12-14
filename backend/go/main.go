package main

import (
	"os"

	"github.com/shunsuke-kawata/Question_thread/go/router"
)

func main() {

	router := router.CreateRouter()
	router.Run(":" + os.Getenv("GO_PORT"))
}
