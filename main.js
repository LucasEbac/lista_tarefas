$(document).ready(function(){
    $('header button').click(function() {
        $('form').slideDown();

})

})
$('form').on("submit", function(e){
    e.preventDefault();
    const novaTarefa = $('form-tarefa').val();
})
