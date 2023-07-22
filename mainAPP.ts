import express from "express";
import cors from "cors";
import { Application } from "express-serve-static-core";

export const mainAPP = (app: Application) => {
  app.use(cors()).use(express.json());
};
