import corsWrapper from "cors"
import { RequestHandler } from "express"

const CORS_OPTIONS = {
    methods: ["GET", "POST", "PUT", "OPTIONS"]
}

function promisifyMiddleware(middleware){
    return (req, res) => new Promise((resolve, reject) => {
        middleware(req, res, (result) => {
            if(result instanceof Error){
                return reject(result)
            } else {
                return resolve(result)
            }
        })
    })
}

const cors = promisifyMiddleware(corsWrapper(CORS_OPTIONS))

export default cors