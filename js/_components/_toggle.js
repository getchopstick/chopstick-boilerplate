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
