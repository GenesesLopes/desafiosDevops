FROM golang:alpine AS build-go

COPY . .

RUN go build -a -ldflags '-extldflags "-static" -s -w' hello.go

FROM scratch

COPY --from=build-go /go/hello .

CMD [ "./hello" ]

