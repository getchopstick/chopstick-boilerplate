var jsTheme =
{
	// init, something like a constructor
	init: function()
	{
		jsTheme.mobileNav.init();
		jsTheme.forms.init();
		jsTheme.toggle.init();
		console.log("javascript is locked and loaded!"); // for testing purposes. Check your console. Delete after you finished reading this. :-)
	}
};

$(jsTheme.init);
