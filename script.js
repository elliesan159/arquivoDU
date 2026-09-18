/* =========================================================
   RELÓGIO E DATA
========================================================= */

function atualizarHorario() {

    const agora = new Date();

    let horas = agora.getHours();
    let minutos = agora.getMinutes();

    horas = String(horas).padStart(2, "0");
    minutos = String(minutos).padStart(2, "0");

    document.getElementById("hora").textContent =
        `${horas}:${minutos}`;

    const dias = [
        "domingo",
        "segunda-feira",
        "terça-feira",
        "quarta-feira",
        "quinta-feira",
        "sexta-feira",
        "sábado"
    ];

    const meses = [
        "janeiro",
        "fevereiro",
        "março",
        "abril",
        "maio",
        "junho",
        "julho",
        "agosto",
        "setembro",
        "outubro",
        "novembro",
        "dezembro"
    ];

    document.getElementById("data-atual").textContent =
        `${dias[agora.getDay()]}, ${agora.getDate()} de ${meses[agora.getMonth()]}`;
}

atualizarHorario();
setInterval(atualizarHorario, 1000);


/* =========================================================
   ENTRAR
========================================================= */

function entrar() {

    document.getElementById("tela-inicial").style.display = "none";

    document.getElementById("celular").style.display = "block";
}


/* =========================================================
   APLICATIVOS
========================================================= */

function abrirApp(app) {

    const tela = document.getElementById("tela-app");
    const icone = document.getElementById("icone-app");
    const titulo = document.getElementById("titulo-app");
    const mensagem = document.getElementById("mensagem-app");

    let dados = {};

    if (app === "mar") {

        dados = {
            icone: "🌊",
            titulo: "mar",
            mensagem:
                "acho que você combina com o mar de um jeito bonito.\n" +
                "talvez porque os dois tenham essa capacidade de fazer a gente querer ficar mais um pouco."
        };

    } else if (app === "sol") {

        dados = {
            icone: "☀️",
            titulo: "sol",
            mensagem:
                "você parece um pôr do sol em um sábado na beira da praia."
        };

    } else if (app === "lua") {

        dados = {
            icone: "🌙",
            titulo: "lua",
            mensagem:
                "eu gosto dos seus olhos"
        };

    } else if (app === "chuva") {

        dados = {
            icone: "☁️",
            titulo: "chuva",
            mensagem:
                "você tem uma coisa meio chuva.\n\n" +
                "não de tristeza.\n\n" +
                "daquelas tardes em que dá vontade de ficar quieta, colocar uma música e simplesmente existir por algumas horas."
        };

    } else if (app === "camera") {

        dados = {
            icone: "📷",
            titulo: "câmera",
            mensagem:
                "seu cabelo, seu jeito de se vestir, as pequenas escolhas que você faz sem perceber.\n\n" +
                "tem uma espécie de assinatura em você.\n\n" +
                "uma estética que não parece escolhida. parece simplesmente sua."
        };

    } else if (app === "cafe") {

        dados = {
            icone: "☕",
            titulo: "café",
            mensagem:
                "eu gosto de ver o quanto você é dedicada e produtiva.\n\n" +
                "parece que você simplesmente vai fazendo as coisas acontecerem, do seu jeito e no seu tempo."
        };

    } else if (app === "segredo") {

        dados = {
            icone: "✨",
            titulo: "segredo",
            mensagem:
                "eu gosto de como você parece ser extraordinária.\n\n" +
                "não de um jeito que precise chamar atenção.\n\n" +
                "é mais como aquelas coisas bonitas que a gente percebe aos poucos."
        };

    }

    icone.textContent = dados.icone;
    titulo.textContent = dados.titulo;
    mensagem.textContent = dados.mensagem;

    tela.style.display = "block";
}


/* =========================================================
   VOLTAR
========================================================= */

function voltarPrincipal() {

    document.getElementById("tela-app").style.display = "none";
}


/* =========================================================
   MENSAGENS
========================================================= */

function abrirMensagens() {

    document.getElementById("tela-mensagens").style.display = "block";
}

function voltarMensagens() {

    document.getElementById("tela-mensagens").style.display = "none";
}


/* =========================================================
   CÂMERA
========================================================= */

function abrirCamera() {

    document.getElementById("tela-camera").style.display = "block";
}

function tirarFoto() {

    const telaCamera = document.getElementById("tela-camera");

    telaCamera.classList.add("flash-camera");

    setTimeout(() => {
        telaCamera.classList.remove("flash-camera");
    }, 150);
}

function continuarFoto() {

    document.getElementById("tela-camera").style.display = "none";
}

function fecharCamera() {

    document.getElementById("tela-camera").style.display = "none";
}

function voltarCamera() {

    fecharCamera();
}


/* =========================================================
   MÚSICA
========================================================= */

function abrirMusica() {

    document.getElementById("tela-musica").style.display = "block";
}

function voltarParaPrincipal() {

    document.getElementById("tela-musica").style.display = "none";
}

function voltarParaLista() {

    document.getElementById("player-musica").style.display = "none";
    document.getElementById("tela-musica").style.display = "block";
}

function voltarMusica() {

    document.getElementById("player-musica").style.display = "none";
    document.getElementById("tela-musica").style.display = "block";
}

function tocarMusica(numero) {

    const player = document.getElementById("player-musica");
    const capa = document.getElementById("capa-player");
    const nome = document.getElementById("nome-player");
    const artista = document.getElementById("artista-player");
    const trecho = document.getElementById("trecho-player");

    if (numero === 1) {

        capa.src = "defeitomeu.jpg";

        nome.textContent = "Defeito Meu";

        artista.textContent = "Renan Oliveira";

        trecho.textContent =
            "É um defeito meu querer você assim de qualquer jeito\n" +
            "Preciso então rever os meus conceitos e viver só pra você";

    } else {

        capa.src = "donadosfuturosversos.jpg";

        nome.textContent = "Dona dos Futuros Versos";

        artista.textContent = "Carol Biazin";

        trecho.textContent =
            "Assistir você entrar\n" +
            "Assim como quem não quer nada\n" +
            "Assim como quem quer de tudo\n" +
            "Acho tão lindo, juro, tão lindo";
    }

    document.getElementById("tela-musica").style.display = "none";

    player.style.display = "block";
}