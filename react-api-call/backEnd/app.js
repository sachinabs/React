const express = require('express');
const cors = require('cors');
const path = require('path');

let jokes = require('./modules/jokes')



let app = express();

app.get('/rand-joke',cors(),(req, res) => {
    console.clear();
    console.log("api called ... -- >> /rand-joke");
    jokes.getJokes(req,res)

})

app.get("/file",cors(),(req, res) => {
    let linkOf = (path.resolve('./modules/json-files/abc.png'))
    console.log(linkOf);
    res.sendFile(path.resolve('./modules/json-files/abc.png'))
})

let port = 4600;

app.listen(port,()=>{
    console.log(
        `port is now live on ${port}`
    );
});
