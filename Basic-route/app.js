import http from 'http'
import routes from './route/routes.js'

const server = http.createServer( async (req, res) => {
    res.writeHead(200, {"content-Type":"application/json"})

    try {
        const response = await routes(req)
        res.write(JSON.stringify(response))
        res.end()
    }
    catch(error){
        console.log("error::::",error)
    }

})

server.listen(
    8000,
    () => console.log("Your current port number is 8000")
)