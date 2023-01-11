$(document).ready(function() {
	

	const slide = setInterval( fade, 1900);
	let i = 4;
	function fade() {
		i--;
		if(i==0) {
			$("#slide a").stop().fadeIn(1100);
			i=4;
		}else {
			$("#slide a").eq(i).stop().fadeOut(1000);
		}
	}
	
	
});//////all end