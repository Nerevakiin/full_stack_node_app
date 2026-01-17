import http from 'node:http'
import {serveStatic} from './utils/serveStatic.js'
import {handleGet, handlePost, handleNews} from './handlers/routeHandlers.js'

const PORT = 8000


const __dirname = import.meta.dirname

const server = http.createServer(async (req, res) => {
    
    // const pathToResource = path.join(__dirname, 'public', 'index.html') // The absolute path +  relative path (the folder + the file we want)
    
    if (req.url === '/api') {
        if (req.method === 'GET') {
            return await handleGet(res)
        }

        if (req.method === 'POST') {
            return await handlePost(req, res)
        }
        
    } else if (req.url === '/api/news') {

        return await handleNews(req, res)

    } else if (!req.url.startsWith('/api')) {
        await serveStatic(req, res, __dirname)
    }
    
})


server.listen(PORT, () => console.log(`server is listening on port: ${PORT}`))

