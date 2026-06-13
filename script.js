const botaoMissao = document.querySelector("#botaoMissao");
const textoMissao = document.querySelector("#textoMissao");

const missoes = [
  "Desenhe em pixel art um objeto escolar como se ele fosse um personagem com personalidade própria.",
  "Invente um logotipo para uma matéria, como se Matemática, História ou Ciências fossem marcas famosas.",
  "Crie um mascote para representar sua turma, com nome, cor principal e uma característica marcante.",
  "Transforme uma regra da escola em um cartaz criativo, usando humor, metáfora ou estilo de jogo.",
  "Desenhe um ícone em pixel art para representar um sentimento escolar.",
  "Crie uma capa de livro fictícia inspirada em um dia comum de aula que deu muito errado.",
  "Imagine que cada matéria tem um superpoder. Qual seria o poder de Português, Matemática, Ciências e Artes?",
  "Crie um mapa imaginário do colégio, incluindo lugares reais e lugares inventados.",
  "Crie uma versão futurista do seu colégio: como seriam as salas, os uniformes, as aulas e os materiais?",
  "Invente um clube secreto dentro da escola e crie o nome, o símbolo e a primeira missão dele.",
  "Crie um personagem inspirado em uma matéria escolar, como se Geografia fosse uma pessoa ou Ciências fosse uma exploradora.",
  "Desenhe um troféu simbólico para uma conquista escolar.",
  "Crie uma manchete de jornal sobre um acontecimento absurdo e divertido dentro do colégio.",
  "Crie um uniforme alternativo para uma escola.",
  "Transforme um erro comum de estudante em uma dica visual bonita e fácil de lembrar.",
  "Crie um ranking fictício dos lugares mais interessantes da escola e explique o primeiro lugar.",
  "Imagine que cada sala tem uma trilha sonora. Escolha uma sala e descreva como seria essa música.",
  "Invente uma campanha visual para deixar a escola mais acolhedora, criativa ou organizada.",
];

function gerarMissao() {
  const numeroAleatorio = Math.floor(Math.random() * missoes.length);
  textoMissao.textContent = missoes[numeroAleatorio];
}

botaoMissao.addEventListener("click", gerarMissao);