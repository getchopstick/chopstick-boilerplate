var jsTheme =
{
	// init, something like a constructor
	init: function()
	{
		jsTheme.mobileNav.init();
		jsTheme.forms.init();
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

$(jsTheme.init);
