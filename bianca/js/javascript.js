$(document).ready(function(){
        $("#aparecename").fadeIn(1000);
        $("#aparecedados").fadeIn(2000);
        $("#aparececontato").fadeIn(3000);
		$("#apareceprofissional").fadeIn(3000);
		$("#apareceadicional").fadeIn(3000);

	   	$("#flip").click(function(){
	    	$("#panel").slideToggle("slow");
		});
		
	   	$("#flip2").click(function(){
	    	$("#panel2").slideToggle("slow");
	    });
});
