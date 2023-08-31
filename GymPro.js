var peso=0,altura=0,sexo,imc=0,qtdAgua=0,tmbF=0,tmbM=0,taxaAtvFisica,menu,idade=0,dados=0,validacao=0,contador=1,metaVida,proteinaDia,ObjetivoVida

alert("ESSA É APENAS UMA BETA TESTE, COM FINS PARA TESTE! \n\n\n\n \tby Paulo Santana da Cruz")

while (1==1) {

document.write(`<br>Programa ${contador}<br>`)

//entrada de dados
    
peso = Number(prompt("Digite o seu peso atual [Kg]:"))

altura = Number(prompt("Digite o sua altura atual [Metros/Centimetros]:"))

sexo = prompt("Digite seu sexo [Feminino]/[Masculino]")

idade= Number(prompt("Digite sua idade [anos]:"))

taxaAtvFisica = prompt("Qual seu nível de atividade fisica:\n\n \t[1] Sedentário\n\n \t[2]Levemente ativo (exercício leve 1 a 3 dias por semana) \n\n \t[3] Moderadamente ativo (exercício moderado, faz esportes 3 a 5 dias por semana)\n\n \t[4] Altamente ativo (exercício pesado de 5 a 6 dias por semana)\n\n \t[4] Extremamente ativo (exercício pesado diariamente e até 2 vezes por dia)")

metaVida= prompt(`Qual seu objetivo: \n\n\t[1] Manter saudável\n\n\t[2] Hipertrofia (ganho de massa muscular)\n\n\t[3] Emagrecer\n\n\n`)

//Validação da Meta de vida
metaVida = metaVida.toUpperCase()
if (metaVida == '1'||metaVida=='MANTER'||metaVida=="MANTER SAUDAVEL"||metaVida=="MANTER SAUDÁVEL") {
    metaVida=1
    ObjetivoVida= "Manter saudável"
}else if (metaVida == '2'||metaVida=='HIPERTROFIA') {
    metaVida=2
    ObjetivoVida= "Hipertrofia (ganho de massa muscular)"
}else if (metaVida == '3'||metaVida=='EMAGRECER') {
    metaVida=1.5
    ObjetivoVida="Emagrecer"
}else{
    alert("ERROR, algo deu errado, tente novamente!, se o erro persistir reporte o erro ao nosso suporte!")
    break
}
metaVida = Number(metaVida)
//validação altura

if (altura>=100) {
    altura = altura/100
}else if (altura<0 || isNaN(altura)){

    alert("ERROR, algo deu errado, tente novamente!, se o erro persistir reporte o erro ao nosso suporte!")
    break
}

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
 //Saida de dados iniciais

    document.write(`\t<br>Altura: ${altura} metros<br>`)
    document.write(`\t<br>Idade: ${idade} anos<br>`)
    document.write(`\t<br>Objetivo: ${ObjetivoVida}<br>`)

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

//IMC [IMC = peso / (altura x altura).]

imc = peso / (altura*altura)
imc= imc.toFixed(2)

if (imc<17) {    
document.write(`<br>\tImc:${imc} <br><br> Situação: Muito abaixo do peso<br>`)

}else if (imc>=17 && imc<=18.49) {
    document.write(`<br>\tPeso: ${peso}Kg<br><br>Imc:${imc} <br><br> Situação: Abaixo do peso<br>`)

}else if (imc>=18,5 && imc<=24.99) {
    document.write(`<br>\tPeso: ${peso}Kg<br><br>Imc:${imc} <br><br> Situação: Peso normal<br>`)

}else if (imc>=25 && imc<=29.99) {
    document.write(`<br>\tPeso: ${peso}Kg<br><br>Imc:${imc} <br><br> Situação: Acima do peso<br><br>`)

}else if (imc>=30 && imc<=34.99) {
    document.write(`<br>\tPeso: ${peso}Kg<br><br>Imc:${imc} <br><br> Situação: Obesidade I<br>`)

}else if (imc>=35 && imc<=39.99) {
    document.write(`<br>\tPeso: ${peso}Kg<br><br>Imc:${imc} <br><br> Situação: Obesidade II (severa)<br>`)

}else if (imc>=40) {
    document.write(`<br>\tPeso: ${peso}Kg<br><br>Imc:${imc} <br><br> Situação: Obesidade III (mórbida)<br>`)

}else{
    alert("ERROR, algo deu errado, tente novamente!, se o erro persistir reporte o erro ao nosso suporte!")
    break
}
 //Quantidade de agua por dia [multiplicar 35 ml pelo peso do seu corpo]


qtdAgua = peso * 0.050
qtdAgua=qtdAgua.toFixed(2)
document.write(`<br>\tA quantidade de agua por dia que voce deve ingerir é de: ${qtdAgua} Litros<br>`)

//TMB

if(sexo == 1){//masculino
    tmbM = taxaAtvFisica*(66+(13.7*peso)+(5*altura)-(6.8*idade))
    tmbM = tmbM.toFixed(2)
    document.write(`\t<br>Calorias por dia: ${tmbM}<br>`)
}else if(sexo == 2){//feminino
    tmbF = taxaAtvFisica*(655 + (9.6*peso)+(1.8*altura)-(4.7*idade))
    tmbF = tmbF.toFixed(2)
    document.write(`\t<br>Calorias por dia: ${tmbF}<br>`)
}
//Proteina por dia

proteinaDia = metaVida *peso

document.write(`<br>Proteina por dia: ${proteinaDia} gramas<br>`)

 if (confirm("Deseja continuar?") == true) {
    contador++
  continue
} else {
    break 
}
}
