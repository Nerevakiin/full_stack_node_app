import http from 'node:http'
import {serveStatic} from './utils/serveStatic.js'

const PORT = 8000


const __dirname = import.meta.dirname

const server = http.createServer(async (req, res) => {
    
    // const pathToResource = path.join(__dirname, 'public', 'index.html') // The absolute path +  relative path (the folder + the file we want)
    
    await serveStatic(req, res, __dirname)

})


server.listen(PORT, () => console.log(`server is listening on port: ${PORT}`))

