$(document).ready(function() {
    
	$('.nav-toggle').click(function() {
        $('#main-wrapper').toggleClass('show-sidebar');
        $(this).find('.icon-close').toggleClass('icon-menu');
        $(this).find('.icon-arrow-left').toggleClass('icon-arrow-right');
    });
    $('.delete').click(function() {
       $(this).parent().remove();
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
	// $('.popup-active button.btn-next').click(function(event) {

 //   		var select = $(this).parent().parent().find('select').val();
 //        var input = $(this).parent().parent().find('input').val();        
	//     var inputCheck = $(this).parent().parent().find('input[type="checkbox"]');
	//     $(this).parent().parent().find('select').parent().remove('<p class="error" style="margin-bottom: 0; margin-top: 8px; color: red;"> No empty</p>');
 //        $(this).parent().parent().find('input').parent().remove('<p class="error" style="margin-bottom: 0; margin-top: 8px; color: red;"> No empty</p>');
        
 //        if (!(select == 'null') && !(inputCheck.prop('checked', false) === true)){            
 //            alert('1');
 //        	var tab_id = $(this).attr('data-tab');
	// 		$(this).parent().parent().addClass('hide');
	// 		$("#"+tab_id).removeClass('hide');
	// 		}
 //        else {
 //        	alert('0');

 //        	$(this).parent().parent().find('select').parent().append('<p class="error" style="margin-bottom: 0; margin-top: 8px; color: red;"> No empty</p>');
 //        	$(this).parent().parent().find('input').parent().append('<p class="error" style="margin-bottom: 0; margin-top: 8px; color: red;"> No empty</p>');
 //        }
	    
 //    });
 	$('.step-active button.btn-prev').click(function(event) {	
		var tab_id = $(this).attr('data-tab');
		$(this).parent().parent().addClass('hide');
		$("#"+tab_id).removeClass('hide');
		$('.haserror').css("padding-top", "0");
	});



	$('.error-mes').hide();
	$('.error-mes').css("color", "red");
    $('.popup-active button.btn-next').parent().parent().find('select').parent().addClass('haserror');
    $('.step-active button.btn-next').parent().parent().find('select').parent().addClass('haserror');
    $('.step-active button.btn-next').parent().parent().find('input').parent().addClass('haserror');
    $('.step-active button.btn-next').click(function(event) {

   		var select = $(this).parent().parent().find('select').val();
        var input = $(this).parent().parent().find('input').val();  
   		
   		if ((select == 'null')){
   			$(this).parent().parent().find('.error-mes').show();
   			$('.haserror').css("padding-top", "20px");
			}
        else if ((input == 0)){
   			$(this).parent().parent().find('.error-mes').show();
   			$('.haserror').css("padding-top", "20px");
			}
        else {
            $('.error-mes').hide();
            $('.haserror').css("padding-top", "0");
        	var tab_id = $(this).attr('data-tab');
			$(this).parent().parent().addClass('hide');
			$("#"+tab_id).removeClass('hide');
        }
	    
    });

	$('.popup-active button.btn-prev').click(function(event) {	
		var tab_id = $(this).attr('data-tab');
		$(this).parent().parent().addClass('hide');
		$("#"+tab_id).removeClass('hide');
	});



	var $input = $('.uncheck').find('input');
	$input.removeAttr("checked");
	$('.popup-active button.btn-next').hide();
	$input.change(function () 
	{
	    if ($input.is(":checked")){
            $('.popup-active button.btn-next').show();
	    }
	    else{	
			$('.popup-active button.btn-next').hide();
	    }
	});
    $('.popup-active button.btn-next').click(function(event) {

   		var select = $(this).parent().parent().find('select').val();

   		if ((select == 'null')) {
   			$(this).parent().parent().find('.error-mes').show();
   				$('.haserror').css("padding-top", "20px");
        	}
        else {
            $('.error-mes').hide();
            $('.haserror').css("padding-top", "0");
        	var tab_id = $(this).attr('data-tab');
			$(this).parent().parent().addClass('hide');
			$("#"+tab_id).removeClass('hide');
        }
	    

		
    });


    
});

function operation() {

    // var s = document.getElementById("operation");
    // var operation = s.options[s.selectedIndex].text;
    // window.alert('equals to ' + operation);
}
