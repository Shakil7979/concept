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


document.addEventListener('DOMContentLoaded', () => {
    console.log("DOM fully loaded and parsed");
    flatpickr("#datePicker", {
        dateFormat: "Y-m-d",
        onReady: function(selectedDates, dateStr, instance) {
            console.log("Flatpickr is ready");
        }
    });
});



$(document).ready(function(){

	

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
 

	$(document).on('click', '.right_content_item', function() {
        var $content = $(this).find('.right_hide_content');
        if ($content.is(':visible')) {
            $content.slideUp();
        } else {
            $('.right_hide_content').slideUp();
            $content.slideDown();
        }
    });

	$(document).on('click','.search_order',function(){ 
		$('.table_search_slide_box').css({'right':'0'});   
		$('.overlay_click_hide_search').fadeIn();    
		$('.cart_product_popup_3').hide();    
		$('.right_content_footer').hide();    
		$('.cart_product_popup').css({'bottom':'-100%'}); 
		$(this).css({'background':'#5c7480'}); 
	});

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
		$('.cart_product_popup_3').show();    
		$('.right_content_footer').show();    
	});

	$(document).on('click','.card_add_more',function(){   
		$('.cart_product_popup').css({'bottom':'0'});   
		$('.card_popup_first_tab').show();   
		$('.card_popup_second_tab').hide();   
		$('.cart_product_popup_3').fadeOut();   
		$('.card_add_more button i').css({'color':'#949DA1'});
	});

	$(document).on('click','.btn_show_full_popup_2',function(){  
		$('.cart_product_popup').css({'bottom':'0'});   
		$('.card_popup_first_tab').hide();  
		$('.card_popup_second_tab').show();  
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

	$('.search_order, .search_order_red, .search_order_yellow, .search_order_green').hover(
        function() {
            $(this).find('.side_tooltip_1, .side_tooltip_2, .side_tooltip_3').show();
        },
        function() {
            $(this).find('.side_tooltip_1, .side_tooltip_2, .side_tooltip_3').hide();
        }
    );



});
