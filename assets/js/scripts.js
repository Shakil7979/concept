$(document).ready(function(){


	$(document).on('click','.right_content_item',function(){ 
		$('.right_hide_content').hide();
		$(this).find('.right_hide_content').show();
	})

	$(document).on('click','.search_order',function(){ 
		$('.table_search_slide_box').css({'right':'0'});   
	})

	$(document).on('click','.btn_arrow_search',function(){ 
		$('.table_search_slide_box').css({'right':'-100%'});   
	})



});