chopstick.mobileNav =
{
    settings:
    {
        navHolder: $('.js-nav-holder'),
        trigger: $('.js-nav-trigger'),
    },

    init: function()
    {
        settings = this.settings;

        chopstick.mobileNav.enableMobileNav();
        chopstick.mobileNav.buildMobileNav();
    },

    enableMobileNav: function()
    {
        $("html").addClass("c-mobile-nav");
    },

    // build mobile nav
    buildMobileNav: function()
    {
        settings.trigger.on('click', function() {
            $('.js-nav').toggle();
            $(this).toggleClass("is-active");
        });
    }
};
