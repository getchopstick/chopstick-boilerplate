jsTheme.mobileNav =
{
    init: function()
    {
        jsTheme.mobileNav.enableMobileNav();
        jsTheme.mobileNav.buildMobileNav();
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
        var navHolder = $('.c-header .inner');

        navHolder.prepend('<span class="c-main-nav-trigger">menu</span>');

        var trigger = $('.c-main-nav-trigger');
        var nav = $('.c-main-nav');

        trigger.on('click', function() {
            nav.toggle();
            $(this).toggleClass("is-active");
        });
    }
};
