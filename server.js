const express = require('express');
const { getAllPoke } = require("./api-services")
const cors = require('cors');
const PORT = 5000

const app = express();
app.use(cors())

app.get("/", (req,res)=>{
    res.status(200)
    res.send("success")
})

app.get("/pokemons",async (req,res)=>{
    // const data = await getAllPoke();
    res.status(200);
    res.send(data);    
});

app.listen(PORT,()=>{
    console.log(`server is running on ${PORT}`)
})
