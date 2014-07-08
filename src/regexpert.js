var jQT = $.jQTouch({
  icon: 'jqtouch.png',
  statusBar: 'black-translucent'
});

$(document).ready(function(){
	$('.right').each(function(){
		if($(this).text().length > 40){
			$(this).css('top','4px');
		}
	});
	$('.far').each(function(){
		if($(this).text().length > 30){
			$(this).css('top','4px');
		}
	});
	$('#link').click(function(){
		navigator.app.loadUrl("http://www.cheatography.com/davechild/cheat-sheets/regular-expressions/");
	});
	$('#submit').click(function(e){
		e.preventDefault();
		testRegExp();
	});
});

function testRegExp(){
	$('#container ul').children('li').remove();
	var regexp = $('#regexp').val();
  
	if(regexp == ''){
    $('#container ul').append("<li>Enter RegExp to use.</li>");
    return false;
  }
  
	var match = regexp.match(new RegExp('^/(.*?)/(g?i?m?)$'));
	if(match != null){
		try {
      var re = new RegExp(match[1], match[2]);
    }catch(err){
      $('#container ul').append("<li>" + err + ".</li>");
      return false;
    }
    
		var haystack = $('#haystack').val();
		if(haystack == ''){
			$('#container ul').append("<li>Enter text to search.</li>");
			return false;
		}
    
		var answer = haystack.match(re);
		if(answer == null || answer[0] == ""){
			$('#container ul').append("<li>No matches found.</li>");
			return false;
		}
    
		var max = answer.length;
		for(var i=0;i<max;i++){
			$('#container ul').append("<li>Answer["+i+"] = " + answer[i] + "</li>");
		}
	}else{
		$('#container ul').append("<li>" + regexp + " is not a valid RegExp</li>");
	}
	return false;
}