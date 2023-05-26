require("dotenv").config();
const express = require("express");
const cors = require("cors"); //
const app = express();
const port = process.env.PORT||80;
const userRouter = require("./server/api/users/user.router");
const questionRouter = require("./server/api/questions/question.router");
const answerRouter = require("./server/api/answers/answer.router");

app.use(cors()); //middle ware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/api/users", userRouter);
app.use("/api/questions", questionRouter);
app.use("/api/answer", answerRouter);

app.listen(port,'0.0.0.0', () => console.log(`Listening at http://localhost:${port}`)); //