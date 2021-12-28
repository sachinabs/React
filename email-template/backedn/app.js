const express = require('express');
const cors = require('cors');

const template = require('./template.json');


let app = express();


app.get('/show/:category',cors(),(req, res)=>{

    let category = req.params.category
    console.log(category);
    if(category == "welcome")
    { 
        console.log("welcome");
        var response = template.filter(list => list.categorie.includes("welcome"));
        res.send(response);
        console.log(response);
    }
    // console.log(template);
})



let port = 7000;

app.listen(port, ()=>{
    console.log(`port is  live on ${port}`);
})



