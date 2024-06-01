import * as Sentry from "@sentry/node";
import "./instrument.js";
import "dotenv/config";

import express from "express";

import booksRouter from "./routes/books.js";
import recordsRouter from "./routes/records.js";
import loginRouter from "./routes/login.js";

import logStuff from "./middleware/logStuff.js";
import log from "./middleware/logMiddleware.js";
import errorHandler from "./middleware/errorHandler.js";
import authorize from "./middleware/authorize.js";

const port = process.env.PORT || 8080;

const app = express();

app.use(express.json());

app.use(log);

app.use(logStuff);

app.use("/docs", express.static("docs"));

// Protected route
app.get("/admin", authorize, (req, res) => {
  res.send("Welcome to the admin area");
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/about", (req, res) => {
  const html = "<h1>About Us</h1><p>Welcome to our website!</p>";
  res.send(html);
});

app.use("/books", booksRouter);

app.use("/records", recordsRouter);

app.use("/login", loginRouter);

app.get("/debug-sentry", function mainHandler(req, res) {
  throw new Error("My first Sentry error!");
});

// The error handler must be registered before any other error middleware and after all controllers
Sentry.setupExpressErrorHandler(app);
// Optional fallthrough error handler
app.use(function onError(err, req, res, next) {
  // The error id is attached to `res.sentry` to be returned
  // and optionally displayed to the user for support.
  res.statusCode = 500;
  res.end(res.sentry + "\n");
});

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
