const data = require('../players');
let players = [...data.players];

function addPlayer(req, res){
    const { name } = req.body;
    players.push({ name });

    res.status(200).send(players);
}

function getPlayers(req, res){
    res.status(200).send(players);
}

function updatePlayer(req, res){
    
}

function deletePlayer(req, res){
    const { deleteId } = req.query;
    console.log({ deleteId })
    const deleteIndex = players.findIndex(player => player.id === deleteId)
    players.splice(deleteIndex, 1);

    res.status(200).send(players);
}

module.exports = {
    addPlayer,
    getPlayers,
    updatePlayer,
    deletePlayer,
}