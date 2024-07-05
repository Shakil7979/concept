document.addEventListener('DOMContentLoaded', () => {
    const scrollableContent = document.querySelector('.right_content_items');
    const logo = document.querySelector('.right_logo_position');

    scrollableContent.addEventListener('scroll', () => {
        if (scrollableContent.scrollTop > 0) { 
			$('.right_logo_position').hide();    
        } else { 
			$('.right_logo_position').show();    
        }
    });
}); 




$(document).ready(function(){

	function showSlideBox() {
		$('.table_search_slide_box').css({'right':'0'});   
		$('.overlay_click_hide_search').fadeIn();    
		$('.cart_product_popup_3').hide();    
		$('.right_content_footer').hide();     
		$('.search_order').css({'background':'#5c7480'});
		$('.order_calculate_popup').css({'right':'-100%'}); 

	}
	
	function hideSlideBox() {
		$('.table_search_slide_box').css({'right':'-100%'});   
		$('.overlay_click_hide_search').fadeOut();    
		$('.cart_product_popup_3').show();    
		$('.right_content_footer').show();    
		$('.cart_product_popup').css({'bottom':'0'}); 
		$('.search_order').css({'background':'#5c7480'}); 
	}
	
	$(document).on('click', '.search_order', function() { 
		showSlideBox(); 
		$('.site_menu_popup').css({'right':'-100%'});   
		$('.cart_product_popup').css({'bottom':'-100%'});   
		$('.card_add_more button').html('<i class="fa-solid fa-circle-plus"></i>'); 
	});
	
	// Swipe detection
	var startX, startY, endX, endY;
	
	$('body').on('touchstart', function(event) {
		var touch = event.touches[0];
		startX = touch.pageX;
		startY = touch.pageY;
	});
	
	$('body').on('touchmove', function(event) {
		var touch = event.touches[0];
		endX = touch.pageX;
		endY = touch.pageY;
	});
	
	$('body').on('touchend', function(event) {
		var deltaX = startX - endX;
		var deltaY = startY - endY;
	
		if (Math.abs(deltaX) > Math.abs(deltaY)) {
			if (deltaX > 50) {
				// Right to left swipe detected
				showSlideBox();
				$('.cart_product_popup').css({'bottom':'-100%'});  
				$('.card_add_more button').html('<i class="fa-solid fa-circle-plus"></i>');  
			} else if (deltaX < -50) {
				// Left to right swipe detected
				hideSlideBox();
				$('.cart_product_popup').css({'bottom':'-100%'});  
				$('.card_add_more button').html('<i class="fa-solid fa-circle-plus"></i>'); 
			}
		}
	});
	

	// check for swipe  
	$(document).on('click','.btn_printer_on',function(){ 
		$('.verify_area').show();     
	});

	$(document).on('click','.btn_arrow_search',function(){ 
		$('.table_search_slide_box').css({'right':'-100%'});    
		$('.overlay_click_hide_search').fadeOut();  
		$('.search_order').css({'background':'#263238'});  
		$('.cart_product_popup_3').show();    
		$('.right_content_footer').show();    
	});

	$(document).on('click','.overlay_click_hide_search',function(){ 
		$('.table_search_slide_box').css({'right':'-100%'});   
		$('.order_calculate_popup').css({'right':'-100%'});   
		$('.overlay_click_hide_search').fadeOut();    
		$('.search_order').css({'background':'#263238'}); 
		$('.card_add_more button i').css({'color':'#fff'}); 
		// $('.card_add_more button').html('<i class="fa-solid fa-circle-minus"></i>'); 
		$('.card_add_more button').html('<i class="fa-solid fa-circle-plus"></i>'); 
		$('.cart_product_popup_3').show();    
		$('.cart_product_popup').css({'bottom':'-100%'});   
		$('.right_content_footer').show();    
		$('.site_menu_popup').css({'right':'-100%'});   
	});

	
	// check swipe code 

	var card_minus_count = 0;

	$(document).on('click','.card_back_minus',function(){   
 
		if(card_minus_count == 1){
			$('.cart_product_popup').css({'bottom':'-100%'});   
			$('.overlay_click_hide_search').fadeOut();   
			setTimeout(() => { 
				$('.cart_product_popup_3').show();  	
			}, 300);
			$('.card_popup_first_tab').hide();   
			$('.card_popup_second_tab').show();   
			$('.card_add_more button i').css({'color':''});
			$('.card_add_more button').html('<i class="fa-solid fa-circle-plus"></i>'); 

			
			card_minus_count = 0;
		}else{
			$('.cart_product_popup').css({'bottom':'0'});   
			$('.card_popup_first_tab').show();   
			$('.overlay_click_hide_search').fadeIn();    
			$('.card_popup_second_tab').hide();   
			$('.cart_product_popup_3').fadeOut();   
			$('.card_add_more button i').css({'color':'#949DA1'});
			$('.card_add_more button').html('<i class="fa-solid fa-circle-minus"></i>'); 

			card_minus_count = 1;
		}

	});

	$(document).on('click','.btn_show_full_popup_2',function(){  
		$('.cart_product_popup').css({'bottom':'0'});   
		$('.card_popup_first_tab').hide();  
		$('.card_popup_second_tab').show();  
		$('.overlay_click_hide_search').fadeIn();    
		$('.card_add_more button').html('<i class="fa-solid fa-circle-plus"></i>'); 
		$('.cart_product_popup_3').fadeOut();  
		$('.card_add_more button i').css({'color':'#fff'});

		card_minus_count = 0;
	});

	$(document).on('click','.btn_back_popup',function(){   
		$('.cart_product_popup').css({'bottom':'-100%'});   
		$('.cart_product_popup_3').fadeIn();  
		$('.card_add_more button i').css({'color':'#fff'});   
	});

	$(document).on('click','.collection_barcode img ',function(){ 
		$('.barcode_area').fadeIn();   
	});

	$(document).on('click','.barcode_back_btn button ',function(){ 
		$('.barcode_area').fadeOut();   
	});


	$(document).on('click','.btn_back_popup_2',function(){  
		$('.cart_product_popup_2').css({'bottom':'-192px'});  
	});
	
	$(document).on('click','.for_for_card',function(){ 
		$('.order_calculate_popup').css({'right':'0'});   
		$('.overlay_click_hide_search').fadeIn(); 
		$('.cart_product_popup_3').show();    
		$('.cart_product_popup').css({'bottom':'-100%'}); 
		$('.cart_product_popup_3').hide();    
		$('.right_content_footer').hide();   

		return false;
	});

	$(document).on('click','.btn_arrow_search_cart',function(){ 
		$('.order_calculate_popup').css({'right':'-100%'});    
		$('.overlay_click_hide_search').fadeOut();  
		$('.cart_product_popup_3').show();    
		$('.right_content_footer').show();   
	});

	
	// Swipe detection
	var startX, startY, endX, endY;

	$('body').on('touchstart', function(event) {
		var touch = event.touches[0];
		startX = touch.pageX;
		startY = touch.pageY;
	});

	$('body').on('touchmove', function(event) {
		var touch = event.touches[0];
		endX = touch.pageX;
		endY = touch.pageY;
	});

	$('body').on('touchend', function(event) {
		var deltaX = startX - endX;
		var deltaY = startY - endY;

		if (Math.abs(deltaX) > Math.abs(deltaY)) {
			if (deltaX < -50) {
				$('.order_calculate_popup').css({'right':'-100%'});    
				$('.overlay_click_hide_search').fadeOut();  
				$('.cart_product_popup_3').show();    
				$('.right_content_footer').show();    
			}
		}
	});

	// button popup hide 

	$(document).on('click','.btn_arrow_search_cart2',function(){ 
		$('.site_menu_popup').css({'right':'-100%'});    
		$('.overlay_click_hide_search').fadeOut();  
		$('.cart_product_popup_3').show();    
		$('.right_content_footer').show();    
	});

	// button popup show 
	$(document).on('click','.search_show_10',function(){ 
		$('.site_menu_popup').css({'right':'0%'});    
		$('.table_search_slide_box').css({'right':'-100%'});    
		$('.overlay_click_hide_search').fadeIn(); 
		$('.cart_product_popup_3').hide();    
		$('.right_content_footer').hide();   
		$('.cart_product_popup').css({'bottom':'-100%'});   
		$('.card_add_more button').html('<i class="fa-solid fa-circle-plus"></i>'); 
		$('.order_calculate_popup').css({'right':'-100%'}); 
	});

	// button popup swipe hide 

	// Swipe detection
	var startX, startY, endX, endY;

	$('body').on('touchstart', function(event) {
		var touch = event.touches[0];
		startX = touch.pageX;
		startY = touch.pageY;
	});

	$('body').on('touchmove', function(event) {
		var touch = event.touches[0];
		endX = touch.pageX;
		endY = touch.pageY;
	});

	$('body').on('touchend', function(event) {
		var deltaX = startX - endX;
		var deltaY = startY - endY;

		if (Math.abs(deltaX) > Math.abs(deltaY)) {
			if (deltaX < -50) {
				// Left to right swipe detected
				$('.site_menu_popup').css({'right':'-100%'});    
				$('.overlay_click_hide_search').fadeOut();  
				$('.cart_product_popup_3').show();    
				$('.right_content_footer').show();  
			}
		}
	});


	$('.search_order, .search_order_red, .search_order_yellow, .search_order_green').hover(
        function() {
            $(this).find('.side_tooltip_1, .side_tooltip_2, .side_tooltip_3').show();
        },
        function() {
            $(this).find('.side_tooltip_1, .side_tooltip_2, .side_tooltip_3').hide();
        }
    );



	// check swipe code 
	function showCartPopup() {
		$('.cart_product_popup').css({'bottom':'0'});   
		$('.card_popup_first_tab').show();   
		$('.overlay_click_hide_search').fadeIn();    
		$('.card_popup_second_tab').hide();   
		$('.cart_product_popup_3').hide();   
		$('.card_add_more button i').css({'color':'#949DA1'});
		$('.card_add_more button').html('<i class="fa-solid fa-circle-minus"></i>'); 
	}
	
	function hideCartPopup() {
		// $('.cart_product_popup').css({'bottom':'-100%'});   
		$('.overlay_click_hide_search').fadeOut();   
		$('.cart_product_popup_3').fadeIn();  
		$('.card_popup_first_tab').hide();   
		$('.card_popup_second_tab').show();   
		$('.card_add_more button i').css({'color':''});
		$('.card_add_more button').html('<i class="fa-solid fa-circle-plus"></i>'); 
		
	}
	
	$(document).on('click', '.card_add_more_pop', function() { 
		showCartPopup();
		card_minus_count = 1;
	});
	
	var startY, endY;
	
	$('.cart_product_popup_3').on('touchstart', function(event) {
		var touch = event.touches[0];
		startY = touch.pageY;
	});
	
	$('.card_back_minus').on('touchmove', function(event) {
		var touch = event.touches[0];
		endY = touch.pageY;
	
		var deltaY = endY - startY; 
	
		if (deltaY < -50) {
			// Swipe up detected 
			showCartPopup(); 
		}
	});
	
	$('.cart_product_popup_3').on('touchmove', function(event) {
		var touch = event.touches[0];
		endY = touch.pageY;
	
		var deltaY = endY - startY; 
	
		if (deltaY < -50) {
			// Swipe up detected 
			showCartPopup(); 
		}
	});
	
	$('.cart_product_popup .cart_popup_box').on('touchstart', function(event) {
		var touch = event.touches[0];
		startY = touch.pageY;
	});
	
	$('.cart_product_popup .cart_popup_box').on('touchmove', function(event) {
		var touch = event.touches[0];
		endY = touch.pageY;
	
		var deltaY = endY - startY;
	
		if (deltaY > 50) {
			// Swipe down detected on .cart_product_popup
			hideCartPopup();
			$('.cart_product_popup').css({'bottom':'-100%'}); 
		}
	});
	
	

		
	$('.cal_data_get li button').on('click', function() {
		var thiss = $(this).html(); 
		var currentVal = $('.input_data_show').val();
		$('.input_data_show').val(currentVal + thiss);
	});
		
	$('.add_sttock_input').on('click', function() {
		$('.add_stock_input_group_input_script.full_width_add').hide();  
		$('.add_stock_select').show();
	});
		
	$('.select_item_add').on('click', function() {
		var thiss = $(this).attr('data_val'); 
		$('.add_stock_select').hide();
		$('.add_stock_input_group_input_script.full_width_add').show();     
		$('.add_sttock_input').val(thiss);   
	});
	

	// setTimeout(function(){
	// 	$('.add_stock_input_group_input_script').fadeOut();
	// 	$('.add_stock_select').fadeIn();
	// 	$('.barcode_scan_bxx .barcode_scanner').css({'width':'100%','top':'-2%','animation':'inherit'});
	// }, 3000);

	$('html').removeAttr('class');
	$('.login_form').css({'bottom':'0'});

	function showDatePicker() {
		this.showPicker();
	}

	// Get the date input element
	const dateInput = document.getElementById('dateInput');

	// Add both focus and click event listeners
	dateInput.addEventListener('focus', showDatePicker);
	dateInput.addEventListener('click', showDatePicker); 
 

	$(document).on('click', '.verify_code li p', function() {
        $('.verify_code li p').removeClass('active'); 
        $(this).addClass('active'); 
    });

	$(document).on('click', '.barcode_btn a, .verify_area_overlay', function() {
        $('.verify_area').fadeOut();  
    });

	$(document).on('click', '.right_content_item', function() {
        var $content = $(this).find('.right_hide_content');
        if ($content.is(':visible')) {
            $content.slideUp();
        } else {
            $('.right_hide_content').slideUp();
            $content.slideDown();
        }
    }); 

	// check for swipe 



	



});
