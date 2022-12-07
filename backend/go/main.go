package main

import (
	"encoding/json"
	"fmt"
	"log"
	"net/http"
)

const (
	url = "http://localhost:3000"
)

type Signin struct {
	Flag     string `json:"flag"`
	Mail     string `json:"mail"`
	Nickname string `json:"nickname"`
	Password string `json:"password"`
}

// reactからのpostを受け取る
func receivePost(w http.ResponseWriter, r *http.Request) {
	w.Header().Add("Access-Control-Allow-Origin", url)
	// FormValueメソッドで値を取り出せる
	fmt.Println("Name:", r.FormValue("nickname"))
	received_json := r.Body

	outputJson, err := json.Marshal(&received_json)
	if err != nil {
		panic(err)
	}
	fmt.Println(w, string(outputJson))

}

// main.goがはじめに実行される
func main() {
	http.HandleFunc("/", receivePost)
	log.Fatal(http.ListenAndServe(":8080", nil))
}
