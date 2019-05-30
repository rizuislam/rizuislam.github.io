$(document).ready(function(){
	// $(window).load(function(){
 //        $('#preloader').fadeOut('slow' ,function(){
 //            $(this).remove();
 //        });
 //    });

 	window.setTimeout(function(){
 		$('#preloader').fadeOut('slow', function(){
 			$(this).remove();
 		});
 	}, 1500);
});