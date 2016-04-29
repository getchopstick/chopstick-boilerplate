/**
 * chopstickToggle
 * A basic javascript toggle module with extra options
 *
 * Dependency: jQuery
 *
 * Functionalities:
 * - Hide an element
 * - Toggle a class
 */

(function() {
    // 'use strict';

    // Define the constructor
    this.ChopstickToggle = function() {
        // Global element references
        chopstickToggle = this;

        // Create default values (super basic toggle)
        var defaults = {
            trigger: '.js-toggle-trigger',
            target: '.js-toggle-target',
            className: 'is-hidden',
            eventName: 'click',
            preventDefault: true, //the default action of the event will not be triggered.
        }

        // Create options by extending defaults with the passed in arugments
        // if (arguments[0] && typeof arguments[0] === "object") {
        this.options = $.extend(defaults, arguments[0]); //https://api.jquery.com/jquery.extend/
        // console.log(this.options);
        // }

        bindUIEvents.call(this);
    }

    // public methods
    ChopstickToggle.prototype.applyState = function() {
        // Apply a certain classname on a certain target

    }

    ChopstickToggle.prototype.removeState = function() {
        // Remove a certain classname on a certain target
    }

    ChopstickToggle.prototype.toggleState = function() {
        // toggle a certain classname on a certain target
        var target = $(this.options.target),
            className = $(this.options.className);

        target.toggleClass(className);
    }

    // Private methods
    function bindUIEvents() {
        console.log(this);
        var toggle = this;

        $(this.options.trigger).on(this.options.eventName, function(e) {
            // Toggle the default classname on the default target
            // this.toggleState.bind(this);
            if (toggle.options.preventDefault) {
                e.preventDefault();
            }

            toggle.toggleState();
            // console.log(this);
            // toggleState.call(toggle);
        });
    }

    // var module = {};
    //
    // /*
    // *  chopstickToggle.class
    // *  Toggle a class on an HTML element.
    // *  @param element {String} Element reference (e.g. .js-toggle-class)
    // *  @param classname {String} Class that needs to be toggled (e.g. .is-hidden)
    // *  @param pd {Number} Indicator if e.preventDefault needs to be enabled.
    // *  @param evt {String} Defines on which event the toggle needs to be triggerd.
    // */
    // module.class = function(element, classname, pd, evt) {
    //     var $target = $(element);
    //
    //     if (typeof pd === 'undefined') { pd = true; }
    //     if (typeof evt === 'undefined') { evt = 'click'; }
    //
    //     $target.on(evt, function(e) {
    //         // check if preventDefault needs to be enabled
    //         if(_enableCheck(pd)) { e.preventDefault(); }
    //         // toggle the class on the clicked element
    //         $(this).toggleClass(classname);
    //     });
    // }
    //
    // /*
    // *  _enableCheck
    // *  Used to check if user wants/doesn't want to enable a functionality.
    // *  @param value {Number} Value that indicates a want/doens't want.
    // */
    // var _enableCheck = function(value) {
    //     if (value === 1) {
    //         return true;
    //     }
    //     return false;
    // }
    //
    // return module;
}());
