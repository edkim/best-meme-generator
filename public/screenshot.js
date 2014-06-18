$('#create-button').click(function(e) {
	html2canvas($("#meme"), {
	  onrendered: function(canvas) {
	    $('body').append(canvas);
	    $('body').append("right click and save as");
	  }
	});
});
