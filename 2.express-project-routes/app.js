import express from 'express'
import { appRouter } from './route/main-route.js'

const app = express() 
const PORT = 8080
app.use(express.json())

app.use('/',appRouter) 


app.listen(PORT,
    ()=> console.log("Your port is ready===>",PORT)
)