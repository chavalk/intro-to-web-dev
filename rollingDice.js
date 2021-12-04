var numSides = prompt('How many sides does the die have?');
var numDice = prompt('How many dice are you using?');

function rollDice(numSides) {
    return Math.floor(Math.random() * numSides) + 1;
}

for (var i = 0; i < numDice; i++) {
    console.log(rollDice(numSides));
}