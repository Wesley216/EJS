$('.filter-btn').on('click', function(){
	
	let type = $(this).attr('id');
	let boxes = $('.project-box');

	$('.main-btn').removeClass('active');
	$(this).addClass('active');

	if (type == 'bot-picanha') {
		
		eachBoxes('picanha', boxes);
	
	}else if(type == 'bot-frango'){

		eachBoxes('frango', boxes);
	
	}else if(type == 'bot-bovino'){

		eachBoxes('bovino', boxes);
	
	}else{

		eachBoxes('all', boxes);
	}
});

function eachBoxes(type, boxes){

	if(type == 'all'){

		$(boxes).fadeIn();

	}else{

		$(boxes).each(function(){

			if(!$(this).hasClass(type)){

				$(this).fadeOut('slow');

			}else{

				$(this).fadeIn();
			}
		});
	}
}