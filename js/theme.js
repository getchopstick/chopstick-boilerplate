var jsTheme =
{
	// init, something like a constructor
	init: function()
	{
		jsTheme.mobileNav.init();
		jsTheme.forms.init();
		jsTheme.toggle.init();
		console.log("javascript is locked and loaded!") // for testing purposes. Check your console. Delete after you finished reading this. :-)
	}

};

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
		$("html").addClass("mobile-nav");
	},

	// build mobile nav
	buildMobileNav: function()
	{
		var navHolder = $('.header .inner');

		navHolder.prepend('<span class="main-nav-trigger">menu</span>');

		var trigger = $('.main-nav-trigger');
		var nav = $('.main-nav');

		trigger.on('click', function() {
			nav.toggle();
			$(this).toggleClass("trigger-active");
		});
	}
};

jsTheme.forms =
{
	init: function()
	{
		$('.alert-box').on('click', function(e)
		{
			e.preventDefault();
			$(this).closest('.alert-box').fadeOut(300);
		});
	}
};

jsTheme.toggle =
{
	init: function() {
		// The toggle is called with the '.js-toggle' class and one or more data-targets
		// Use the 'is-hidden' class to hide your elements"
		var toggle = $('.js-toggle');

		// Toggle functionality
		toggle.on('touchstart click', function(e){
			// Prevent the default action on links
			e.preventDefault();

			// Split the targets if multiple
			var targets = $(this).data("target").replace(" ", "").split(",");

			// Loop trough targets and toggle the 'is-hidden' class
			for (var i = targets.length - 1; i >= 0; i--) {
				if(targets[i]){
					// Toggle the 'is-hidden' class
					$(targets[i]).toggleClass('is-hidden');
				}
			}

			// Add an 'is-toggled' class to the trigger.
			// Use this class to style your icons, active states, etc.
			$(this).toggleClass('is-toggled');

			return false;
		});
	}
};

$(jsTheme.init);
