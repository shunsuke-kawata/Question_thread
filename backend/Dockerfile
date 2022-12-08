FROM golang:1.17.7-alpine

RUN apk update &&  apk add git
RUN go get github.com/cosmtrek/air@v1.29.0

WORKDIR /app
COPY go.mod /app/go.mod
COPY go.sum /app/go.sum
COPY ./ ./app
CMD ["air", "-c", "./go/.air.toml"]

