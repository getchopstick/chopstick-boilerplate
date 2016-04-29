var chopstick =
{
    // init, something like a constructor
    init: function()
    {
        chopstick.loadObject(chopstick.mobileNav, 'chopstick.mobileNav');
        chopstick.loadObject(chopstick.hide, 'chopstick.hide');
        chopstick.loadObject(chopstick.toggle, 'chopstick.toggle');

        console.log("javascript is locked and loaded!") // for testing purposes. Check your console. Delete after you finished reading this. :-)
    },

    /**
     * This function will load an object by a given name
     *
     * If the object doesn't exist no error will be thrown
     * But if object exists but doesn't have an init method it will throw an error
     *
     * If everything is ok we'll initiate the given object
     */
    loadObject: function(obj, name)
    {
        // create object based on a name
        // var objName = window[objName];

        // check if object exists
        if(typeof obj != 'undefined') {

            // check if object has a method init
            if (typeof obj.init == 'undefined') {
                // we will throw an error so the designer / developer know there's a problem
                throw new Error('ERROR: "' + name + '" does not have an init function');

            } else {
                // everything is fine so initiate
                obj.init();
            }
        }
    }
};

var hideSettings
chopstick.hide =
{
    settings:
    {
        hide: $('.js-hide')
    },

    init: function()
    {
        hideSettings = chopstick.hide.settings;
        chopstick.hide.hideContent();
    },

    hideContent: function ()
    {
        hideSettings.hide.on('click', function(e)
        {
            e.preventDefault();
            $(this).closest(hideSettings.hide).parent().addClass('is-hidden');
        });
    }
};

var mobileNavSettings
chopstick.mobileNav =
{
    settings:
    {
        navigation: $('.js-nav'),
        trigger: $('.js-nav-trigger')
    },

    init: function()
    {
        // Initialize mobile nav settings
        mobileNavSettings = chopstick.mobileNav.settings;
        // Bind toggle events
        chopstick.mobileNav.bindUIEvents();
    },

    bindUIEvents: function()
    {
        mobileNavSettings.trigger.on('click', function() {
            chopstick.mobileNav.toggleNavigation();
        });
    },

    // build mobile nav
    toggleNavigation: function()
    {
        mobileNavSettings.navigation.toggleClass('is-visible');
        mobileNavSettings.trigger.toggleClass('is-active');
    }
};

var toggleSettings
chopstick.toggle =
{
    settings:
    {
        showHideToggle: $('.js-show-hide')
    },

    init: function()
    {
        // Initialize toggle settings
        toggleSettings = chopstick.toggle.settings;
        // Bind toggle events
        chopstick.toggle.bindUIEvents();
    },

    bindUIEvents: function()
    {
        // Bind show hide event
        toggleSettings.showHideToggle.on('touchstart click', function(e){
            var trigger = $(this);
            // Check if action needs to be prevented
            if (trigger.data("action") == "none") {
                e.preventDefault();
            }
            chopstick.toggle.showHide(trigger.data("target-selector"));
            trigger.toggleClass('is-toggled');
        });
    },

    showHide: function(targets)
    {
        //  Toggle the 'is-hidden' class
        $(targets).toggleClass('is-hidden');
    }
};

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

$(chopstick.init);

var toggle = new ChopstickToggle();

toggle.applyState();

console.log("javascript.js loaded");
