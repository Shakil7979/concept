$(document).ready(function(){


	$(document).on('click','.right_content_item',function(){ 
		$('.right_hide_content').hide();
		$(this).find('.right_hide_content').show();
	});

	$(document).on('click','.search_order',function(){ 
		$('.table_search_slide_box').css({'right':'0'});   
	});

	$(document).on('click','.btn_arrow_search',function(){ 
		$('.table_search_slide_box').css({'right':'-100%'});   
	});

	$(document).on('click','.card_add_more',function(){ 
		$('.cart_product_popup').css({'bottom':'0'});   
	});
	
	$(document).on('click','.for_for_card',function(){ 
		$('.order_calculate_popup').css({'right':'0'});   

		return false;
	});

	$(document).on('click','.btn_arrow_search_cart',function(){ 
		$('.order_calculate_popup').css({'right':'-100%'});   
	});



});