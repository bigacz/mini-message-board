import express from "express";
import process from "node:process";
import indexRouter from "./routes/indexRouter.js";

const app = express();

app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set("views", process.cwd() + "/views/");

app.use(express.static("public"));

app.use("/", indexRouter);

const PORT = 8080;
app.listen(PORT, (error) => {
  if (error) {
    throw new Error(error);
  }

  console.log(`Server started on port ${PORT}`);
});
