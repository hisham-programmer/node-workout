import express from 'express'

const app = express() 
const PORT = 8000

app.get("/",(req,res)=>{
    res.send("Hello i am express js")
})


app.listen(PORT,
    ()=> console.log("Your port is ready===>",PORT)
)