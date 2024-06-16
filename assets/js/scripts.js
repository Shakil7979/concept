$(document).ready(function(){
	$('html').removeAttr('class');

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

	$('.search_order, .search_order_red, .search_order_yellow, .search_order_green').hover(
        function() {
            $(this).find('.side_tooltip_1, .side_tooltip_2, .side_tooltip_3').show();
        },
        function() {
            $(this).find('.side_tooltip_1, .side_tooltip_2, .side_tooltip_3').hide();
        }
    );



});