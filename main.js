 // RANGE FUNCTIONALITY 
var rangeSlider = $("#myRange");
function applyFill() {
	var sliderValue = rangeSlider.val();
	var sliderMin = rangeSlider.attr('min');
	var sliderMax = rangeSlider.attr('max');
	$('.generator__range-length').attr('data-length', sliderValue);
	$('.generator__range-number').text(`Length: ${sliderValue}`);
    const percentage = (100 * (sliderValue - sliderMin)) / (sliderMax - sliderMin);
	var bg = `linear-gradient(90deg, #0B1EDF ${percentage}%, rgba(255, 255, 255, 0.214) ${percentage + 0.1}%)`;
	rangeSlider.css({"background":bg});
}

rangeSlider.on("input",applyFill);
//function for generate password
function randString () {
	var possible = '';
	var uppercaseSwitch = $('.uppercase-switch');
	var lowercaseSwitch = $('.lowercase-switch');
	var numberSwitch = $('.number-switch');
	var symbolsSwitch = $('.symbols-switch');
	var length = $('.generator__range-length').attr('data-length');


	if( lowercaseSwitch.prop('checked') ) {
		possible += 'abcdefghijklmnopqrstuvwxyz';
	}

	if( uppercaseSwitch.prop('checked') ) {
		possible += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
	}

	if( numberSwitch.prop('checked') ) {
		possible += '0123456789';
	}

	if( symbolsSwitch.prop('checked') ) {
		possible += '![]{}()%&*$#^<>~@|';
	}

	var text = '';
	for(var i=0; i < length; i++) {
		text += possible.charAt(Math.floor(Math.random() * possible.length));
	}
	return text;
}
// after click on button passwoord will appear
$('.generator__button-btn').on('click', function(e){
	e.preventDefault();
	$('.generator__head-password').attr('value',randString());
});

// copy icon on click
$('.generator__head-copy').on("click", (function(e){
	e.preventDefault();
	var copyValue = $('.generator__head-password').val();
	var input = document.createElement('input');
	document.body.appendChild(input);
	input.value = copyValue;
	input.select();
    document.execCommand("copy");
	document.body.removeChild(input);
	$('.generator__head-copy-clicked').fadeIn(300).fadeOut(2500);
}));


	var uppercaseEl = $('.uppercase-switch');
	var lowercaseEl = $('.lowercase-switch');
	var numberEl = $('.number-switch');
	var symbolEl= $('.symbols-switch');
function disableOnlyCheckbox(){
	let totalChecked = [uppercaseEl, lowercaseEl, numberEl, symbolEl].filter(el => el.prop("checked"));
	totalChecked.forEach(el => {
	
		if(totalChecked.length == 1){
			console.log(el);
			el.attr('disabled','disabled');
			el.siblings('').addClass('disabled');
		}else{
			el.removeAttr('disabled');
			el.siblings('').removeClass('disabled');
		}
	});
};

[uppercaseEl, lowercaseEl, numberEl, symbolEl].forEach(el => {
	el.on('click', () => {
		disableOnlyCheckbox();
	})

})