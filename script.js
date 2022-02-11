function reajuste(){
var nome = window.prompt("Qual é o seu nome?")
var salario = window.prompt(`Qual é o salário de ${nome}?`)
var aumento = window.prompt(`O salário de ${nome} vai ser reajustado em qual porcentagem?`)
var res = window.document.getElementById('resultado')


var a = parseFloat(aumento)//transforma em float
var s = parseFloat(salario)//transforma em float
var r = ((s*a)/100)
var total = r+s

res.innerHTML = `<h1>${nome} recebeu aumento salarial!</h1>`
res.innerHTML += `<p>O salário atual era de R$ ${salario}.</p>`
res.innerHTML += `<p>Com um aumento de ${aumento}%, o salário vai aumentar R$ ${r} no próximo mês.</p>`
res.innerHTML += `<p>E a partir daí, ${nome} vai passar a ganhar R$ ${total}.</p>`


}