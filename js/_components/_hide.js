chopstick.hide =
{
    settings:
    {
        hide: $('.js-hide')
    },

    init: function()
    {
        settings = this.settings;
        chopstick.hide.hideContent();
    },

    hideContent: function ()
    {
        settings.hide.on('click', function(e)
        {
            e.preventDefault();
            $(this).closest(settings.hide).parent().addClass('is-hidden');
        });
    }
};
