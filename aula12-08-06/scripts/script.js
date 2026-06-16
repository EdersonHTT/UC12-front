
const perguntas = [
    {
        categoria: "Super no Ura de Yani Suu Futari",
        texto: "Qual é o nome da principal personagem feminina de Super no Ura de Yani Suu Hanashi?",
        opcoes: ["Airi", "Yamada", "Tayama", "Mika"],
        correta: 1,
        explicacao: "Yamada é a principal personagem feminina da obra e tem papel central na história."
    },
    {
        categoria: "Konosuba",
        texto: "Qual destas personagens é considerada a principal waifu de Konosuba?",
        opcoes: ["Darkness", "Megumin", "Aqua", "Wiz"],
        correta: 1,
        explicacao: "Megumin é a personagem feminina mais popular da série e uma das protagonistas principais."
    },
    {
        categoria: "Chainsaw Man",
        texto: "Qual é o nome da misteriosa caçadora de demônios que lidera Denji?",
        opcoes: ["Power", "Reze", "Makima", "Kobeni"],
        correta: 2,
        explicacao: "Makima é uma das personagens centrais e possui enorme influência sobre a trama."
    },
    {
        categoria: "Tokyo Ghoul",
        texto: "Quem é a principal personagem feminina associada a Kaneki em Tokyo Ghoul?",
        opcoes: ["Touka Kirishima", "Rize Kamishiro", "Hinami Fueguchi", "Akira Mado"],
        correta: 0,
        explicacao: "Touka Kirishima é a principal protagonista feminina e interesse amoroso de Kaneki."
    },
    {
        categoria: "Mushoku Tensei",
        texto: "Qual destas personagens é uma das heroínas principais de Mushoku Tensei?",
        opcoes: ["Sylphiette", "Ghislaine", "Zenith", "Lilia"],
        correta: 0,
        explicacao: "Sylphiette é uma das personagens femininas mais importantes da história."
    },
    {
        categoria: "Yosuga no Sora",
        texto: "Qual é o nome da irmã gêmea de Haruka Kasugano?",
        opcoes: ["Nao Yorihime", "Akira Amatsume", "Kazuha Migiwa", "Sora Kasugano"],
        correta: 3,
        explicacao: "Sora Kasugano é a irmã gêmea de Haruka e a principal personagem feminina da obra."
    },
    {
        categoria: "Konosuba",
        texto: "Qual personagem de Konosuba utiliza a magia Explosion?",
        opcoes: ["Aqua", "Darkness", "Megumin", "Yunyun"],
        correta: 2,
        explicacao: "Megumin é famosa por utilizar exclusivamente a poderosa magia Explosion."
    },
    {
        categoria: "Chainsaw Man",
        texto: "Qual destas personagens é conhecida como a Blood Fiend?",
        opcoes: ["Power", "Makima", "Himeno", "Kobeni"],
        correta: 0,
        explicacao: "Power é a Blood Fiend e uma das companheiras mais próximas de Denji."
    },
    {
        categoria: "Tokyo Ghoul",
        texto: "Qual personagem feminina foi responsável pela transformação inicial de Kaneki?",
        opcoes: ["Touka Kirishima", "Akira Mado", "Rize Kamishiro", "Hinami Fueguchi"],
        correta: 2,
        explicacao: "Após o acidente envolvendo Rize, Kaneki recebeu seus órgãos e se tornou um meio-ghoul."
    },
    {
        categoria: "Mushoku Tensei",
        texto: "Qual destas personagens pertence à raça dos Superd?",
        opcoes: ["Sylphiette", "Roxy Migurdia", "Eris Boreas", "Nenhuma delas"],
        correta: 3,
        explicacao: "Nenhuma delas é da raça Superd. O personagem mais conhecido dessa raça é Ruijerd."
    }
];

let indiceAtual = 0;
let pontos = 0;
let acertos = 0;
let respostas = [];

const telaInicio = document.getElementById("tela-inicio");
const telaQuiz = document.getElementById("tela-quiz");
const telaResultado = document.getElementById("tela-resultado");

const btnComecar = document.getElementById("btn-comecar");
const btnProxima = document.getElementById("btn-proxima");
const btnReiniciar = document.getElementById("btn-reiniciar");

const numeroPergunta = document.getElementById("numero-pergunta");
const placarAtual = document.getElementById("placar-atual");
const barraFill = document.getElementById("barra-fill");
const categoriaBadge = document.getElementById("categoria-badge");
const textoPergunta = document.getElementById("texto-pergunta");
const opcoesContainer = document.getElementById("opcoes-container");
const feedback = document.getElementById("feedback");
const feedbackIcone = document.getElementById("feedback-icone");
const feedbackTexto = document.getElementById("feedback-texto");

function mostrarTela(tela) {
    document.querySelectorAll(".tela").forEach((t) => t.classList.remove("Ativa"));
    tela.classList.add("ativa");
    
}

