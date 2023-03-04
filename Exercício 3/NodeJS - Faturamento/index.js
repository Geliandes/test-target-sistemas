import data from './dados.json' assert { type: "json"}
import fs from 'fs'

let invoicingAverage, amount = 0, daysOfWeek = 0;

data.forEach((data) => {
    if(!data.valor == 0){
        amount += data.valor;
        daysOfWeek++;

    }
})

invoicingAverage = (amount / daysOfWeek).toFixed(2);

let aux = data;
let smaller, bigger;

aux = aux.filter(obj => obj.valor != 0)

bigger = aux.reduce((prev, current) => {
    return prev.valor > current.valor ? prev : current;
})

smaller = aux.reduce((prev, current) => {
    return prev.valor < current.valor ? prev : current;
})

let betterDaysQuantity;

betterDaysQuantity = aux.filter(obj => obj.valor > invoicingAverage)

const textFinal = `O menor faturamento foi no dia ${smaller.dia} e o valor foi de ${smaller.valor.toFixed(2)}
O maior faturamento foi no dia ${bigger.dia} e o valor foi de ${bigger.valor.toFixed(2)}
O nº de dias com faturamento maior que a média mensal foram ${betterDaysQuantity.length}`

fs.writeFile('Invoicing Average', textFinal, (err) => {
    if (err) throw err;

    console.log(textFinal)
})
