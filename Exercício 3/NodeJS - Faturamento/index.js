import data from './dados.json' assert { type: "json"}
import fs from 'fs'

let invoicingAverage, amount = 0, daysOfWeek = 0;

// iterando o json e somando todos os valores diferentes de 0 e contando quantos dias da semana tem valor diferente de 0 para poder calcular a média
data.forEach((data) => {
    if(!data.valor == 0){
        amount += data.valor;
        daysOfWeek++;
    }
})

// calculando a média e definindo o máximo de 2 casas decimais
invoicingAverage = (amount / daysOfWeek).toFixed(2);

let aux = data;
let smaller, bigger;

// criando um objeto auxiliar com todos os dias onde o valor é diferente de 0
aux = aux.filter(obj => obj.valor != 0)

// obtendo o maior valor de faturamento durante o mês
bigger = aux.reduce((prev, current) => {
    return prev.valor > current.valor ? prev : current;
})

// obtendo o menor valor de faturamento durante o mês
smaller = aux.reduce((prev, current) => {
    return prev.valor < current.valor ? prev : current;
})

let betterDaysQuantity;

// obtendo quais dias o faturamento foi maior que a média do mês
betterDaysQuantity = aux.filter(obj => obj.valor > invoicingAverage)

// texto final para trazer todas as informações solicitadas
const textFinal = `O menor faturamento foi no dia ${smaller.dia} e o valor foi de ${smaller.valor.toFixed(2)}
O maior faturamento foi no dia ${bigger.dia} e o valor foi de ${bigger.valor.toFixed(2)}
O nº de dias com faturamento maior que a média mensal foram ${betterDaysQuantity.length}`

// gerando um arquivo de texto na raiz do projeto com todas as informações
fs.writeFile('Invoicing Average', textFinal, (err) => {
    if (err) throw err;

    // mostrando as informações no console
    console.log(textFinal)
})