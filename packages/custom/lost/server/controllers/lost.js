'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  User = mongoose.model('User'),
  async = require('async'),
  config = require('meanio').loadConfig(),
  crypto = require('crypto'),
  nodemailer = require('nodemailer');

/**
 * Auth callback
 */
exports.activate = function(req, res) {
  res.send('/act');
};
exports.report = function(req, res) {
  res.send('/report');
};
exports.reward = function(req, res) {
  res.send('/rewa');
};
exports.create = function(req, res) {
  res.send('/cre');
};

