

function TextWrite() {
    var div = document.getElementById('log');
    var textos = ['Hoje está um lindo dia!', 'Ontem também... lindo lindo!', 'Amanha ouvi dizer que vai chover... vamos ver...', 'Boa noite, até amanhã.', 'Bons sonhos...zzZZZzzzz......'];

    function escrever(str, done) {
        var char = str.split('').reverse();
        var typer = setInterval(function () {
            if (!char.length) {
                clearInterval(typer);
                return setTimeout(done, 500); // só para esperar um bocadinho
            }
            var next = char.pop();
            div.innerHTML += next;
        }, 100);
    }

    function rodape(conteudos, el) {
        var atual = -1;
        function prox() {
            if (atual < conteudos.length - 1) atual++;
            else atual = 0;
            var str = conteudos[atual];
            escrever(str, function () {
                div.innerHTML = '';
                prox();
            });
        }
        prox();
    }
    rodape(textos);
}
