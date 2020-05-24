const express = require('express')
const app = express()
const cors = require('cors')
const dotenv = require('dotenv')
const viacep = require('./api/viacep')
dotenv.config()

app.use(cors({ origin: '*' }))
app.get('/', (req, res) => {
  res.send('Listen on port 9000')
})
app.use('/api', viacep)
app.listen(9000)
