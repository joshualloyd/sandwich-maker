// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(maker) {

  // Private variable to store the different meat prices
  var meatPrices = {
  	turkey: 0.90,
  	bacon: 1.50,
  	ham: 1.20,
  	salami: 0.80,
  	roast_beef: 1.35
  };

  // Augment the original object with another method
  maker.addMeat = function() {
    return meatPrices;
  };

  // Return the new, augmented object with the new method on it
  return maker;
})(SandwichMaker || {});