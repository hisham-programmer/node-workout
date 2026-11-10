import http from 'http'
import Routes from './routes/route.js'

const server = http.createServer(async (req, res) => {
    res.writeHead(200, {"content-Type":"application/json"})

    try {
        const response = await Routes(req)
        res.write(JSON.stringify(response))
        res.end()
    }
    catch(error){
        console.log("error::::",error)
    }

})

server.listen(8080, () => console.log("Your current port number is 8080"))