var toggleButton2 = new ChopstickToggle({
        eventName: 'mouseover'
});
// toggleButton2.toggleState();
var toggleButton2 = new ChopstickToggle({
        trigger: '.js-toggle-button-alpha'
});


// var toggleButton1 = new ChopstickToggle();
// toggleButton1.hello();
// toggleButton1.toggleState();

// toggle.applyState();

// setTimeout(function(){
//     toggleButton2.removeState();
// }, 3000);

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
