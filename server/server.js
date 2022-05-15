const express = require('express')
const cors = require('cors')
const path = require('path')
const app = express()

app.set('port', 3002)

app.use(cors())
app.use('/sd', express.static(path.join(__dirname, '../dist/index.html')))

app.listen(app.get('port'), () =>
  console.log(`Listen on port:${app.get('port')}`)
)
