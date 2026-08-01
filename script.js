const questions = [
{
question:"Qual é a atitude mais segura ao receber um link de um desconhecido?",
answers:[
"Clicar imediatamente",
"Ignorar ou verificar antes de abrir",
"Enviar para outras pessoas",
"Responder com sua senha"
],
correct:1
},

{
question:"Qual senha é mais segura?",
answers:[
"123456",
"senha123",
"Maria2010",
"G7@xL9!qP2"
],
correct:3
},

{
question:"O que é phishing?",
answers:[
"Um jogo online",
"Um tipo de vírus de computador",
"Uma tentativa de roubar informações usando mensagens falsas",
"Uma atualização de segurança"
],
correct:2
},

{
question:"Por que usar autenticação em duas etapas?",
answers:[
"Para deixar o celular mais lento",
"Para aumentar a segurança da conta",
"Para economizar bateria",
"Para acessar mais rápido"
],
correct:1
},

{
question:"O que fazer se um site pedir seus dados pessoais e parecer suspeito?",
answers:[
"Preencher tudo rapidamente",
"Compartilhar com amigos",
"Fechar a página e verificar se o site é verdadeiro",
"Ignorar o cadeado do navegador"
],
correct:2
}
];

let currentQuestion=0;
let score=0;

const questionBox=document.getElementById("question-box");
const scoreText=document.getElementById("score");

function loadQuestion(){

const q=questions[currentQuestion];

let html=`<h3>${q.question}</h3>`;

q.answers.forEach((answer,index)=>{
html+=`
<button onclick="checkAnswer(${index})">
${answer}
</button><br>
`;
});

questionBox.innerHTML=html;

}

function checkAnswer(answer){

if(answer===questions[currentQuestion].correct){

score++;

}

currentQuestion++;

if(currentQuestion<questions.length){

loadQuestion();

}else{

questionBox.innerHTML=`
<h2>🎉 Quiz Finalizado!</h2>

<p>Você acertou <strong>${score}</strong> de ${questions.length} perguntas.</p>

`;

if(score===questions.length){

scoreText.innerHTML="🏆 Excelente! Você domina os conceitos básicos de segurança digital.";

}else if(score>=3){

scoreText.innerHTML="👏 Muito bem! Continue aprendendo sobre cibersegurança.";

}else{

scoreText.innerHTML="📚 Continue estudando para navegar com mais segurança.";

}

}

}

loadQuestion();

const topBtn=document.getElementById("topBtn");

window.onscroll=function(){

if(document.body.scrollTop>300 || document.documentElement.scrollTop>300){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

}

function topFunction(){

window.scrollTo({

top:0,

behavior:"smooth"

});

}
