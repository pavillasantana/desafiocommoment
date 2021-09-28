const { differenceInDays,differenceInMonths, addDays} = require('date-fns')
const moment = require('moment')


let dataIniex1 = new Date(2010,08,15)
let dateaFimEx1 = new Date(2020,05,10)
let resultadoItem1 = dateFns.differenceInDays(dataIniex1, dateaFimEx1)
//console.log('A Diferença de dias entre dias entredatas é: ' + resultadoItem1)
let datIniex2 = new Date (2011,08,15)
let dateaFimEx2 = new Date(2020,05,10)
let resultadoItem2 = dateFns.differenceInMonths(dateaFimEx2 , datIniex2)
//console.log('A Diferença de dias entre dias entredatas é: ' + resultadoItem2)

let datIniex3 = new Date (2011,08,15)

let resultadoItem3 = dateFns.addDays(datIniex3 , 32)
console.log('A entre datas é: ' + resultadoItem3)