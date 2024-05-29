const express = require('express');
const app = express()
const cors = require('cors')
require('dotenv').config()
const port = process.env.PORT || 500


// Meddail ware 
app.use(cors())
app.use(express.json())


app.get('/',(req,res)=>{
    res.send('Bistro boss is comming')
})

app.listen(port,()=>{
    console.log(`Ware are you comming this side ${port}`)
})