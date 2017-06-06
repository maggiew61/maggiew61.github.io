$(document).ready(function(){
	var dataURL= 'https://api.instagram.com/v1/users/self/media/recent';
	var photoData;

	var getData = function(url){
		$.ajax({
		  url: url;
		  dataType: 'jsonp',
		  data: {
			  access_token:'2280825310.9969048.dc6b8d956bba4856aa2157440c5a62e3',
			  count: 12
		  }
		})
       .done(function(data) {
		   photoData = data;
		   console.dir(photoData);
		})
		.fail(function(){
			$('#gallery').text(textStatus);
		})
		}

   getData(dataURL);
});
