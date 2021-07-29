const data = require('../players');
let players = [...data.players];
const { v4: uuid } = require('uuid');


function addPlayer(req, res){
    const { name, position } = req.body;
    players.push({ name, position, id: uuid() , points: 0});
    res.status(200).send(players);
}

function getPlayers(req, res){
    res.status(200).send(players);
}

function updatePlayer(req, res){
    const { playerid, points } = req.params
    console.log(playerid, points)
    const editIndex = players.findIndex(player => player.id === playerid)
    if (points > 0){
        players[editIndex].points += +points
    } else {
        players[editIndex].points = 0
    }
    res.status(200).send(players)
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