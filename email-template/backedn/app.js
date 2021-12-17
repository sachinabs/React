const express = require('express');
const cors = require('cors');


let app = express();


app.get('/show/:category',cors(),(req, res)=>{

    let category = req.params.category
    console.log(category);
    res.send(category);
})



let port = 7000;

app.listen(port, ()=>{
    console.log(`port is  live on ${port}`);
})



