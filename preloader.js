document.body.onload = function(){
	setTimeout(function(){
		var preloader = document.getElementById('pl');
		if(!preloader.classList.contains('done'))
		{
			preloader.classList.add('done');
		}
	},1000)
}