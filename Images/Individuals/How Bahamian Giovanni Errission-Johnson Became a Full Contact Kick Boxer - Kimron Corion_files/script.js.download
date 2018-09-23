(function($) {
  "use strict";
	
	jQuery(document).ready(function(){
	
		jQuery('blockquote').each(function(){
			jQuery(this).prepend('<i class="fa fa-quote-right"></i>');
		});
		
		var show_menu = false;
		
		
		//ACCORDION
		jQuery('.accordion').accordion({
			header: '.accor-title',
			heightStyle: 'content',
			active  : false,
			collapsible : true,
			create: function( event, ui ) {
				jQuery(this).find('.ui-state-active').find('.accor-title-icon').html('<i class="fa fa-angle-up"></i>');
				
				var this_collapsible = jQuery(this).data('collapsible');
				if(this_collapsible == 0){
					jQuery(this).accordion( "option", "collapsible", false );
				}else{
					jQuery(this).accordion( "option", "collapsible", true );
				}
				
				var this_active = parseInt(jQuery(this).data('active'));
				if(this_active == 0){
					jQuery(this).accordion( "option", "collapsible", true );
					jQuery(this).accordion( "option", "active", false );
				}else{
					this_active = this_active - 1;
					jQuery(this).accordion( "option", "active", this_active );
				}
				
				
				
			},
			beforeActivate: function( event, ui ) {
				ui.newHeader.find('.accor-title-icon').html('<i class="fa fa-angle-up"></i>');
				ui.oldHeader.find('.accor-title-icon').html('<i class="fa fa-angle-down"></i>');
			}
		});
		
		//process init for tab
		jQuery('.content').find('.tab').each(function(){
			var tab_title_count = 1;
			var tab_content_count = 1;
			jQuery(this).find('.tab-title').each(function(){
				if(tab_title_count == 1){
					jQuery(this).addClass('tab-current');
				}
				jQuery(this).attr('data-id',tab_title_count);
				tab_title_count++;
			});
			
			jQuery(this).find('.tab-content').each(function(){
				if(tab_content_count == 1){
					jQuery(this).addClass('tab-content-current');
				}
				jQuery(this).addClass('tab-content'+tab_content_count);
				tab_content_count++;
			});
			
			
		});
		
		//tab click
		jQuery('.tab-title').click(function(){
			var tab_id = jQuery(this).attr('data-id');
			var parent_top = jQuery(this).parent();
			var parent_tab = jQuery(parent_top).parent();
			jQuery(parent_top).find('.tab-current').removeClass("tab-current");
			jQuery(this).addClass("tab-current");
			jQuery(parent_tab).find('.tab-content').hide();
			jQuery(parent_tab).find('.tab-content'+tab_id).fadeIn();
		});
		
		jQuery('#back_top').click(function(){
			jQuery('html, body').animate({scrollTop:0}, 'normal');
			return false;
		});
		
		jQuery(window).scroll(function() {
			if(jQuery(this).scrollTop() !== 0) {
				jQuery('#back_top').fadeIn();	
			} else {
				jQuery('#back_top').fadeOut();
			}
		});
		
		if(jQuery(window).scrollTop() !== 0) {
			jQuery('#back_top').show();	
		} else {
			jQuery('#back_top').hide();
		}
		
		
		//play all slider
		jQuery('.flexslider').flexslider({
			controlNav: false,                    
			directionNav: true,
			animation : 'fade',
			slideshowSpeed :5000 ,	
		});
		
		jQuery('.info-box-remove').click(function(){
			jQuery(this).parent().hide();
		});

		//add flexslider icon
		jQuery('.flex-prev').html('<i class="fa fa-angle-left"></i>');
		jQuery('.flex-next').html('<i class="fa fa-angle-right"></i>');
		
		jQuery('.share-button').click(function(){
			var share_containter = jQuery(this).find('.share-button-container');
			jQuery(share_containter).animate({
				opacity: "toggle"
			}, 200);
		});
		
		jQuery('.widget_archive, .widget_categories, .widget_pages, .widget_meta, .widget_recent_entries, .widget_nav_menu').find('li a').prepend('<i class="fa fa-angle-right"><i>');
		
		jQuery('.widget_latest_tweets_widget').find('li').prepend('<i class="fa fa-twitter"></i>');
		
		jQuery('#commentform').append('<div class="cleared"></div>');
		jQuery('#commentform').addClass('content');
	});
})(jQuery);
