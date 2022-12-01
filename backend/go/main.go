package main

import (
	"fmt"
	"net/http"
)

func helloHander(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "<h1>Go container running</h1>")
}

func main() {
	http.HandleFunc("/", helloHander)
	http.ListenAndServe(":8080", nil)
}
