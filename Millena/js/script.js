$(document).ready(function(){ 
    $("#painel-nome").fadeIn(1000);
    $("#titleInfoBasic").fadeIn(1500);
    $("#titleInfoAdc").fadeIn(2000);
    $("#titleSocial").fadeIn(2500);
    
    
    $("#titleInfoBasic").click(function(){
        $("#painelInfoBasic").slideToggle("slow");
    });
    $("#titleInfoAdc").click(function(){
        $("#painelInfoAdc").slideToggle("slow");
    });
    $("#titleSocial").click(function(){
        $("#painelSocial").slideToggle("slow");
    });
});

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

 