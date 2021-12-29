const express = require('express');
const cors = require('cors');
const jwt = require('express-jwt');
const jwks = require('jwks-rsa');
const axios = require('axios');

const app = express();


app.use(cors())

const verifyJwt = jwt({
    secret: jwks.expressJwtSecret({
        cache: true,
          rateLimit: true,
          jwksRequestsPerMinute: 5,
          jwksUri: 'https://dev-u2xmbfuf.us.auth0.com/.well-known/jwks.json'
    }),
    audience:"my Identifier ",
    issuer: 'https://dev-u2xmbfuf.us.auth0.com/',
    algorithms: ['RS256']
})



// app.use(verifyJwt);
app.get('/',(req, res) => {

    let TimeStamp= new Date().toLocaleString();
    console.log("index page called ... ", TimeStamp );



    res.send("say hello from index page...");
});


app.get('/protected',verifyJwt,(req, res) => {

    let TimeStamp= new Date().toLocaleString();
    console.log("protected page called ... ", TimeStamp );


    res.send("say hello from protected page...")
});




let port = 5000; 

app.listen(port,()=>{
    console.log('listening on port '+port);
})