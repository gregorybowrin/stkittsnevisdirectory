const { createServer } = require('http')
const { parse } = require('url')
const { join } = require('path')
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
       console.log(`[Static] Requesting: ${pathname}`);
    }

    // Explicitly handle /_next/static
    if (pathname.startsWith('/_next/static/')) {
      const filePath = join(__dirname, '.next', 'static', pathname.replace('/_next/static/', ''))
      console.log(`[Static] Mapping to: ${filePath}`);
    }

    handle(req, res, parsedUrl)
  }).listen(port, (err) => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
    console.log(`> Environment: ${process.env.NODE_ENV}`)
  })
})
