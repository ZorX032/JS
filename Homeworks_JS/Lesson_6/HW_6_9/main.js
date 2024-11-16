// #bolvdlhP
// описати колоду карт (від 6 до туза без джокерів)
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше
//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king'
//     color:'', // 'red','black'
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
// console.log(cards);
// - знаходимо піковий туз
console.log(cards.find(card => card.cardSuit === 'spade' && card.cardValues === 'ace'));

// - знаходимо всі шістки
console.log(cards.filter(card => card.cardValues === '6'));

// - знаходимо всі червоні карти
console.log(cards.filter(card => card.color === 'red'));
// знаходимо всі буби
console.log(cards.filter(card => card.cardSuit === 'diamond'));
// знаходимо всі трефи від 9 та більше
console.log(cards.filter(card => card.cardSuit === 'club' && (card.cardValues !== '6' && card.cardValues !== '7' && card.cardValues !== '8')));
