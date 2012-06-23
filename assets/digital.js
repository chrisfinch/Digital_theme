$(function () {
	window.myFlux = new flux.slider('#slider', {
		autoplay: false,
		controls: true,
		transitions: ['bars3d', 'blinds3d', 'cube', 'tiles3d', 'turn'],
		height: 500,
		width: 1000
	});
});