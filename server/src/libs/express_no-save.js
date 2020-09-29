import express from 'express'
import path from 'path'
import cors from 'cors'
import log from '../utils/log'
const fs = require('fs')
var proxy = require('express-http-proxy');  

const initExpress = () => {
  var chat1 = []
  var chat2 = []
  var chat3 = []
  var chat4 = []
  var chat5 = []
  const app = express()
  const dev = process.env.NODE_ENV === 'development'

  app.use('/api/media-server', proxy('localhost:8000'))

  app.use(cors())

  app.get('/dist/bundle.js', (req, res) => {
    res.sendFile(path.join(__dirname, '../../../../ui/dist/bundle.js'))
  })

  app.get('/api/chats/chat1.json', (req, res) => {
    if (req.query.message) {
      let date_ob = new Date();
      var messageContent = req.query.message
      var time = date_ob.getHours() + ":" + date_ob.getMinutes()
      var add_json = {date: time, content: messageContent}
      chat1.push(add_json)
      var logOutput = "Time: " + add_json.date + "Message: " + add_json.message + "Client IP: " + req.ip  
      log("Message:", "Client Side", logOutput)
    }
  })

  app.get('/api/chats/chat2.json', (req, res) => {
    if (req.query.message) {
      let date_ob = new Date();
      var messageContent = req.query.message
      var time = date_ob.getHours() + ":" + date_ob.getMinutes()
      var add_json = {date: time, content: messageContent}
      chat2.push(add_json)
      var logOutput = "Time: " + add_json.date + "Message: " + add_json.message + "Client IP: " + req.ip  
      log("Message:", "Client Side", logOutput)
    }
  })

  app.get('/api/chats/chat3.json', (req, res) => {
    if (req.query.message) {
      let date_ob = new Date();
      var messageContent = req.query.message
      var time = date_ob.getHours() + ":" + date_ob.getMinutes()
      var add_json = {date: time, content: messageContent}
      chat3.push(add_json)
      var logOutput = "Time: " + add_json.date + "Message: " + add_json.message + "Client IP: " + req.ip  
      log("Message:", "Client Side", logOutput)
    }
  })

  app.get('/api/chats/chat4.json', (req, res) => {
    if (req.query.message) {
      let date_ob = new Date();
      var messageContent = req.query.message
      var time = date_ob.getHours() + ":" + date_ob.getMinutes()
      var add_json = {date: time, content: messageContent}
      chat4.push(add_json)
      var logOutput = "Time: " + add_json.date + "Message: " + add_json.message + "Client IP: " + req.ip  
      log("Message:", "Client Side", logOutput)
    }
  })

  app.get('/api/chats/chat5.json', (req, res) => {
    if (req.query.message) {
      let date_ob = new Date();
      var messageContent = req.query.message
      var time = date_ob.getHours() + ":" + date_ob.getMinutes()
      var add_json = {date: time, content: messageContent}
      chat5.push(add_json)
      var logOutput = "Time: " + add_json.date + "Message: " + add_json.message + "Client IP: " + req.ip  
      log("Message:", "Client Side", logOutput)
    }
  })

  app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../../../../ui/src/public/index.html'))
  })

  app.get('/stream1', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../../../../ui/src/public/index.html'))
  })

  app.get('/stream2', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../../../../ui/src/public/index.html'))
  })

  app.get('/stream3', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../../../../ui/src/public/index.html'))
  })

  app.get('/stream4', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../../../../ui/src/public/index.html'))
  })

  app.get('/stream5', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../../../../ui/src/public/index.html'))
  })

  app.get('/home', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../../../../ui/src/public/index.html'))
  })

  const port = process.env.NODE_ENV === 'development' ? 3001 : 3000

  app.listen(3001, () => {
    log('info', 'Client Side', `http://localhost:${port}`)
  })
}

export { initExpress }
