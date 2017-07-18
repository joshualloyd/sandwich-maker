// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(maker) {

  // Private variable to store the different bread prices
  var breadPrices = {
  	white: 0.40,
  	wheat: 0.50,
  	sourdough: 0.75,
  	rye: 0.60,
  	banana: 1.00
  };

  // Augment the original object with another method
  maker.addBread = function() {
    return breadPrices;
  };

  // Return the new, augmented object with the new method on it
  return maker;
})(SandwichMaker || {});