var ContentView = require('streamhub-sdk/content/views/content-view');
var inherits = require('inherits');

var FaceContentView = module.exports = function () {
    ContentView.apply(this, arguments);
};

inherits(FaceContentView, ContentView);
