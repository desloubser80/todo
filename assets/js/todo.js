$('ul').on("click","li", function(){
	$(this).toggleClass("done") 
});

$('ul').on("click","span", function(event){
	event.stopPropagation();
	$(this).parent().fadeOut(500,function(){

		$(this).remove()

	})
}) 

$("input[type = 'text']").keypress(function(e){
	
	if(e.which === 13){
		var todoText = $(this).val();
		$('ul').append("<li><span><i class='fas fa-trash-alt'></i></span> "+ todoText+"</li>");
		$(this).val('');
	}

})

$(".fa-plus").click(function(){
	$("input").fadeToggle(500)
})