var pacientes = document.querySelectorAll(".paciente");

var tabela = document.querySelector("table");

tabela.addEventListener("dblclick",function(event)
{
    var paiDoAlvo= event.target.parentNode;

    if(event.target.tagName == 'TD')
    {
        paiDoAlvo.classList.add("fadeOut");
    
        setTimeout(function()
        {
            paiDoAlvo.remove();
        },500);
        
    }
});