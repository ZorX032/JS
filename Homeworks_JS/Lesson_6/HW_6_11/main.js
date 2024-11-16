// #EP5I1UUzAX
// Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }


const suits = ['spade', 'diamond', 'heart', 'club'];
const values = ['6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'];
const cards = [];
for (const suit of suits) {
    for (const value of values) {
        const card = ({cardSuit: suit, cardValues: value});
        if (suit === 'heart' || suit === 'diamond') {
            card.color = 'red';
        } else {
            card.color = 'black';
        }
        cards.push(card)
    }
}

const reduce = cards.reduce((accum, card) => {
        switch (card.cardSuit) {
            case 'heart':
                accum.spades.push(card);
                break;
            case 'diamond':
                accum.diamonds.push(card);
                break;
            case 'club':
                accum.clubs.push(card);
                break;
            case 'spade':
                accum.hearts.push(card);
                break;

        }
        return accum;
    },
    {
        hearts: [],
        diamonds: [],
        clubs: [],
        spades: []
    });


console.log(reduce);