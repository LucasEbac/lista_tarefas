$(document).ready( function() { 
    $("#form-tarefa").on('submit', function(e){
  
        e.preventDefault();
        
        var novaTarefa = $('#nome-da-tarefa').val();
        
        if(novaTarefa != ""){
            $('#lista').append(`<li>${novaTarefa}</li>`);
        }
        
        $('li').click(function () {
            $(this).addClass('marcado');

            $('#nome-da-tarefa').val("");
        });

    });
  })