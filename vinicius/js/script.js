$(document).ready(function(){
        $("#div1").fadeIn(2000);
        $("#div2").fadeIn(3000);
        $("#p1").mouseenter(function(){
        	$("#div3").fadeIn(4000);
        	$("#div4").fadeIn(5000);
    	});
});

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}