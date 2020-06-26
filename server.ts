const express = require('express')
const next = require('next')
const bodyParser = require('body-parser')
import axios from 'axios'
import api from './api'


const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare()
.then(() => {
  const server = express()
  server.use(bodyParser.urlencoded({ extended: false }))
  server.use(bodyParser.json())
  server.use('/api', api)

  server.get('/p/:id', (req, res) => { 
    const actualPage = '/post'
    const queryParams = { id: req.params.id }
    app.render(req, res, actualPage, queryParams)
  })

  server.get('/', (req, res) => { 
    const actualPage = '/home'
    const queryParams = { id: req.params.id }
    app.render(req, res, actualPage, queryParams)
  })

  server.get('/grammerhub', async (req, res) => {
    try {
      const resp = await axios.get("https://api.meetup.com/grammerhub/events")
      res.send(resp.data)
    } catch (err) {
      console.log(err)
    }
  })

  server.post('/contactus', async (req, res) => {
    try {
      console.log(req.body)
      const resp = await axios.post(
        "https://hooks.slack.com/services/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", 
        {text: req.body && req.body.text})
      res.send({ error: false, datum: resp.data })
    } catch (err) {
      res.send({ error: true, datum: err })
    }
  })

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(process.env.PORT || 3000, (err) => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${process.env.PORT || 3000}`)
  })
})
.catch((ex:any) => {
  console.error(ex.stack)
  process.exit(1)
})