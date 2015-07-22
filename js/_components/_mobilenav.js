var mobileNavSettings
chopstick.mobileNav =
{
    settings:
    {
        navHolder: $('.js-nav-holder'),
        trigger: $('.js-nav-trigger'),
    },

    init: function()
    {
        mobileNavSettings = chopstick.mobileNav.settings;

        chopstick.mobileNav.enableMobileNav();
        chopstick.mobileNav.buildMobileNav();
    },

    enableMobileNav: function()
    {
        $('html').addClass('has-mobile-nav');
    },

    // build mobile nav
    buildMobileNav: function()
    {
        mobileNavSettings.trigger.on('click', function() {
            $('.js-nav').toggleClass('is-visible');
            $(this).toggleClass('is-active');
        });
    }
};
