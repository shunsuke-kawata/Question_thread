package main

import (
	"fmt"
	"log"
	"net/http"
)

const (
	url = "http://localhost:3000"
)

func main() {
	h := func(w http.ResponseWriter, r *http.Request) {
		// オリジンが違う場合は設定する
		w.Header().Add("Access-Control-Allow-Origin", url)
		// FormValueメソッドで値を取り出せる
		fmt.Println(r.Body)
	}

	http.HandleFunc("/", h)

	log.Fatal(http.ListenAndServe(":8080", nil))
}
