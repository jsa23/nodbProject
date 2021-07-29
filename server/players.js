const { v4: uuid } = require('uuid');

const players = [
    {
        "name": 'Mike Conley',
        "position": "PG",
        "points": 0,
        "id": uuid()
    },
    {
        "name": "Donovan Mitchell",
        "position": "SG",
        "points": 0,
        "id": uuid()
    },
    {
        "name": "Bojan Bogdonovic",
        "position": "SF",
        "points": 0,
        "id": uuid()
    },
    {
        "name": "Royce O' Neal",
        "position": "PF",
        "points": 0,
        "id": uuid()
    },
    {
        "name": "Rudy Gobert",
        "position": "C",
        "points": 0,
        "id": uuid()
    }
]

module.exports = {
    players,
}
// export default players;
