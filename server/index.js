const express = require('express')
const next = require('next')
const path = require('path');
const { join } = require('path');
const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app
.prepare()
.then(() => {
  const server = express()

    server.get('/manifest.json', (req, res) => {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Headers', '*');
        res.sendFile(path.join(__dirname, '..', 'static', 'manifest.json'));
    });

    server.get('/a', (req, res) => {
        return app.render(req, res, '/a', req.query)
    })

    server.get('/b', (req, res) => {
        return app.render(req, res, '/b', req.query)
    })

    server.get('/posts/:id', (req, res) => {
        return app.render(req, res, '/posts', { id: req.params.id })
    })

    server.get('*', (req, res) => {
        return handle(req, res)
    })

    server.listen(port, err => {
        if (err) throw err
        console.log(`> Ready on http://localhost:${port}`)
    })
})