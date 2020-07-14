// light weight entry for work with request and response
import {Request, Response} from 'express';
import {testService} from "./service";

export async function retrieve(req: Request, res: Response) {
    const {code, data} = testService(false);

    return res.status(code).json(data)
}
