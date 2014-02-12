'use strict';

var mongoose = require('mongoose'),
  Beer = mongoose.model('Beer');

/**
 * Populate database with sample application data
 */

//Clear old Beers, then add Beers in
Beer.find({}).remove(function() {
  Beer.create({
    name: 'Pale Ale',
    profile: 'Flavor Profile',
    beers: ['Founders', 
            'Bells'
            ],
    ibu: 10,
    description: 'Beer description'
  }, {
    name: 'India Pale Ale',
    profile: 'Flavor Profile',
    beers: ['Founders', 
            'Bells'
            ],
    ibu: 10,
    description: 'Beer description'
  }, {
    name: 'Hefeweizen',
    profile: 'Flavor Profile',
    beers: ['Founders', 
            'Bells'
            ],
    ibu: 10,
    description: 'Beer description'
  }, {
    name: 'Porter',
    profile: 'Flavor Profile',
    beers: ['Founders', 
            'Bells'
            ],
    ibu: 10,
    description: 'Beer description'
  }, {
    name: 'Stout',
    profile: 'Flavor Profile',
    beers: ['Founders', 
            'Bells'
            ],
    ibu: 10,
    description: 'Beer description'
  }, function() {
      console.log('finished populating Beers');
    }
  );
});
