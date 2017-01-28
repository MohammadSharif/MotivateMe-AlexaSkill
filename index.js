'use strict';
var Motivator = require('./motivate');

exports.handler = function (event, context) {
    var motivator = new Motivator();
    motivator.execute(event, context);
};
