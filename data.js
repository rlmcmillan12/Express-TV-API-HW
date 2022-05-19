const characters = [
    { characterID: 1, character: 'Phillip J. Fry', credit: 'Billy West' },
    { characterID: 2, character: 'Turanga Leela', credit: 'Katey Sagal' },
    { characterID: 3, character: 'Bender Bending Rodríguez', credit: 'John DiMaggio' },
    { characterID: 4, character: 'Amy Wong', credit: 'Lauren Tom' },
    { characterID: 5, character: 'Hermes Conrad', credit: 'Phil LaMarr' },
    { characterID: 6, character: 'Professor Hubert J. Farnsworth', credit: 'Billy West' },
    { characterID: 7, character: 'Dr. John A. Zoidberg', credit: 'Billy West' },
]
const episodes = [
    {
        season: 1, episodes: [
            { number: 101, name: 'Space Pilot 3000', air: '1999-Mar-28' },
            { number: 102, name: 'The Series Has Landed', air: '1999-Apr-04' },
            { number: 103, name: 'I, Roommate', air: '1999-Apr-06' },
            { number: 104, name: "Love's Labours Lost in Space", air: '1999-Apr-13' },
            { number: 105, name: 'Fear of a Bot Planet', air: '1999-Apr-20' },
            { number: 106, name: 'A Fishful of Dollars', air: '1999-Apr-27' },
            { number: 107, name: 'My Three Suns', air: '1999-May-04' },
            { number: 108, name: 'A Big Piece of Garbage', air: '1999-May-11' },
            { number: 109, name: 'Hell is other Robots', air: '1999-May-18' },
        ]
    },
    {
        season: 2, episodes: [
            // { number: 101, name: 'Space Pilot 3000', air: '1999-Mar-28' },
        ]
    },
    {
        season: 3, episodes: [
            // { number: 101, name: 'Space Pilot 3000', air: '1999-Mar-28' },
        ]
    },
    {
        season: 4, episodes: [
            // { number: 101, name: 'Space Pilot 3000', air: '1999-Mar-28' },
        ]
    },
    {
        season: 5, episodes: [
            // { number: 101, name: 'Space Pilot 3000', air: '1999-Mar-28' },
        ]
    },

]

module.exports = {
    characters: characters,
    episodes: episodes
}