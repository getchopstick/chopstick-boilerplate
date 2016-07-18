var toggleButton = new ChopstickToggle({
    target: '.js-toggle-target'
});

var mobileNavToggle = new ChopstickToggle({
    trigger: '.js-nav-trigger',
    target: '.js-nav',
    className: 'is-visible'
});













































if ($('js-nav').hasClass('is-visible')) {
    console.log(mobileNavToggle.trigger);
}


/* ISSUES */
/*
    1. If 2 different instances of ChopstickToggle have the same target, and another event: both events are linked.










*/
