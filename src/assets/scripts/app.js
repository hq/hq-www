// require jQuery globally because every single script on this site needs jQuery
global.$ = global.jQuery = require('jquery');
// require('../../../../node_modules/jquery-mobile/dist/jquery.mobile.js');
// global.$.mobile = require('../../../node_modules/jquery-mobile/dist/jquery.mobile.js');

// custom modernizr
require('./vendors/modernizr-custom.js');

// navjs
require('./partials/nav.js');

// modal
require('./partials/modal.js');

// slick slider
require('./partials/slickslider.js');

// autosize textarea
require('./partials/autosize-area.js');

// skrollr
require('./partials/scroll.js');

// disable hover
require('./partials/disable-hover.js');

// before after for images
require('./partials/before-after.js');
