export default function hide(hide = $('.js-hide')) {
    hide.on('click', function(e)
    {
        e.preventDefault();
        $(this).closest(hide).parent().addClass('is-hidden');
    });
}
