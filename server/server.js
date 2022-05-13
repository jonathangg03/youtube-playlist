const express = require('express')
const cors = require('cors')
const path = require('path')
const app = express()

app.set('port', process.env.PORT)

app.use(cors())
app.use('/', express.static(path.join(__dirname, '../dist/bundle.js')))

app.listen(app.get('port'), () =>
  console.log(`Listen on port:${app.get('port')}`)
)
