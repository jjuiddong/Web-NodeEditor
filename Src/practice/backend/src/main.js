require("dotenv").config();
import Koa from "koa";
import Router from "koa-router";
import bodyParser from 'koa-bodyparser';
import mongoose from "mongoose";
//import express from 'express';
import cors from '@koa/cors';
//import serve from 'koa-static';
//import path from 'path';
//import send from 'koa-send';
import api from "./api";
//import createFakeData from './fakedata';

const { PORT, MONGO_URI } = process.env;

mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
    //createFakeData();
  })
  .catch((e) => {
    console.error(e);
  });

const app = new Koa();
const router = new Router();

router.use("/api", api.routes());
app.use(cors());
app.use(bodyParser());
app.use(router.routes()).use(router.allowedMethods());

const port = PORT || 4000;
app.listen(port, () => {
  console.log(`Listening to port ${port}`);
});
