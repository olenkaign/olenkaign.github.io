$('.part').hover (
	function() {
		$('.description').html($(this).attr('description-data'));
		$('.description').fadeIn();
	},
	function() {
		$('.description').fadeOut(5000);
	}
)

$('.part').hover (
	function() {
		$('.description_1').html($(this).attr('description-data'));
		$('.description_1').fadeIn();
	},
	function() {
		$('.description_1').fadeOut(5000);
	}
)

