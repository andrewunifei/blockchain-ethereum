function openTab(TabName) {
    var i;
    var x = document.getElementsByClassName("aba");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    document.getElementById(TabName).style.display = "block";
    if ($('#menu-registro').hasClass('active')){
        $('#menu-registro').removeClass("active");
        $('#menu-consulta').addClass("active");
    }else{
        $('#menu-registro').addClass("active");
        $('#menu-consulta').removeClass("active");
    }
}