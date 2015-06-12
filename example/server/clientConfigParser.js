/*jshint node:true */
'use strict';
var config = require('config');

var clientConfigParser = function (req, res) {
  var _config = {
    'ports': config.get('ports'),
    'url': config.get('url'),
    'email': 'jorge.silva@thejsj.com'
  };
  var str = 'window.config = ' + JSON.stringify(_config) + ';';
  res
    .type('text/javascript')
    .send(str);
};

module.exports = clientConfigParser;
