const express = require("express");
const http = require("http");
const app = express()
const hostname = '127.0.0.1';
const port = 5000

app.get("/", function(req, res) {
  res.send('servidor rodando')
})

http.createServer(app).listen(port, () => console.log(`servidor on na porta ${port}`))