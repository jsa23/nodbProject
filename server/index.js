const express = require('express');
const { getPlayers, addPlayer, updatePlayer, deletePlayer } = require('/controllers/playerController')

const app = express();
app.use(express.json());

app.get('/api/players', getPlayers)

app.post('/api/players', addPlayer)

app.put('/api/players', updatePlayer)

app.delete('/api/players', deletePlayer)


app.listen(5050, () => console.log('listening on 5050'))