AUI().ready(
	'liferay-sign-in-modal',
	//this checks whether sb has logged in or not and sets the sign in modal. if we are accessing the app from mobile or tablet, the modal will become the full screen. 
	function(A) {
		var BODY=A.getBody();
		var signIn = A.one("#sign-in");//allows us to access basic set o variables of the page, and the sign in id especifically.
		if (signIn && signIn.getData('redirect') !== 'true') {
			signIn.plug(Liferay.SignInModal);
		}
		var fullScreeToggleIcon=A.one('.full-screen-navigation #banner .navbar-toggler');
		
		// Insert snippet 02-close-nav-click here
		if (fullScreenToggleIcon) {
			fullScreenToggleIcon.on(
				'click',
				function(event) {
					BODY.toggleClass('main-nav-opened', event.currentTarget.hasClass('collapsed'));
				}
			);
		}33
	}
);