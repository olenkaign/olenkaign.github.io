$('.part_1').hover (
	function() {
		$('.description').html($(this).attr('description-data'));
		$('.description').fadeIn();
	},
	function() {
		$('.description').fadeOut(3000);
	}
)

$('.part_2').hover (
	function() {
		$('.description_1').html($(this).attr('description-data'));
		$('.description_1').fadeIn();
	},
	function() {
		$('.description_1').fadeOut(3000);
	}
)


