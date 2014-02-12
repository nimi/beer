'use strict';

var mongoose = require('mongoose'),
    Beer = mongoose.model('Beer');

/**
 * Get awesome things
 */
exports.awesomeThings = function(req, res) {
  return Beer.find(function (err, things) {
    if (!err) {
      return res.json(things);
    } else {
      return res.send(err);
    }
  });
};