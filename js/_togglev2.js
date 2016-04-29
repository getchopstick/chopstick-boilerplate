;(function ($, window, document) {
    'use strict';
    console.log("toggle");

    function chopstickToggle(element, options) {
        this.options = $.extend(ChopstickToggle.Defaults, options);
        this.element = $(element);
    };

    ChopstickToggle.Defaults = {
        classToggle: true,
        classToToggle: null,
        data: false,
    };

    ChopstickToggle.prototype.init = function() {

    }
    // $.fn.chopstickToggle = function(options) {
    //
    // }
}(jQuery, window, document));
