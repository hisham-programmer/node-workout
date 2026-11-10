export default function Routes(req) {

    if (req.url === '/' && req.method === 'GET') {
        let promise = new Promise((resolve, reject) => {
            resolve("Welcome to node Js world")
        })
        return promise
    }

    if (req.url === '/add-user' && req.method === 'POST') {
        
        let promise = new Promise((resolve, reject) => {
            let body = ""
            req.on('data', (chunk) => {
                body += chunk
            })
            req.on('end', (chunk) => {
                console.log("body====>",body)
                const response = JSON.parse(body)
                resolve(response)
            })
        })
        return promise
    }

    if (req.url.startsWith('/update-user/') && req.method === 'PUT') {
        let promise = new Promise((resolve, reject) => {
            const paramId = req.url.split("/")[2]
            var body = ""
            req.on('data', (chunk) => {
                body += chunk
            })
            req.on('end', (chunk) => {
                console.log("body===>",body,"paramId===>",paramId)
                let response = {
                    body :  JSON.parse(body),
                    paramID : paramId
                }
                resolve(response)
            })
        })
        return promise
    }
    if (req.url.startsWith('/update-user/') && req.method === 'PATCH') {
        let promise = new Promise((resolve, reject) => {
            const paramId = req.url.split("/")[2]
            var body = ""
            req.on('data', (chunk) => {
                body += chunk
            })
            req.on('end', (chunk) => {
                body = JSON.parse(body)
                let resonse = {
                    statuCode:200,
                    statusMessage: "Path Modified Success"
                }
                resolve(resonse)
            })


        })
        return promise
    }

    if(req.url.startsWith("/remove-product/") && req.method === "DELETE"){
        const paramId = req.url.split('/')[2]
        const respone = {
            statusCode:200,
            statusMessage: `Record ${paramId} is deleted`
        }
        return respone
    }
}
