import { ServerResponse } from "http";

export const sendResponse = (res: ServerResponse,message: string, statusCode: number, data: any,success: boolean) => {
   const response={
        success,
        message,
        data
    }
    res.writeHead(statusCode,{"Content-Type":"application/json"});
    res.end(JSON.stringify(response));
}