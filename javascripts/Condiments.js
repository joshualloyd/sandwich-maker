// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(maker) {

  // Private variable to store the different condiment prices
  var condimentPrices = {
  	mayo: 0.20,
  	mustard: 0.10,
  	ketchup: 0.15,
  	oil: 0.05,
  	vinegar: 0.05
  };

  // Augment the original object with another method
  maker.addCondiment = function() {
    return condimentPrices;
  };

  // Return the new, augmented object with the new method on it
  return maker;
})(SandwichMaker || {});