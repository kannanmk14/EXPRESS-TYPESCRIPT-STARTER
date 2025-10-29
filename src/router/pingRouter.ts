import express from "express";
import { pingHandler ,pingBaseHandler} from "../controllers/pingController";

const pingRouter= express.Router();

pingRouter.get("/health",pingBaseHandler)
pingRouter.get("/ping",pingHandler);

export default pingRouter;

