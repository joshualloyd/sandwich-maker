// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(maker) {

  // Private variable to store the different cheese prices
  var cheesePrices = {
  	cheddar: 0.80,
  	swiss: 0.60,
  	colby: 0.90,
  	pepper_jack: 0.75,
  	mozzarella: 0.65
  };

  // Augment the original object with another method
  maker.addCheese = function() {
    return cheezePrices;
  };

  // Return the new, augmented object with the new method on it
  return maker;
})(SandwichMaker || {});