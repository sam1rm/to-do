jQuery(document).ready(function ($) {
	$.fx.speeds._default = 1000;
	$(function() {
		$( "#dialog" ).dialog({
			autoOpen: false,
			    show: "blind",
			    hide: "explode",
			    modal: true,
			    minWidth: 650
			    });

		$( "#contact_tutor" ).click(function() {
			$( "#dialog" ).dialog( "open" );
			return false;
		    });
	    });

	$(function() {
		$( "#signup_dialog" ).dialog({
			autoOpen: false,
			    show: "blind",
			    hide: "explode",
			    modal: true,
			    minWidth: 650
			    });

		$( "#click_signup" ).click(function() {
			$( "#signup_dialog" ).dialog( "open" );
			return false;
		    });
	    });
    });