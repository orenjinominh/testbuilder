// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

// input: a cardNumber which is a string of a number with 14 or 15 digits
// output: a string of "Diner's Club" if input starts with 38 or 39 and is 14 digits long
// or "American Express" if starts with 34 or 37 and is 15 digits long
// stubs: 
// 1. get length of string
// 2. convert from string to array using split
// 3. create new variable called cardNumberArray  
// 4. if length is 14 - if the parseInt of cardNumberArray[1] = 8 or 9, return 'Diner\'s Club'
// 5. if length is 15 - if the parseInt of cardNumberArray[1] = 4 or 7, return 'American Express'

var detectNetwork = function(cardNumber) {
  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long

  // Once you've read this, go ahead and try to implement this function, then return to the console.

  var network = 'Invalid card number given.';
  var cardNumberDigits = cardNumber.split('');
  
  if (cardNumberDigits[0] === '3' && (cardNumberDigits[1] === '8' || cardNumberDigits[1] === '9')) {
  	if (cardNumberDigits.length === 14) {
  		network = 'Diner\'s Club';
  	}
  } else if (cardNumberDigits[0] === '3' && (cardNumberDigits[1] === '4' || cardNumberDigits[1] === '7')) {
  	if (cardNumberDigits.length === 15) {
  		network = 'American Express';
  	}  	
  } else if (cardNumberDigits[0] === '4') {
    if (cardNumberDigits.length === 13 || cardNumberDigits.length === 16 || cardNumberDigits.length === 19) {
    	network = 'Visa';
    }
  } else if ((cardNumberDigits[0] === '5') && (cardNumberDigits[1] === '1' || cardNumberDigits[1] === '2' || cardNumberDigits[1] === '3' || cardNumberDigits[1] === '4' || cardNumberDigits[1] === '5')) {
    if (cardNumberDigits.length === 16) {
    	network = 'MasterCard';
    }
  } else if (cardNumber.substring(0, 4) === '6011' || cardNumber.substring(0, 2) === '65' || (Number(cardNumber.substring(0,3)) >= 644 && Number(cardNumber.substring(0,3)) <= 649)) {
    if (cardNumberDigits.length === 16 || cardNumberDigits.length === 19) {
      network = 'Discover';
    }
  } else if (cardNumber.substring(0, 4) === '5018' || cardNumber.substring(0, 4) === '5020' || cardNumber.substring(0, 4) === '5038' || cardNumber.substring(0, 4) === '6304') {
    if (cardNumberDigits.length >= 12 && cardNumberDigits.length <= 19) {
      network = "Maestro";
    }
  } else if (Number(cardNumber.substring(0, 6)) >= 622126 && Number(cardNumber.substring(0,6)) <= 622925 || (Number(cardNumber.substr(0,3)) >= 624 && Number(cardNumber.substr(0,3)) <= 626) || (Number(cardNumber.substr(0,4)) >= 6282 && Number(cardNumber.substr(0,4)) <= 6288)) {
    if (cardNumberDigits.length >= 16 || cardNumberDigits.length <= 19) {
      network = "China UnionPay";
    }
  }
  // exclusionary case to prevent overlap with Visa card number
  // looks at prefix's length AND length of cardNumber
  var prefixes = ['4903', '4905', '4911', '4936', '564182', '633110', '6333', '6759'];

  for (var i = 0; i < prefixes.length; i++) {
    if (prefixes[i] === cardNumber.substring(0, prefixes[i].length)) {
      if (cardNumberDigits.length === 16 || cardNumberDigits.length === 18 || cardNumberDigits.length === 19) {
        network = 'Switch';
      }
    }
  }

  return network; 
};

detectNetwork();






