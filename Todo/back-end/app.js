const express = require('express');
const cors = require('cors');


let app = express();




app.get('/insert',cors(),(req,res) =>{
    
    console.log("response from the server <<------------");


    let data = req.query;
    console.log(data);
 


})








let port  =  5000;

app.listen(port, ()=>{
    console.log(`App is now live on ${port}`);
})