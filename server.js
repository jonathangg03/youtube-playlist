const express = require('express')
const cors = require('cors')
const path = require('path')
const app = express()

app.set('port', 3002)

app.use(cors())
app.use(express.static(path.join(__dirname, '/public/dist')))

app.listen(app.get('port'), () =>
  console.log(`Listen on port:${app.get('port')}`)
)
