const tape = require('tape')
const jsonist = require('jsonist')

const PORT = process.env.PORT = process.env.PORT || require('get-PORT-sync')()
const server = require('./server')

const urlBase = `http://localhost:${PORT}`
const urlUserAgent = `http://localhost:${PORT}/user-agent`
const urlBase64 = `http://localhost:${PORT}/base64`

tape('should respond hello', (t) => {
  jsonist.get(urlBase, (err, body) => {
    if (err) t.error(err)

    t.equal(body.msg, 'hello')
    t.end()
  })
})

tape('should respond user agent', (t) => {
  jsonist.get(urlUserAgent, (err, body) => {
    if (err) t.error(err)

    t.equal(body.msg, 'User agent')
    t.end()
  })
})

tape('should respond base64', (t) => {
  jsonist.get(urlBase64, (err, body) => {
    if (err) t.error(err)

    t.equal(body.msg, 'Base64')
    t.end()
  })
})

tape('cleanup', function (t) {
  server.close()
  t.end()
})
