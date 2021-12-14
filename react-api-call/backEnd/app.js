const express = require('express');
const cors = require('cors');


let jokes = require('./modules/jokes')



let app = express();

app.get('/rand-joke',cors(),(req, res) => {
    console.clear();
    console.log("api called ... -- >> /rand-joke");
    jokes.getJokes(req,res)

})



let port = 4600;

app.listen(port,()=>{
    console.log(
        `port is now live on ${port}`
    );
});
