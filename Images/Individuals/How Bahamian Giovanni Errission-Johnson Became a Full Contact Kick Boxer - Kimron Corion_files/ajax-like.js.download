jQuery(document).ready(function($) {
	var like_number = '';
	jQuery('.unlike-button').click(function(){
		if(jQuery(this).hasClass('unlike-button')){
			var post_id = jQuery(this).find('.post-id').val();
			like_number = jQuery(this).find('.like-number');
			jQuery.ajax({
				type: "POST",
				url: MyAjax.ajaxurl,
				data: { 
					'post_id': post_id ,
					'post_type' : 'post',
					'action' : 'post_like',
				}
			}).done(function( msg ) {
				if(msg == 'success_liked'){
					var total_number = parseInt(like_number.html());
					var new_total_number = total_number + 1;
					like_number.html(new_total_number);
				}
			});
			jQuery(this).addClass('liked-button').removeClass('unlike-button');
		}
	});
	
});