function carregarPergunta() {
    const pergunta = perguntas[indiceAtual];

    // Atualiza header
    numeroPergunta.textContent = `Pergunta ${indiceAtual + 1} de ${perguntas.length}`;
    placarAtual.innerHTML = `<i class="fas fa-star"></i> ${pontos} pts`;
    barraFill.style.width = `${(indiceAtual / perguntas.length) * 100}%`;

    // Atualiza pergunta
    categoriaBadge.textContent = pergunta.categoria;
    textoPergunta.textContent = pergunta.texto;

    // Limpa opções e feedback
    opcoesContainer.innerHTML = "";
    feedback.classList.add("escondido");
    btnProxima.classList.add("escondido");

    // Cria botões de opção
    pergunta.opcoes.forEach((opcao, i) => {
        const btn = document.createElement("button");
        btn.classList.add("opcao-btn");
        btn.innerHTML = `<span class="opcao-letra">${i + 1}</span> ${opcao}`;
        btn.addEventListener("click", () => responder(i, btn));
        opcoesContainer.appendChild(btn);
    });
}

function responder(indiceEscolhido, btnClicado) {
    const pergunta = perguntas[indiceAtual];
    const acertou = indiceEscolhido === pergunta.correta;

    // Desabilita todos os botões
    document.querySelectorAll(".opcao-btn").forEach((btn, i) => {
        btn.disabled = true;
        if (i === pergunta.correta) btn.classList.add("correta");
        if (i === indiceEscolhido && !acertou) btn.classList.add("errada");
    });

    // Atualiza pontos e registro
    if (acertou) {
        pontos += 10;
        acertos++;
    }
    respostas.push({ pergunta, escolhida: indiceEscolhido, acertou });

    // Mostra feedback
    feedback.classList.remove("escondido", "feedback-certo", "feedback-errado");
    if (acertou) {
        feedback.classList.add("feedback-certo");
        feedbackIcone.innerHTML = "✅";
        feedbackTexto.textContent = `Correto! ${pergunta.explicacao}`;
    } else {
        feedback.classList.add("feedback-errado");
        feedbackIcone.innerHTML = "❌";
        feedbackTexto.textContent = `Errado! ${pergunta.explicacao}`;
    }

    btnProxima.classList.remove("escondido");

    // Última pergunta: muda texto do botão
    if (indiceAtual === perguntas.length - 1) {
        btnProxima.innerHTML =`Ver Resultado <i class="fas fa-flag-checkered"></i>`;
    } else {
        btnProxima.innerHTML = `Próxima <i class="fas fa-arrow-right"></i>`;
    }
}

function proximaPergunta() {
    indiceAtual++;
    if (indiceAtual < perguntas.length) {
        carregarPergunta();
    } else {
        mostrarResultado();
    }
}

function mostrarResultado() {
    mostrarTela(telaResultado);
    barraFill.style.width = "100%";

    const erros = perguntas.length - acertos;
    const porcentagem = (acertos / perguntas.length) * 100;

    // Emoji e mensagem
    const resultadoEmoji = document.getElementById("resultado-emoji");
    const resultadoTitulo = document.getElementById("resultado-titulo");
    const resultadoDescricao = document.getElementById("resultado-descricao");

    if (porcentagem === 100) {
        resultadoEmoji.textContent = "🏆";
        resultadoTitulo.textContent = "Perfeito!";
        resultadoDescricao.textContent = "Você acertou tudo! Incrível!";
    } else if (porcentagem >= 70) {
        resultadoEmoji.textContent = "🎉";
        resultadoTitulo.textContent = "Muito bem!";
        resultadoDescricao.textContent = "Você foi muito bem! Continue assim!";
    } else if (porcentagem >= 40) {
        resultadoEmoji.textContent = "📚";
        resultadoTitulo.textContent = "Quase lá!";
        resultadoDescricao.textContent = "Revise o conteúdo e tente novamente!";
    } else {
        resultadoEmoji.textContent = "💪";
        resultadoTitulo.textContent = "Continue estudando!";
        resultadoDescricao.textContent = "Não desista! Revise os materiais e tente de novo.";
    }

    document.getElementById("acertos-numero").textContent = acertos;
    document.getElementById("pontos-numero").textContent = pontos;
    document.getElementById("erros-numero").textContent = erros;

    // Revisão
    const revisaoLista = document.getElementById("revisao-lista");
    revisaoLista.innerHTML = "";
    respostas.forEach((r, i) => {
        const item = document.createElement("div");
        item.classList.add("revisao-item", r.acertou ? "revisao-certa" : "revisao-errada");
        item.innerHTML = `
            <span class="revisao-icone">${r.acertou ? "✅" : "❌"}</span>
            <div>
                <strong>Q${i + 1}:</strong> ${r.pergunta.texto}
                ${!r.acertou ? `<br><small>Resposta certa: <b>${r.pergunta.opcoes[r.pergunta.correta]}</b></small>` : ""}
            </div>
        `;
        revisaoLista.appendChild(item);
    });
}

function reiniciar() {
    indiceAtual = 0;
    pontos = 0;
    acertos = 0;
    respostas = [];
    barraFill.style.width = "0%";
    mostrarTela(telaInicio);
}

btnComecar.addEventListener("click", () => {
    mostrarTela(telaInicio);
    carregarPergunta();
});

btnProxima.addEventListener("click", proximaPergunta);
btnReiniciar.addEventListener("click", reiniciar)
