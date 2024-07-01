FROM golang:1.22 as builder
WORKDIR /go/src/github.com/pedrodecf/full-cycle-challenges/docker/desafio-01

ENV GO111MODULE=off
COPY main.go ./
RUN go build -o hello ./

FROM scratch
COPY --from=builder /go/src/github.com/pedrodecf/full-cycle-challenges/docker/desafio-01/hello /

CMD ["./hello"]