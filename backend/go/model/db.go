package model

import (
	"database/sql"
	"log"
)

// データベースに接続する関数
func OpenDB(driver, dsn string) *sql.DB {
	db, err := sql.Open(driver, dsn)

	//エラーがある場合エラーを出力して終了する
	if err != nil {
		log.Fatal("openDB failed:", err)
	}
	return db
}

// データベースを閉じる関数
func CloseDB(db *sql.DB) {
	if err := db.Close(); err != nil {
		log.Fatal("closeDB failed:", err)
	}
}
