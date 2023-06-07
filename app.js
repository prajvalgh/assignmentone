const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
	res.writeHad(200, { 'content-type' : 'text/html' })
	fs.createReadStream('index.html').pipe(res)
})

server.listen(process.env.PORT || 3000)
