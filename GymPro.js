let peso=0,altura=0,sexo,imc=0,qtdAgua=0,tmbF=0,tmbM=0,taxaAtvFisica,menu,idade=0,dados=0,validacao=0,contador=1
debugger
alert("ESSA É APENAS UMA BETA TESTE, COM FINS PARA TESTE! \n\n\n\n \tby Paulo Santana da Cruz")
while (1==1) {
document.write(`<br>\tPrograma ${contador}<br>`)
//menu
menu= prompt("O que voce vai querer hoje?\n\t[1]IMC\n\t[2]Quantidade de agua por dia\n\t[3]Taxa metabolica basal(TMB)\n\t[4]Todos")
menu = menu.toUpperCase()
if (menu == 1 || menu == 'IMC' ) {
    menu = 1

}else if (menu == 2 || menu =='QUANTIDADE DE AGUA POR DIA'|| menu== 'AGUA') {
    menu = 2

}else if (menu == 3 || menu =='TAXA METABOLICA BASAL'|| menu== 'TMB'||menu== 'TAXA METABOLICA'){
    menu = 3

}else if (menu == 4 || menu =='TODOS'){
    menu = 4
}else{
    alert("OPS,algo deu errado, se for abreviar Quantidade de agua por dia use: [agua] ou [2] \n se for abreviar Taxa metabolica basal use: [tmb] ou [3], se o erro persistir contate a equipe de suporte e reporte o erro!  ")
}
//entrada de dados
if (dados==0) {
    
peso = Number(prompt("Digite o seu peso atual:"))
altura = Number(prompt("Digite o sua altura atual:"))
sexo = prompt("Digite seu sexo [Feminino]/[Masculino]")
idade= Number(prompt("Digite sua idade"))
taxaAtvFisica = prompt("Qual seu nível de atividade fisica:\n \t[1] Sedentário\n \t[2]Levemente ativo (exercício leve 1 a 3 dias por semana) \n \t[3] Moderadamente ativo (exercício moderado, faz esportes 3 a 5 dias por semana)\n \t[4] Altamente ativo (exercício pesado de 5 a 6 dias por semana)\n \t[4] Extremamente ativo (exercício pesado diariamente e até 2 vezes por dia)")
}
//validação altura
if (altura>=100) {
    altura = altura/100
}else if (altura<0 || isNaN(altura)){

    alert("ERROR, algo deu errado, tente novamente!, se o erro persistir reporte o erro ao nosso suporte!")
    break
}
if (menu==3) {
    
 //validação taxa de atividade fisica
 taxaAtvFisica = Number(taxaAtvFisica)
 if (taxaAtvFisica == 1||taxaAtvFisica == 'SEDENTARIO' ||taxaAtvFisica== "SEDENTÁRIO") {
    taxaAtvFisica = 1.2

 }else if(taxaAtvFisica == 2||taxaAtvFisica =='LEVEMENTE ATIVO'||taxaAtvFisica=="LEVEMENTE"){
    taxaAtvFisica= 1.375

 }else if(taxaAtvFisica == 3||taxaAtvFisica =='MODERADAMENTE ATIVO'||taxaAtvFisica=="MODERADAMENTE"){
    taxaAtvFisica= 1.55

 }else if(taxaAtvFisica == 4||taxaAtvFisica =='ALTAMENTE ATIVO'||taxaAtvFisica=="ALTAMENTE"){
    taxaAtvFisica= 1.725

 }else if(taxaAtvFisica ==5 ||taxaAtvFisica =='EXTREMEMANTE'||taxaAtvFisica=="EXTREMAMENTE"){
    taxaAtvFisica= 1.9
 }else{
    alert("ERROR, algo deu errado, tente novamente!, se o erro persistir reporte o erro ao nosso suporte!")
    break
 }
}
if (validacao=0) {

//validação do sexo
sexo = sexo.toUpperCase()
if (sexo == "M"|| sexo == "MASCULINO") {
    sexo = 1

}else if (sexo == "F"|| sexo == "FEMININO") {
    sexo = 2
}else{
    alert("ERROR, algo deu errado, tente novamente!, se o erro persistir reporte o erro ao nosso suporte!")
    break
 }
}
if (menu==1 || menu ==4) { //IMC [IMC = peso / (altura x altura).]

imc = peso / (altura*altura)
imc= imc.toFixed(2)

if (imc<17) {    
document.write(`<br>seu imc é de ${imc} <br> situação: Muito abaixo do peso`)

}else if (imc>=17 && imc<=18.49) {
    document.write(`<br>seu peso é de ${peso}Kg;seu imc é de ${imc} <br> situação: Abaixo do peso`)

}else if (imc>=18,5 && imc<=24.99) {
    document.write(`<br>seu peso é de ${peso}Kg;seu imc é de ${imc} <br> situação: Peso normal`)

}else if (imc>=25 && imc<=29.99) {
    document.write(`<br>seu peso é de ${peso}Kg;seu imc é de ${imc} <br> situação: Acima do peso`)

}else if (imc>=30 && imc<=34.99) {
    document.write(`<br>seu peso é de ${peso}Kg;seu imc é de ${imc} <br> situação: Obesidade I`)

}else if (imc>=35 && imc<=39.99) {
    document.write(`<br>seu peso é de ${peso}Kg;seu imc é de ${imc} <br> situação: Obesidade II (severa)`)

}else if (imc>=40) {
    document.write(`<br>seu peso é de ${peso}Kg;seu imc é de ${imc} <br> situação: Obesidade III (mórbida)`)

}else{
    alert("ERROR, algo deu errado, tente novamente!, se o erro persistir reporte o erro ao nosso suporte!")
    break
 }
}if (menu == 2 || menu==4) { //Quantidade de agua por dia [multiplicar 35 ml pelo peso do seu corpo]


qtdAgua = peso * 0.035
qtdAgua=qtdAgua.toFixed(2)
document.write(`<br>A quantidade de agua por dia que voce deve ingerir é de ${qtdAgua} Litros<br>`)

}if (menu == 3 ||menu ==4) { //TMB

if(sexo == 1){//masculino
    tmbM = taxaAtvFisica*(66+(13.7*peso)+(5*altura)-(6.8*idade))
    tmbM = tmbM.toFixed(2)
    document.write(`<br>Voce tem que ingerir por dia um total de ${tmbM} calorias<br>`)
}else if(sexo == 2){//feminino
    tmbF = taxaAtvFisica*(655 + (9.6*peso)+(1.8*altura)-(4.7*idade))
    tmbF = tmbF.toFixed(2)
    document.write(`<br>Voce tem que ingerir por dia um total de ${tmbF} calorias<br>`)
}
}

if (confirm("Deseja manter os dados?") == true) {
    
    dados++
    validacao++
    contador++
  } else {
    dados = 0
    validacao=0
    contador++
  }
  if (confirm("Deseja continuar?") == true) {
  continue
} else {
    break 
}
}