export default function toggle(showHideToggle = $('.js-show-hide')) {
    showHideToggle.on('touchstart click', function(e){
        var trigger = $(this);
        // Check if action needs to be prevented
        if (trigger.data("action") == "none") {
            e.preventDefault();
        }
        showHide(trigger.data("target-selector"));
        trigger.toggleClass('is-toggled');
    });
}

function showHide(targets) {
    $(targets).toggleClass('is-hidden');
}
