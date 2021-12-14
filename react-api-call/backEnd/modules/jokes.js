
const jokes = require("./json-files/punch.json");
exports.getJokes =function(req, res) {
    const random = (Math.floor(Math.random()*377 + 1));
    console.log(jokes[random]);
    console.log(random);
    res.send(jokes[random]);
}