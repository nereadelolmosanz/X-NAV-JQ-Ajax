//se ejecuta cuando está cargado el DOM
jQuery(document).ready(function(){
  //Ejercicio 5.6.5
  $.ajax({
    type: "GET",
    url: "textos/texto.txt",
    cache: false
  }).done(function( text ) {
    console.log("texto 1 cargado");
    $("#texto").html(text);
  });

  //manejador click y manejador para cuando se recibe respuesta
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


  //Ejercicio 5.6.6 - JSON
  $("#getJSON").click(function(){
    $.getJSON("textos/texto.json", function(data) {
      //.after crea un hijo tras el último hijo del elemento.
	    $('#json1').after('<h3>' + data.title + '</h3>');
      //creamos una lista
	    list = '<ul>'
	    for (var i = 0; i < data.entries.length; i++) {
		    list = list + '<li>' + data.entries[i] + '</li>';
	    }
	    list = list + '</ul>';
	    $('#json2').after(list);
	});
    });


});
