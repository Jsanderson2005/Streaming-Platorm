import express from 'express'
import path from 'path'
import cors from 'cors'
import log from '../utils/log'
const fs = require('fs')
var proxy = require('express-http-proxy');  

const initExpress = () => {
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
      var mainJson = JSON.parse(fs.readFileSync(path.join(__dirname, 'chats/chat1.json')).toString())
      mainJson.push(add_json)
      var jsonStr = JSON.stringify(mainJson)
      var logOutput = "Time: " + add_json.date + "Message: " + add_json.message + "Client IP: " + req.ip  
      log("Message:", "Client Side", logOutput)
      fs.writeFile(path.resolve(__dirname, 'chats/chat1.json'), jsonStr, err => {
        if (err) {
          res.send('Error writing to file!')
        } else {
          res.send('Successfully wrote to file!')
        }
      })
    } else {
      return res.sendFile(path.resolve(__dirname, 'chats/chat1.json'))
    }
  })

  app.get('/api/chats/chat2.json', (req, res) => {
    if (req.query.message) {
      let date_ob = new Date();
      var messageContent = req.query.message
      var time = date_ob.getHours() + ":" + date_ob.getMinutes()
      var add_json = {date: time, content: messageContent}
      var mainJson = JSON.parse(fs.readFileSync(path.join(__dirname, 'chats/chat2.json')).toString())
      mainJson.push(add_json)
      var jsonStr = JSON.stringify(mainJson)
      var logOutput = "Time: " + add_json.date + "Message: " + add_json.message + "Client IP: " + req.ip  
      log("Message:", "Client Side", logOutput)
      fs.writeFile(path.resolve(__dirname, 'chats/chat2.json'), jsonStr, err => {
        if (err) {
          res.send('Error writing to file!')
        } else {
          res.send('Successfully wrote to file!')
        }
      })
    } else {
      return res.sendFile(path.resolve(__dirname, 'chats/chat2.json'))
    }
  })

  app.get('/api/chats/chat3.json', (req, res) => {
    if (req.query.message) {
      let date_ob = new Date();
      var messageContent = req.query.message
      var time = date_ob.getHours() + ":" + date_ob.getMinutes()
      var add_json = {date: time, content: messageContent}
      var mainJson = JSON.parse(fs.readFileSync(path.join(__dirname, 'chats/chat3.json')).toString())
      mainJson.push(add_json)
      var jsonStr = JSON.stringify(mainJson)
      var logOutput = "Time: " + add_json.date + "Message: " + add_json.message + "Client IP: " + req.ip  
      log("Message:", "Client Side", logOutput)
      fs.writeFile(path.resolve(__dirname, 'chats/chat3.json'), jsonStr, err => {
        if (err) {
          res.send('Error writing to file!')
        } else {
          res.send('Successfully wrote to file!')
        }
      })
    } else {
      return res.sendFile(path.resolve(__dirname, 'chats/chat3.json'))
    }
  })

  app.get('/api/chats/chat4.json', (req, res) => {
    if (req.query.message) {
      let date_ob = new Date();
      var messageContent = req.query.message
      var time = date_ob.getHours() + ":" + date_ob.getMinutes()
      var add_json = {date: time, content: messageContent}
      var mainJson = JSON.parse(fs.readFileSync(path.join(__dirname, 'chats/chat4.json')).toString())
      mainJson.push(add_json)
      var jsonStr = JSON.stringify(mainJson)
      var logOutput = "Time: " + add_json.date + "Message: " + add_json.message + "Client IP: " + req.ip  
      log("Message:", "Client Side", logOutput)
      fs.writeFile(path.resolve(__dirname, 'chats/chat4.json'), jsonStr, err => {
        if (err) {
          res.send('Error writing to file!')
        } else {
          res.send('Successfully wrote to file!')
        }
      })
    } else {
      return res.sendFile(path.resolve(__dirname, 'chats/chat4.json'))
    }
  })

  app.get('/api/chats/chat5.json', (req, res) => {
    if (req.query.message) {
      let date_ob = new Date();
      var messageContent = req.query.message
      var time = date_ob.getHours() + ":" + date_ob.getMinutes()
      var add_json = {date: time, content: messageContent}
      var mainJson = JSON.parse(fs.readFileSync(path.join(__dirname, 'chats/chat5.json')).toString())
      mainJson.push(add_json)
      var jsonStr = JSON.stringify(mainJson)
      var logOutput = "Time: " + add_json.date + "Message: " + add_json.message + "Client IP: " + req.ip  
      log("Message:", "Client Side", logOutput)
      fs.writeFile(path.resolve(__dirname, 'chats/chat5.json'), jsonStr, err => {
        if (err) {
          res.send('Error writing to file!')
        } else {
          res.send('Successfully wrote to file!')
        }
      })
    } else {
      return res.sendFile(path.resolve(__dirname, 'chats/chat5.json'))
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
