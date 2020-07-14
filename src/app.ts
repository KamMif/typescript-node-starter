import express from 'express';
import bodyParser from "body-parser";
import cors from 'cors';
import { routes } from "./routes";

const originBoiler = {
    origin (origin:string, callback:(a:any, b?:any) => void) {
        callback(null, true)
    },
    credentials: true,
};

const app = express();
app.use(cors(originBoiler));
app.use(bodyParser.json());

routes(app);

export { app }
