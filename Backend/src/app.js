import express from 'express'

const app = express()
// app.use(express.json())
// app.use(express.urlencoded({extended: true}));
// app.use(cors())

app.get('/test', (req, res) => {
    res.send("Hello working correct")

})

export default app