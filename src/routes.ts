import {Express, Request, Response, NextFunction} from "express"
import getBookHandler from "./controllers/books.controller";
function routes(app: Express ) {
    app.get("/api/books/:bookId/:authorId", getBookHandler
        
       )


 
        , function (req: Request, res: Response, next: NextFunction) {
            console.log("second handler")
            return res.send(req.params)
        }
    // Async Error handle by Express
    async function throwsError() {
        throw new Error("Boom!!");
    }


    app.get("/error", async (req, res) => {
        try {
            await throwsError()
            res.sendStatus(200)


        } catch (e) {
            res.status(400).send("Server Down")
        }

    }
    ) 
}

export default routes 
