const express = require("express");
const app = express();
const amqp = require("amqplib");

let channel, connection;
connectServer();
async function connectServer() {
  try {
    const amqpServer = "amqp://localhost:5672";
    connection = await amqp.connect(amqpServer);
    channel = await connection.createChannel();

    await channel.assertQueue("rabbit");

    channel.consume("rabbit", (data) => {
      console.log(`Received ${Buffer.from(data.content)}`);
      channel.ack(data);
    });
  } catch (err) {
    console.log(err);
  }
}

app.get("/send", (req, res) => {});

app.listen(5001, () => {
  console.log(`Server at 5001`);
});
