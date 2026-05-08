const { createServer } = require('http')
const { parse } = require('url')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

const port = process.env.PORT || 3000

app.prepare().then(() => {
  createServer((req, res) => {
    const parsedUrl = parse(req.url, true)
    const { pathname } = parsedUrl

    // Add basic logging for debugging 404s
    if (pathname.startsWith('/_next/')) {
       console.log(`[Static] Serving: ${pathname}`);
    }

    handle(req, res, parsedUrl)
  }).listen(port, (err) => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
    console.log(`> Environment: ${process.env.NODE_ENV}`)
  })
})
