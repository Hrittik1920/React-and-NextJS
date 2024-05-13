import express from "express";
import cors from 'cors'
import bodyParser from "body-parser";
const app = express();
const port = 3000;

app.use(cors())
app.use(bodyParser.json())

app.get("/", (req, res) => {
    res.send("Hello from the server;)")
})

app.post('/', (req, res) => {
    console.log(req.body)
    res.send("Successfully data exceses!")
})

app.listen(port, () => {
    console.log(`Port listening in the port no. ${port}`)
})