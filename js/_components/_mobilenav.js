chopstick.mobileNav =
{
    settings:
    {
        navHolder: $('.c-header .inner')
        trigger: $('.c-main-nav-trigger'),
        nav: $('.c-main-nav')
    },
    init: function()
    {
        settings = this.settings;

        chopstick.mobileNav.enableMobileNav();
        chopstick.mobileNav.buildMobileNav();
    },

    // CSS is based on the class .mobile-nav
    //
    enableMobileNav: function()
    {
        $("html").addClass("c-mobile-nav");
    },

    // build mobile nav
    buildMobileNav: function()
    {
        settings.navHolder.prepend('<span class="c-main-nav-trigger">menu</span>');

        settings.trigger.on('click', function() {
            settings.nav.toggle();
            $(this).toggleClass("is-active");
        });
    }
};
