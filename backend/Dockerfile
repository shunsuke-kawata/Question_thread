FROM golang:1.17.7-alpine

RUN apk update &&  apk add git
RUN go get github.com/cosmtrek/air@v1.29.0  && \
    go get -u github.com/gin-gonic/gin && \
    go get github.com/jinzhu/gorm && \
    go get github.com/gin-gonic/contrib/sessions && \
    go get github.com/go-sql-driver/mysql && \
    go get github.com/go-redis/redis/v8 
WORKDIR /app
COPY go.mod /app/go.mod
COPY go.sum /app/go.sum
COPY ./ ./app
CMD ["air", "-c", "./go/.air.toml"]

