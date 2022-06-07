# A Simple Microservices Architecture using NodeJs and RabbitMQ

In this Application you can send messages from one service to another service using message queue.

## Installation

Go to login-service and session service and run below command to install dependencies:

```bash
npm install
```

And you will also need rabbitmq service running on your machine, so you can use docker for rabbitmq service:

```bash
docker run -p 5672:5672 rabbitmq
```

## Usage

if you send GET request on http://localhost:5002, a msg will be sent over to another service and you can check in the server's log
