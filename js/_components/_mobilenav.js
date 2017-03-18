export default function mobileNav(navigation = $('.js-nav'), trigger = $('.js-nav-trigger')) {

    trigger.on('click', function() {
        navigation.toggleClass('is-visible');
        trigger.toggleClass('is-active');
    });

}
