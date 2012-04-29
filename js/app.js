/* Foundation v2.2 http://foundation.zurb.com */
jQuery(document).ready(function ($) {
    //when you click Hi, make an alert ever 4th time and change the color of the text.
    var c = 0;
    $('#hi').click(function() {
      c++;
      if (c % 4 === 0) //use triple equals in javascript
        alert("you clicked that shit " + c + " times");
      $('#hi').css('color', '#'+Math.floor(Math.random()*16777215).toString(16));
    });
  

    $('#add_task').click(function() {
	var str = $("#task").val();
	parseText(str);
    });
    
    function parseText(str) {
	var words[] = str.split(" ");
	alert("this got here");
	for (var i = 0; i < words.length; i++) {
	    alert(var[i]);
	}
    } 
    
    //---------------------------------------------------------
  
    $(document).ajaxSend(function(event, xhr, settings) {
	function getCookie(name) {
	    var cookieValue = null;
	    if (document.cookie && document.cookie != '') {
		var cookies = document.cookie.split(';');
		for (var i = 0; i < cookies.length; i++) {
		    var cookie = jQuery.trim(cookies[i]);
		    // Does this cookie string begin with the name we want?
		    if (cookie.substring(0, name.length + 1) == (name + '=')) {
			cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
			break;
		    }
		}
	    }
	    return cookieValue;
	}

	function sameOrigin(url) {
	    // url could be relative or scheme relative or absolute
	    var host = document.location.host; // host + port
	    var protocol = document.location.protocol;
	    var sr_origin = '//' + host;
	    var origin = protocol + sr_origin;
	    // Allow absolute or scheme relative URLs to same origin
	    return (url == origin || url.slice(0, origin.length + 1) == origin + '/') ||
		(url == sr_origin || url.slice(0, sr_origin.length + 1) == sr_origin + '/') ||
		// or any other URL that isn't scheme relative or absolute i.e relative.
		!(/^(\/\/|http:|https:).*/.test(url));
	}

	function safeMethod(method) {
	    return (/^(GET|HEAD|OPTIONS|TRACE)$/.test(method));
	}

	if (!safeMethod(settings.type) && sameOrigin(settings.url)) {
	    xhr.setRequestHeader("X-CSRFToken", getCookie('csrftoken'));
	}
    });

    /* Use this js doc for all application specific JS */

    /* TABS --------------------------------- */
    /* Remove if you don't need :) */

    function activateTab($tab) {
	var $activeTab = $tab.closest('dl').find('a.active'),
	contentLocation = $tab.attr("href") + 'Tab';

	//Make Tab Active
	$activeTab.removeClass('active');
	$tab.addClass('active');

	//Show Tab Content
	$(contentLocation).closest('.tabs-content').children('li').hide();
	$(contentLocation).css('display', 'block');
    }

    $('dl.tabs').each(function () {
	//Get all tabs
	var tabs = $(this).children('dd').children('a');
	tabs.click(function (e) {
	    activateTab($(this));
	});
    });

    if (window.location.hash) {
	activateTab($('a[href="' + window.location.hash + '"]'));
    }

    /* ALERT BOXES ------------ */
    $(".alert-box").delegate("a.close", "click", function(event) {
	event.preventDefault();
	$(this).closest(".alert-box").fadeOut(function(event){
	    $(this).remove();
	});
    });


    /* PLACEHOLDER FOR FORMS ------------- */
    /* Remove this and jquery.placeholder.min.js if you don't need :) */

    $('input, textarea').placeholder();

    /* TOOLTIPS ------------ */
    $(this).tooltips();



    /* UNCOMMENT THE LINE YOU WANT BELOW IF YOU WANT IE6/7/8 SUPPORT AND ARE USING .block-grids */
    //	$('.block-grid.two-up>li:nth-child(2n+1)').css({clear: 'left'});
    //	$('.block-grid.three-up>li:nth-child(3n+1)').css({clear: 'left'});
    //	$('.block-grid.four-up>li:nth-child(4n+1)').css({clear: 'left'});
    //	$('.block-grid.five-up>li:nth-child(5n+1)').css({clear: 'left'});



    /* DROPDOWN NAV ------------- */

    var lockNavBar = false;
    $('.nav-bar a.flyout-toggle').live('click', function(e) {
	e.preventDefault();
	var flyout = $(this).siblings('.flyout');
	if (lockNavBar === false) {
	    $('.nav-bar .flyout').not(flyout).slideUp(500);
	    flyout.slideToggle(500, function(){
		lockNavBar = false;
	    });
	}
	lockNavBar = true;
    });
    if (Modernizr.touch) {
	$('.nav-bar>li.has-flyout>a.main').css({
	    'padding-right' : '75px'
	});
	$('.nav-bar>li.has-flyout>a.flyout-toggle').css({
	    'border-left' : '1px dashed #eee'
	});
    } else {
	$('.nav-bar>li.has-flyout').hover(function() {
	    $(this).children('.flyout').show();
	}, function() {
	    $(this).children('.flyout').hide();
	})
    }


    /* DISABLED BUTTONS ------------- */
    /* Gives elements with a class of 'disabled' a return: false; */


});
