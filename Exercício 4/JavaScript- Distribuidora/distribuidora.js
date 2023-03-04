// Criação de uma matriz de objetos com as informações do estado e valor de faturamento;
const invoicing = [
    {
        "state": "SP",
        "value": 67836.43
    },
    {
        "state": "RJ",
        "value": 36678.66
    },
    {
        "state": "MG",
        "value": 29229.88
    },
    {
        "state": "ES",
        "value": 27165.48
    },
    {
        "state": "OTHERS",
        "value": 19849.53
    },
]

let totalValue = 0;
let percentage = [];

// Iterando o array e somando os valores para obter o valor total e armazenando dentro da variável totalValue
 invoicing.forEach((data) => {
    totalValue += data.value
 })

// Iterando o array e inserindo dentro de cada objeto a porcentagem que cada respectivo estado representa
invoicing.forEach((data, index) => {
    invoicing[index].percentOfTotal = calculatePercentage(data.value, totalValue)
 })

 // Função que calcula a porcentagem que cada estado representa, ela recebe 2 parâmentros, sendo o primeiro parãmetro o valor individual de faturamento e o segundo valor o total de faturamento
 function calculatePercentage(value, total){
    return ((value * 100) / total).toFixed(2);
 }

 // Exibindo as informações
 console.log(invoicing);