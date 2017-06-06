$(document).ready(function(){
	var dataURL= 'https://api.instagram.com/v1/users/self/media/recent';
	var photoData;

	var getData = function(url){
		$.ajax({
		  url: url,
		  dataType: 'jsonp',
		  data: {
			  access_token:'2280825310.9969048.dc6b8d956bba4856aa2157440c5a62e3',
			  count: 12
		  }
		})
       .done(function(data) {
		   photoData = data;
		//    console.dir(photoData);
    $(photoData.data).each(function(){

		var caption = '';
		if(this.caption){
			caption = this.caption.text;
		}

		$('#gallery').append(
			$('<div class="img_block"></div')
			.append(
				$('<a></a>')
				.attr('href',this.link)
				.attr('target','_blank')
				.append(
					$('<img>').attr('src',this.images.low_resolution.url)
				)
			)
			.append(
				$('<p class="caption"></p>').text(caption+ 'love'+this.likes.count)
			)
		);
	});
});
		.fail(function(){
			$('#gallery').text('資料讀取失敗');
		})
		}

   getData(dataURL);
});
