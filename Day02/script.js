let btn = document.createElement("button");
btn.innerText = "BOTAO";
document.body.appendChild(btn);

function alerta(){
    const nome = prompt("Qual é seu nome");
    const idade = prompt("Qual é sua idade");
    const profissão = prompt("Qual é sua profissão");
    var x
    if(nome && idade && profissão != null){
        x = "Eu sou o " + nome + ", tenho " + idade + " anos " + " e sou " + profissão;
        document.getElementById("p").innerText=x;
    }
}

btn.addEventListener("click", function(){
    alerta();
})