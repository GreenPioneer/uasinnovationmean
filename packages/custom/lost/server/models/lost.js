'use strict';

/**
 * Module dependencies.
 */
var mongoose  = require('mongoose'),
    Schema    = mongoose.Schema,
    crypto    = require('crypto'),
          _   = require('lodash');



var ActivateSchema = new Schema({
  name: {
    type: String,
    required: true
  }
});



mongoose.model('Activate', ActivateSchema);
