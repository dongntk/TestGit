$(document).ready(function() {
    $('#activity').DataTable();
	$('.nav-toggle').click(function() {
        $('#main-wrapper').toggleClass('show-sidebar');
        $(this).find('.icon-close').toggleClass('icon-menu');
        $(this).find('.icon-arrow-right').toggleClass('icon-menu');
    });


	$('.btn-buy').click(function(){
		var tab_id = $(this).attr('data-tab');	
		$('.checkout-cart').removeClass('current');
		$('.checkout-item').removeClass('current');
		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
	});
	$('.btn-closebot').click(function(){
		$('.checkout-cart').removeClass('current');
	});
});