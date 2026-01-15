import http from 'node:http'
import path from 'node:path'
import fs from 'node:fs/promises'
import {serveStatic} from './utils/serveStatic.js'

const PORT = 8000


const __dirname = import.meta.dirname

const server = http.createServer(async (req, res) => {

    const pathToResource = path.join(__dirname, 'public', 'index.html') // The absolute path +  relative path (the folder + the file we want)


    const content = await fs.readFile(pathToResource, 'utf-8')
    
    serveStatic(__dirname)
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/html')
    res.end(content)



})


server.listen(PORT, () => console.log(`server is listening on port: ${PORT}`))

