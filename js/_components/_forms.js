jsTheme.forms =
{
    init: function()
    {
        $('.o-alert-box').on('click', function(e)
        {
            e.preventDefault();
            $(this).closest('.o-alert-box').fadeOut(300);
        });
    }
};
