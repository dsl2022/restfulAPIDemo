const express = require('express');
const { poke_db } = require("./database")
const cors = require('cors');
const PORT = 5000

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/", (req,res)=>{
    res.status(200)
    res.send("success")
})

app.get("/pokemons",async (req,res)=>{
    // const data = await getAllPoke();
    res.status(200);
    res.send(poke_db);    
});

app.post("/pokemons",async (req,res)=>{
    const {body} = req;
    poke_db.count +=1;
    poke_db.results.push(body);
    console.log("test added",poke_db.results.pop())
    // const data = await getAllPoke();
    // res.status(200);
    // res.send(poke_db);    
});

app.listen(PORT,()=>{
    console.log(`server is running on ${PORT}`)
})
