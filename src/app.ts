import express, {NextFunction, Request, Response} from "express"
import { url } from "inspector"
import routes from './routes';
import helmet from "helmet"

const app = express()
// Security implementation
app.use(helmet())

// To parse a Json text
app.use(express.json())

app.get("/", (req, res) => {
    res.sendStatus(200)
})


// To parse Url link

//app.use(express.urlencoded({extended: true}))

 app.get("/",( req, res) => {
    return res.redirect('http://goal.com')
})
//RPUTING
// MAKING AN HANDLER FOR A POST REQUEST
app.post('/api/data', (req: Request, res: Request) =>{
    console.log(req.body)

}
)

app.all('/api/all', (req: Request, res: Response) => {
    return res.sendStatus(200)
}) 

// How to m,ake multiplen request and also change requests
 app.route('/api/books')
.get((req: Request, res: Response) => {
    return res.send('YOU MAKE ME PROUD:::')
})
    .post((req: Request, res: Response) => {
        return res.send('YOU MAKE ME PROUD BY POST REQUEST')
    })
    .delete((req: Request, res: Response) => {
        return res.send('YOU MAKE ME PROUD DELETE REQUEST')
    })
    .put((req: Request, res: Response) => {
        return res.send('YOU MAKE ME PROUD BY PUT REQUEST')
    })
    .all((req: Request, res: Response) => {
        return res.send('YOU MAKE ME PROUD BY making an x REQUEST')
    }) 
     app.get("/health", (req,res) => {
        res.sendStatus(200)
    })
app.get("/abcxd", (req, res) => {
    res.send("/abxcd")
})
app.get("/health", (req, res) => {
    res.sendStatus(200)
}) 
app.get(/abc/, (req, res) => {
    res.send("abc")
})


// H;ow to put a dynamic path route parameters

 function handleGetBbookOne(req: Request, res: Response, next: NextFunction ) {
    console.log(req.params)
    next()
} 


// Creatying a customise middleware using a programming tecnique call curing
 const middleware = ({name}:{name: string}) => (req: Request, res: Response, next: NextFunction) => {
   //Middleware
   
   res.locals.name = name;
   next()
}

// To create a global middleware
app.use(middleware({name: "Hassan does Tech!!"}));
routes(app) 

// Error Handling
 app.get("/error", () => {
    throw new Error("Boom!!");
})
   
 
app.listen(3000, () => {
    console.log("Application listenig at http//localhost:3000")
})