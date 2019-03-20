const express = require('express');
const app = express();

app.get('/add/:x/:y', function(req, resp) {
  resp.send(`${parseInt(req.params.x) + parseInt(req.params.y)}`)
})

app.get('/subtract/:x/:y', function(req, resp) {
  resp.send(`${parseInt(req.params.x) - parseInt(req.params.y)}`)
})

app.get('/multiply/:x/:y', function(req, resp) {
  resp.send(`${parseInt(req.params.x) * parseInt(req.params.y)}`)
})

app.get('/divide/:x/:y', function(req, resp) {
  resp.send(`${parseInt(req.params.x) / parseInt(req.params.y)}`)
})

app.get('/half/:x', function(req, resp) {
  resp.send(`${parseInt(req.params.x) / 2}`)
})

app.listen(process.env.PORT);