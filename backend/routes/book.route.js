import express from "express";
import { getBook } from "../controllers/book.controller.js";

const Router = express.Router()

Router.get("/", getBook)

export default Router;