'use strict';

var mongoose = require('mongoose'),
    Beer = mongoose.model('Beer');

/**
 * Get beers
 */
exports.beers = function(req, res) {
  return Beer.find(function (err, beers) {
    if (!err) {
      return res.json(beers);
    } else {
      return res.send(err);
    }
  });
};