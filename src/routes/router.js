const 
  express = require('express'),
  api = express.Router()


api.get('/tasks', (req, res)=>{
  res.status(200).send([])
})
api.post('/tasks', (req, res)=>{
  const id = req.body.id
  if(!id) return res.sendStatus(400)
  res.status(200).send({id})
})

module.exports = api
