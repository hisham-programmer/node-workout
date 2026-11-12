import express from 'express'
export const appRouter =  express.Router()


appRouter.get("/",(req,res)=>{
    res.send("Main route reached")
})

appRouter.post("/add-user",(req,res)=>{
    res.send("Post method add-user is reached")
})

appRouter.put("/update-user",(req,res)=>{
    res.send("put method update-user is reached")
})

appRouter.patch("/update-user",(req,res)=>{
    res.send("patch method update-user is reached")
})

appRouter.delete("/remove-user",(req,res)=>{
    res.send("delete method remove-user is reached")
})