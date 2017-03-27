//se ejecuta cuando está cargado el DOM
jQuery(document).ready(function(){
  $.ajax({
    type: "GET",
    url: "textos/texto.txt",
    cache: false
  }).done(function( text ) {
    console.log("texto 1 cargado");
    $("#texto").html(text);
  });


  $("#getText").click(function(){
	  $.ajax({
	    type: "GET",
	    url: "textos/texto2.txt",
	    cache: false
	  }).done(function( text ) {
        console.log("texto 2 cargado");

	    $("#texto").html(text);
	  });
  });

});
