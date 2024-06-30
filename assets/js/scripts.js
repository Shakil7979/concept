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

// document.addEventListener('DOMContentLoaded', function() {
//     var picker = new Pikaday({
//         field: document.getElementById('datepicker'),
//         format: 'ddd MMM DD YYYY', // Format for displaying the date in the input field
//         toString(date, format) {
//             // Format the date to 'MM/DD/YYYY' when selected
//             const day = date.getDate();
//             const month = date.getMonth() + 1; // Month is zero-based
//             const year = date.getFullYear();
//             return `${month}/${day}/${year}`;
//         },
//         onSelect: function(date) {
//             // Optional: Log the selected date in console
//             console.log('Selected date: ' + picker.toString(date));
//         }
//     });
// });





$(document).ready(function(){

	setTimeout(function(){
		$('.add_stock_input_group_input_script').fadeOut();
		$('.add_stock_select').fadeIn();
		$('.barcode_scan_bxx .barcode_scanner').css({'width':'100%','top':'-2%','animation':'inherit'});
	}, 3000);

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

	function showSlideBox() {
		$('.table_search_slide_box').css({'right':'0'});   
		$('.overlay_click_hide_search').fadeIn();    
		$('.cart_product_popup_3').hide();    
		$('.right_content_footer').hide();    
		$('.cart_product_popup').css({'bottom':'-100%'}); 
		$('.search_order').css({'background':'#5c7480'});
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
			} else if (deltaX < -50) {
				// Left to right swipe detected
				hideSlideBox();
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
		$('.cart_product_popup_3').show();    
		$('.cart_product_popup').css({'bottom':'-100%'});   
		$('.right_content_footer').show();    
		$('.site_menu_popup').css({'right':'-100%'});   
	});

	// $(document).on('click','.card_add_more',function(){   
	// 	$('.cart_product_popup').css({'bottom':'0'});   
	// 	$('.card_popup_first_tab').show();   
	// 	$('.overlay_click_hide_search').fadeIn();    
	// 	$('.card_popup_second_tab').hide();   
	// 	$('.cart_product_popup_3').fadeOut();   
	// 	$('.card_add_more button i').css({'color':'#949DA1'});
	// });

	// check swipe code 
	function showCartPopup() {
		$('.cart_product_popup').css({'bottom':'0'});   
		$('.card_popup_first_tab').show();   
		$('.overlay_click_hide_search').fadeIn();    
		$('.card_popup_second_tab').hide();   
		$('.cart_product_popup_3').fadeOut();   
		$('.card_add_more button i').css({'color':'#949DA1'});
	}
	
	function hideCartPopup() {
		$('.cart_product_popup').css({'bottom':'-100%'});   
		$('.overlay_click_hide_search').fadeOut();   
		$('.card_add_more button i').css({'color':''});
	}
	
	$(document).on('click', '.card_add_more', function() { 
		showCartPopup();
	});
	
	// Swipe detection
	var startX, startY, endX, endY;
	
	$('.cart_product_popup_3').on('touchstart', function(event) {
		var touch = event.touches[0];
		startX = touch.pageX;
		startY = touch.pageY;
	});
	
	$('.cart_product_popup_3').on('touchmove', function(event) {
		var touch = event.touches[0];
		endX = touch.pageX;
		endY = touch.pageY;
	});
	
	$('.cart_product_popup_3').on('touchend', function(event) {
		var deltaX = startX - endX;
		var deltaY = startY - endY;
	
		if (Math.abs(deltaY) > Math.abs(deltaX)) {
			if (deltaY > 50) {
				// Bottom to top swipe detected
				showCartPopup();
			} else if (deltaY < -50) {
				// Top to bottom swipe detected
				hideCartPopup();
			}
		}
	});
	
	

	// check swipe code 

	$(document).on('click','.btn_show_full_popup_2',function(){  
		$('.cart_product_popup').css({'bottom':'0'});   
		$('.card_popup_first_tab').hide();  
		$('.card_popup_second_tab').show();  
		$('.overlay_click_hide_search').fadeIn();    
		$('.cart_product_popup_3').fadeOut();  
		$('.card_add_more button i').css({'color':'#fff'});
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

	$(document).on('click','.btn_arrow_search_cart2',function(){ 
		$('.site_menu_popup').css({'right':'-100%'});    
		$('.overlay_click_hide_search').fadeOut();  
		$('.cart_product_popup_3').show();    
		$('.right_content_footer').show();    
	});

	$(document).on('click','.search_show_10',function(){ 
		$('.site_menu_popup').css({'right':'0%'});    
		$('.overlay_click_hide_search').fadeIn();  
		$('.cart_product_popup_3').hide();    
		$('.right_content_footer').hide();    
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
