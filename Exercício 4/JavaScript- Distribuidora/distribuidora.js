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

 invoicing.forEach((data) => {
    totalValue += data.value
 })

 invoicing.forEach((data, index) => {
    invoicing[index].percentOfTotal = calculatePercentage(data.value, totalValue)
 })

 function calculatePercentage(value, total){
    return ((value * 100) / total).toFixed(2);
 }

 console.log(invoicing);