$(document).ready(function() {
    
	$('.nav-toggle').click(function() {
        $('#main-wrapper').toggleClass('show-sidebar');
        $(this).find('.icon-close').toggleClass('icon-menu');
        $(this).find('.icon-arrow-left').toggleClass('icon-arrow-right');
    });
    $('.delete').click(function() {
       $(this).parent().remove();
    });
	
	
	$('.checkout-cart .btnModal').click(function(){		
		var tab_id = $(this).attr('data-tab');
		$(this).parent().parent().addClass('hide');
		$("#"+tab_id).removeClass('hide');
	});
	$('.close-modal').click(function(){
		$('.checkout-item').addClass('hide');
	});
	$(".modal-trigger").click(function(e){
	  e.preventDefault();
	  dataModal = $(this).attr("data-modal");
	  $("#" + dataModal).css({"display":"block"});
	  $("." + dataModal).removeClass('hide');
	  // $("body").css({"overflow-y": "hidden"}); //Prevent double scrollbar.
	});

	$(".close-modal, .modal-sandbox").click(function(){
	  $(".popup").css({"display":"none"});
	  // $("body").css({"overflow-y": "auto"}); //Prevent double scrollbar.
	});

	$('#new-tickets').click(function() {
        $('.support-form').toggle();
    });
    $('.support-telegram').hide();
    $('.swich-warp input').click(function() {
    	if ($(this).is(':checked')) {
    		$(this).parent().parent().parent().find('.support-telegram').show();
    	}else{
    		$(this).parent().parent().parent().find('.support-telegram').hide();
    	}
    });
	$("#operation").change(function () {
        var color = $(this);
        var v = (color.val()); 
        $('#btn-operation').attr( "data-tab", function() {
		  return "" + v;
		});
    });
});

function operation() {

    // var s = document.getElementById("operation");
    // var operation = s.options[s.selectedIndex].text;
    // window.alert('equals to ' + operation);
}
