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
            { number: 1, name: 'Space Pilot 3000', air: '1999-Mar-28' },
            { number: 2, name: 'The Series Has Landed', air: '1999-Apr-04' },
            { number: 3, name: 'I, Roommate', air: '1999-Apr-06' },
            { number: 4, name: "Love's Labours Lost in Space", air: '1999-Apr-13' },
            { number: 5, name: 'Fear of a Bot Planet', air: '1999-Apr-20' },
            { number: 6, name: 'A Fishful of Dollars', air: '1999-Apr-27' },
            { number: 7, name: 'My Three Suns', air: '1999-May-04' },
            { number: 8, name: 'A Big Piece of Garbage', air: '1999-May-11' },
            { number: 9, name: 'Hell is other Robots', air: '1999-May-18' },
        ]
    },
    {
        season: 2, episodes: [
            { number: 1, name: 'A Flight to Remember', air: '1999-Sep-26' },
            { number: 2, name: 'Mars University', air: '1999-Oct-03' },
            { number: 3, name: 'When Aliens Attack', air: '1999-Nov-07' },
            { number: 4, name: 'Fry and the Slurm Factory', air: '1999-Nov-14' },
            { number: 5, name: 'I Second That Emotion', air: '1999-Nov-21' },
            { number: 6, name: 'Brannigan, Begin Again', air: '1999-Nov-21' },
            { number: 7, name: 'A Head in the Polls', air: '1999-Dec-12' },
            { number: 8, name: 'Xmas Story', air: '1999-Dec-19' },
            { number: 9, name: 'Why Must I Be a Crustacean in Love?', air: '2000-Feb-06' },
            { number: 10, name: 'Put Your Head on My Shoulders', air: '2000-Feb-13' },
            { number: 11, name: 'The Lesser of Two Evils', air: '2000-Feb-20' },
            { number: 12, name: 'Raging Bender', air: '2000-Feb-27' },
            { number: 13, name: 'A Bicyclops Built for Two', air: '2000-Mar-19' },
            { number: 14, name: 'How Hermes Requisitioned His Groove Back', air: '2000-Apr-02' },
            { number: 1, name: '', air: '' },
            { number: 1, name: '', air: '' },
            { number: 1, name: '', air: '' },
            { number: 1, name: '', air: '' },
            { number: 1, name: '', air: '' },
            { number: 1, name: '', air: '' },
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