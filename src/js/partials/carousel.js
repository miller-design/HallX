const sliders = document.querySelectorAll('.js-carousel')

if(slider !== null) {

	for ( var i=0, len = sliders.length; i < len; i++ ) {
		var slider = sliders[i];
		new Flickity( slider, {
			imagesLoaded: true,
			fade: false,
			autoPlay: false,
			cellAlign: 'left',
			pauseAutoPlayOnHover: false,
			draggable: true,
			prevNextButtons: false,
			pageDots: false,
			contain: true,
			freeScroll: true,
			freeScrollFriction: 0.03
		});
	}
}
