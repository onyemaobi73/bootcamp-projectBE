import express from "express";
import { Application } from "express-serve-static-core";

const readPort = process.env.MY_PORT;
const port: number = parseInt(readPort!);

const app: Application = express();

const server = app.listen(process.env.PORT || port, () => {});

process.on("uncaughtException", (error: Error) => {
  console.log("Shutting down server because of uncaughtException");
  console.log(error);

  process.exit(1);
});

process.on("unhandledRejection", (reason: any) => {
  console.log("shutting down server because of unhandledRejection");
  console.log(reason);

  server.close(() => {
    process.exit(1);
  });
});
