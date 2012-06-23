$(function () {
	window.myFlux = new flux.slider('#slider', {
		autoplay: false,
		controls: true,
		// transitions: ['bars3d', 'blinds3d', 'cube', 'tiles3d', 'turn'],
		transitions: ['bars3d'],
		height: 500,
		width: 1000,
		captions: true,
		delay: 8000
	});
});