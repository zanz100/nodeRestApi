import {Request, Response, NextFunction } from 'express';

function getBookHandler (req: Request, res: Response, next: NextFunction ){
    
        //@ts-ignore
        console.log(res.locals.name)

        //@ts-ignore
        res.send(res.locals.name)
    }

    export default getBookHandler

