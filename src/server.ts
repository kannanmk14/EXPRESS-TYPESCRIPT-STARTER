import express from "express";
import { type Express } from "express";
import {loadConfig,serverConfig} from './config'
import router from "./router";

const app:Express = express();
loadConfig();

app.use("/api/v1",router);

app.listen(serverConfig.PORT,()=>{
    console.log(`app is up and running ${serverConfig.PORT}`);
});

