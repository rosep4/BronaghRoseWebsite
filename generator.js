var NumberOfWords = 28

var words = new BuildArray(NumberOfWords)

// Use the following variables to
// define your random words:
words[1] = "Use rechargeable batteries"
words[2] = "Bring your own bags to the grocery store"
words[3] = "Look for products that have less packaging"
words[4] = "Print on both sides of the paper"
words[5] = "Switch off computer monitors, and other equipment at the end of each day"
words[6] = "Use public transport"
words[7] = "Use recyclable paper to make invitation cards, envelops, letter pads etc., if you can"
words[8] = "Donate clothes, toys and books to charity"
words[9] = "Rinse items before recycling them"
words[10] = "Store food and other products in containers rather than foil and plastic wrap"
words[11] = "Buy fruit and vegetables that are in season"
words[12] = "Wash your clothes at 40degrees"
words[13] = "Invest in a resuable coffee cup"
words[14] = "Turn off the tap when you are brushing your teeth or shaving"
words[15] = "Let clothes dry naturally"
words[16] = "Avoid plastic straws"
words[17] = "Start a compost"
words[18] = "Install energy efficient lightbulbs"
words[19] = "Avoid aerosols"
words[20] = "Buy local"
words[21] = "Buy organic fruits and vegetables"
words[22] = "Buy in season fish"
words[23] = "Shower instead of bathing"
words[24] = "Plan meals to avoid food wastage"
words[25] = "Buy a reusable water bottle"
words[26] = "Try shop in a local farmers market"
words[27] = "Switch to loose tea"
words[28] = "Take your leftovers home from a restaurant"

function BuildArray(size){
this.length = size
for (var i = 1; i <= size; i++){
this[i] = null}
return this
}

function PickRandomWord(frm) {
// Generate a random number between 1 and NumberOfWords
var rnd = Math.ceil(Math.random() * NumberOfWords)

// Display the word inside the text box
frm.WordBox.value = words[rnd]
}
