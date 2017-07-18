// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(maker) {

  // Private variable to store the different veggie prices
  var veggiePrices = {
  	lettuce: 0.40,
  	tomato: 0.50,
  	onion: 0.20,
  	green_pepper: 0.80,
  	olive: 0.35
  };

  // Augment the original object with another method
  maker.addMeat = function() {
    return meatPrices;
  };

  // Return the new, augmented object with the new method on it
  return maker;
})(SandwichMaker || {});