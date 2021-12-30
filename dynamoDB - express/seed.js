const axios = require('axios');
const { addOrUpdateCharacter } = require('./dynamo');

const seedData = async () => {
    const url = 'https://raw.githubusercontent.com/sachinabs/React/main/react-api-call/backEnd/modules/json-files/punch.json';
    try {
        const { data: characters } = await axios.get(url);
        console.log(characters);
        const characterPromises = characters.map((character, i) =>
            addOrUpdateCharacter({ ...character, id: i + '' })
        );
        await Promise.all(characterPromises);
    } catch (err) {
        console.error(err);
        console.log('AHHHHHHHHHHH');
    }
};
seedData();
