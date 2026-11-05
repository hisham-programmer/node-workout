import http from 'http';
//import data from './module/data.json' with {type:'json'};
import user_info from './json/user_info.json' with { type: 'json' };
const server = http.createServer((req, res) => {
    res.writeHead(200,{
        "Content-Type" : "hisham/json"
    })
    if(req.url==="/users"&&req.method==="Get"){
        res.write(JSON.stringify(user_info));
    }
    else{
        res.write("Welcome to node");
    }
})
server.listen(8000,()=>{
    console.log("Your port num is 8000");
})