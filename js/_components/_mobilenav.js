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
        $('html').addClass('has-mobile-nav');
    },

    // build mobile nav
    buildMobileNav: function()
    {
        settings.trigger.on('click', function() {
            $('.js-nav').toggleClass('is-visible');
            $(this).toggleClass('is-active');
        });
    }
};
