$(document).ready(function(){
    $('header button').click(function() {
        $('form').slideDown();

})
$('form').on("submit", function(e){
    e.preventDefault();
    const novaTarefa = $('nome-da-tarefa').val();
    const novoItem = $('<li></li>');
    $(`<li> ${novaTarefa}</li>`).appendTo(novoItem);
    $(novoItem).appendTo('ul');


$('li').click(function(){
    $(this).addClass('marcado');
});
$('#novaTarefa').val("");
})
})