import { Router } from "express";
import db from "../db.js";

const indexRouter = Router();

indexRouter.get("/message/:messageid", (req, res) => {
  const requestId = req.params.messageid;

  const message = db.getMessage(requestId);

  if (message == null) {
    res.render("messageNotFound");
  }

  res.render("message", { message: message });
});

indexRouter.get("/new", (req, res) => {
  res.render("form");
});

indexRouter.post("/new", (req, res) => {
  const { text, user } = req.body;

  db.addMessage(text, user);
  res.redirect("/");
});

indexRouter.use("/", (req, res) => {
  const messages = db.getAllMessages();
  res.render("index", { title: "Mini Messageboard", messages });
});

indexRouter.use("/", (err, req, res, next) => {
  console.log(err);
  res.send("Unexpected error occured!");
});

export default indexRouter;
