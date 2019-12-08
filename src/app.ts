import express from "express";
import Celebrate from "celebrate";

const app: express.Application = express();

app.get("/", (req, res) => {
  res.send("hello world");
});

app.use(Celebrate.errors());
app.listen("3000", () => {
  console.log("on port 3000");
});
