import input from 'readline-sync';
 
const frases= [
    "Desistir à primeira é para os fracos, tente sempre mais uma vez.",
    "Encare a vida com mais leveza.",
    "Você precisa fazer aquilo que pensa que não é capaz de fazer.",
    "Mentalize: sua verdadeira força, vem de dentro.",
    "Imagine uma nova história para sua vida e acredite nela.",
    "Dê mais crédito a você.",
    "Em meio ao caos, respire fundo.",
    "A esperança é o sonho do homem acordado.",
    "Fé, duas letras que podem mudar sua vida, acredite.",
    "Receita para uma boa semana: acredite em você.",
    "O que quer que você lute, você fortalece, e o que você resiste, persiste.",
    "Não existe um caminho para a felicidade. A felicidade é o caminho.",
    "Ter amizades duplica as alegrias e divide as tristezas.",
    "Esteja preparado para as oportunidades da vida.",
    "Nada acontece a menos que sonhemos antes.",
    "Deixe para trás tudo o que não te levará para frente.",
    "Um objetivo nada mais é do que um sonho com limite de tempo.",
    "Você precisa fazer aquilo que pensa que não é capaz de fazer.",
    "A persistência é o caminho do êxito.",
    "Concentre-se naquilo que você é bom, delegue todo o resto.",
    "Para quem ama, qualquer sacrifício é alegria.",
    "A paz é a única forma de nos sentirmos realmente humanos.",
    "Coloque fé onde falta coragem",
    "A criatividade é ilimitada, pois a arte só precisa de motivação.",
    "Que a vontade de vencer seja minha maior motivação.",
    "Nunca subestime o poder de sua visão para mudar o seu mundo.",
    "Não coloque limites em seus sonhos. Coloque fé.",
    "Sorte é o resultado de muito esforço, trabalho e dedicação.",
    "Não espere por uma crise para descobrir o que é importante em sua vida.",
    "Se existe uma forma de fazer melhor, descubra-a",
    "A alegria de fazer o bem é a única felicidade verdadeira.",
];

let hoje = new Date();
let n = hoje.getDate();
n--;

let frase_dia = frases[n];

console.log("\n -- BOM DIA -- ");
console.log("\nHoje é dia: "+ hoje.getDate());
console.log("\nPara hoje a frase é: "+frase_dia);
console.log(true + true);
console.log(null + null);