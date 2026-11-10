import { getUsers,addUser } from '../module/usermodule.js'
 
export default  function Routes(req, method) {

    if(req.url ==="/" && req.method ==="GET"){
     let promise = new Promise((resolve,reject)=>{
        resolve("Hello welcome to nodejs endpoint")
     })

     return promise
    }
    if(req.url==='/all-user-list' && req.method==='GET'){
        let userData = getUsers()
        return userData
    }

    if(req.url ==='/add-user' && req.method==='POST'){

        let promise = new Promise((resolve,reject)=>{
            let body = ""
            req.on('data',(chunk)=>{
                body += chunk
            })
            req.on("end",(chunk)=>{
                body = JSON.parse(body)
                const userData = addUser(body)
                let responseData = {
                    statusCode : 200,
                    statusMessage: "success",
                    data : userData
                } 
                resolve(responseData)
            })
        })
        return promise
    }
   
}