import express, {Request, Response} from 'express'
import {Server} from 'http'


//usando express
const server = express()

server.get('/',(req:Request,res:Response) =>{
    
    res.send("Doente de amor procurei remédio na vida noturna")

})

//escutando a porta 3000
server.listen(3000)