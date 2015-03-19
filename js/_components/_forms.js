jsTheme.forms =
{
    init: function()
    {
        $('.c-alert-box').on('click', function(e)
        {
            e.preventDefault();
            $(this).closest('.c-alert-box').fadeOut(300);
        });
    }
};
