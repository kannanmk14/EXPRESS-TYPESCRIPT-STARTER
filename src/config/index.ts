//inside this file all the basic configuration logic for app server to work
//db connection done here
import dotenv from "dotenv";

type ServerConfig = {
    PORT:number,
}
export function loadConfig():void{
dotenv.config();
}

loadConfig();

export let serverConfig : ServerConfig={
PORT:Number(process.env.PORT) || 3001
};
