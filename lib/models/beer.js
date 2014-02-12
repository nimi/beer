'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
    
/**
 * Beer Schema
 */
var BeerSchema = new Schema({
  name: String,
  profile: String,
  beers: Array,
  ibu: Number,
  description: String,
});

/**
 * Validations
 */
BeerSchema.path('ibu').validate(function (num) {
  return num >= 1 && num <= 10;
}, 'IBU must be between 1 and 10');

mongoose.model('Beer', BeerSchema);
