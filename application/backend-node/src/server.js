const express = require('express')
const mongoose = require('mongoose')
const PORT = process.env.PORT || 3000
const cors = require("cors")

const authenticateRoute = require('./routes/authenticate')
const listingRoute = require('./routes/listing')

const app = express()
app.use(express.json())
app.use(cors())

app.use('/api/authenticate', authenticateRoute)
app.use('/api/listing', listingRoute)

app.get("/", (req, res) => {
    res.send("This is backend!")
})

app.get('*', (req, res)=>{
    res.send('404, route not found!')
})

mongoose
    .connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then( ()=> {
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
    })
    .catch( (err)=> {
        console.log(err)
        process.exit(1)
    })