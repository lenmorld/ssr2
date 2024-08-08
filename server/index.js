const express = require('express')
const path = require('path')

const PORT = 4000
const app = express()

app.use(express.static('./public'))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public', 'index.html'))
    // res.sendFile('index.html')
})


app.listen(PORT, () => {
    console.log("server here!")
})