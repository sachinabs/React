
// Require packages

const express = require('express');
const cors = require('cors');


// Require custom functions and api's
const {
    addOrUpdateCharacter,
    getCharacters,
    deleteCharacter,
    getCharacterById,
} = require('./dynamo');




const app = express();

app.use(cors());
app.use(express.json());

// Dummy api <--
app.get('/', (req, res) => {

    let TimeStamp= new Date().toLocaleString();
    console.log("Dummy page requested ... ", TimeStamp );

    res.send('Hello World');
});

app.get('/characters', async (req, res) => {
    let TimeStamp= new Date().toLocaleString();
    console.log("Characters page requested ... ", TimeStamp );


    try {
        const characters = await getCharacters();
        res.json(characters);
    } catch (err) {
        console.error(err);
        res.status(500).json({ err: 'Something went wrong' });
    }
});

app.get('/characters/:id', async (req, res) => {

    let TimeStamp= new Date().toLocaleString();
    console.log(`Character/${req.params.id} page requested ... `, TimeStamp );


    const id = req.params.id;
    try {
        const character = await getCharacterById(id);
        res.json(character);
    } catch (err) {
        console.error(err);
        res.status(500).json({ err: 'Something went wrong' });
    }
});

app.post('/characters', async (req, res) => {

    let TimeStamp= new Date().toLocaleString();
    console.log(`Characters [ update ] page requested ... `, TimeStamp );


    const character = req.body;
    try {
        const newCharacter = await addOrUpdateCharacter(character);
        res.json(newCharacter);
    } catch (err) {
        console.error(err);
        res.status(500).json({ err: 'Something went wrong' });
    }
});

app.put('/characters/:id', async (req, res) => {
    const character = req.body;
    const { id } = req.params;
    character.id = id;
    try {
        const newCharacter = await addOrUpdateCharacter(character);
        res.json(newCharacter);
    } catch (err) {
        console.error(err);
        res.status(500).json({ err: 'Something went wrong' });
    }
});

app.delete('/characters/:id', async (req, res) => {
    const { id } = req.params;
    let TimeStamp= new Date().toLocaleString();
    console.log(`Character id ${id} delete page requested ... `, TimeStamp );

    
    try {
        res.json(await deleteCharacter(id));
    } catch (err) {
        console.error(err);
        res.status(500).json({ err: 'Something went wrong' });
    }
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`listening on port port`);
});
