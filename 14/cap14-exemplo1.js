// pega o elemento form
var form1 = document.getElementById("meuForm");

// chamado função para capturar eventos
captura_eventos(form1, 'submit', formValid);

// função de capturar eventos
function captura_eventos(objeto, evento, funcao) {
    // teste addEventListener
    if (objeto.addEventListener) {
        objeto.addEventListener(evento, funcao, true);
    } // teste attachEvent
    else if (objeto.attachEvent) {
        var evento = 'on'+evento;
        objeto.attachEvent(evento, funcao);
    }
}

// função de validação do form
function formValid(event) {
    if (document.forms[0].textname.value.length == 0) {
        alert("O campo Nome é obrigatório");

        if (event.preventDefault) {
            event.preventDefault();
        } else {
            window.event.returnValue = false;
        }

        return false;
    } else {
        alert("Olá "+ document.forms[0].textname.value);
        return true;
    }
}