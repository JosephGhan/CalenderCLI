const chalk = require('chalk');
var chunk = require('lodash.chunk');
var moment = require('moment');
moment().format();
const Moment = require('moment');
const MomentRange = require('moment-range');

const moment2 = MomentRange.extendMoment(Moment);
//make moment date objects and put them in a range
let janStart = new Date(2019, 00, 01);
let janEnd   = new Date(2019, 00, 31);
let janRange = moment().range(janStart, janEnd);
//put dates into an array
let janAry = Array.from(janRange.by('day', { step: 1 }));
//get first and last days of the month for printing to console
let janFirst = moment(janAry[0]).format('e'); 
let janLast = moment(janAry[janAry.length - 1]).format('e');
//transferring the dates to new array as a formatted string
let janAry2 = janAry.map(m => m.format('DD'));
//put empty spaces at the end of the array for formatting
for (let i = 0; i < (6 - janLast); i++) {
     janAry2.push("  ");
}
//put empty spaces at the start of the array for formatting
for (let i = 0; i < janFirst; i++) {
    janAry2.unshift("  ");
}

let febStart = new Date(2019, 01, 01);
let febEnd   = new Date(2019, 01, 28);
let febRange = moment().range(febStart, febEnd);
let febAry = Array.from(febRange.by('day', { step: 1 }));
let febFirst = moment(febAry[0]).format('e'); 
let febLast = moment(febAry[febAry.length - 1]).format('e');
let febAry2 = febAry.map(m => m.format('DD'));
//color ma birthday
febAry2[18] = chalk.blue(febAry2[18]);
for (let i = 0; i < (6 - febLast); i++) {
     febAry2.push("  ");
}

for (let i = 0; i < febFirst; i++) {
    febAry2.unshift("  ");
}



let marStart = new Date(2019, 02, 01);
let marEnd   = new Date(2019, 02, 31);
let marRange = moment().range(marStart, marEnd);
let marAry = Array.from(marRange.by('day', { step: 1 }));
let marFirst = moment(marAry[0]).format('e'); 
let marLast = moment(marAry[marAry.length - 1]).format('e');
let marAry2 = marAry.map(m => m.format('DD'));

for (let i = 0; i < (6 - marLast); i++) {
     marAry2.push("  ");
}

for (let i = 0; i < marFirst; i++) {
    marAry2.unshift("  ");
}

let aprStart = new Date(2019, 03, 01);
let aprEnd   = new Date(2019, 03, 30);
let aprRange = moment().range(aprStart, aprEnd);
let aprAry = Array.from(aprRange.by('day', { step: 1 }));
let aprFirst = moment(aprAry[0]).format('e'); 
let aprLast = moment(aprAry[aprAry.length - 1]).format('e');
let aprAry2 = aprAry.map(m => m.format('DD'));
//color ma aniversary
//Look, I know it's 4/20, trust me it's a coinsidence
aprAry2[19] = chalk.blue(aprAry2[19]);
for (let i = 0; i < (6 - aprLast); i++) {
     aprAry2.push("  ");
}

for (let i = 0; i < aprFirst; i++) {
    aprAry2.unshift("  ");
}

let mayStart = new Date(2019, 04, 01);
let mayEnd   = new Date(2019, 04, 31);
let mayRange = moment().range(mayStart, mayEnd);
let mayAry = Array.from(mayRange.by('day', { step: 1 }));
let mayFirst = moment(mayAry[0]).format('e'); 
let mayLast = moment(mayAry[mayAry.length - 1]).format('e');
let mayAry2 = mayAry.map(m => m.format('DD'));

for (let i = 0; i < (6 - mayLast); i++) {
     mayAry2.push("  ");
}

for (let i = 0; i < mayFirst; i++) {
     mayAry2.unshift("  ");
}

let junStart = new Date(2019, 05, 01);
let junEnd   = new Date(2019, 05, 30);
let junRange = moment().range(junStart, junEnd);
let junAry = Array.from(junRange.by('day', { step: 1 }));
let junFirst = moment(junAry[0]).format('e'); 
let junLast = moment(junAry[junAry.length - 1]).format('e');
let junAry2 = junAry.map(m => m.format('DD'));

for (let i = 0; i < (6 - junLast); i++) {
     junAry2.push("  ");
}

for (let i = 0; i < junFirst; i++) {
    junAry2.unshift("  ");
}

let julStart = new Date(2019, 06, 01);
let julEnd   = new Date(2019, 06, 31);
let julRange = moment().range(julStart, julEnd);
let julAry = Array.from(julRange.by('day', { step: 1 }));
let julFirst = moment(julAry[0]).format('e'); 
let julLast = moment(julAry[julAry.length - 1]).format('e');
let julAry2 = julAry.map(m => m.format('DD'));

for (let i = 0; i < (6 - julLast); i++) {
     julAry2.push("  ");
}

for (let i = 0; i < julFirst; i++) {
    julAry2.unshift("  ");
}

let augStart = new Date(2019, 07, 01);
let augEnd   = new Date(2019, 07, 31);
let augRange = moment().range(augStart, augEnd);
let augAry = Array.from(augRange.by('day', { step: 1 }));
let augFirst = moment(augAry[0]).format('e'); 
let augLast = moment(augAry[augAry.length - 1]).format('e');
let augAry2 = augAry.map(m => m.format('DD'));

for (let i = 0; i < (6 - augLast); i++) {
     augAry2.push("  ");
}

for (let i = 0; i < augFirst; i++) {
    augAry2.unshift("  ");
}

let sepStart = new Date(2019, 08, 01);
let sepEnd   = new Date(2019, 08, 30);
let sepRange = moment().range(sepStart, sepEnd);
let sepAry = Array.from(sepRange.by('day', { step: 1 }));
let sepFirst = moment(sepAry[0]).format('e'); 
let sepLast = moment(sepAry[sepAry.length - 1]).format('e');
let sepAry2 = sepAry.map(m => m.format('DD'));

for (let i = 0; i < (6 - sepLast); i++) {
     sepAry2.push("  ");
}

for (let i = 0; i < sepFirst; i++) {
    sepAry2.unshift("  ");
}

let octStart = new Date(2019, 09, 01);
let octEnd   = new Date(2019, 09, 31);
let octRange = moment().range(octStart, octEnd);
let octAry = Array.from(octRange.by('day', { step: 1 }));
let octFirst = moment(octAry[0]).format('e'); 
let octLast = moment(octAry[janAry.length - 1]).format('e');
let octAry2 = octAry.map(m => m.format('DD'));

for (let i = 0; i < (6 - octLast); i++) {
     octAry2.push("  ");
}

for (let i = 0; i < octFirst; i++) {
    octAry2.unshift("  ");
}

let novStart = new Date(2019, 10, 01);
let novEnd   = new Date(2019, 10, 30);
let novRange = moment().range(novStart, novEnd);
let novAry = Array.from(novRange.by('day', { step: 1 }));
let novFirst = moment(novAry[0]).format('e'); 
let novLast = moment(novAry[novAry.length - 1]).format('e');
let novAry2 = novAry.map(m => m.format('DD'));

for (let i = 0; i < (6 - novLast); i++) {
     novAry2.push("  ");
}

for (let i = 0; i < novFirst; i++) {
    novAry2.unshift("  ");
}

let decStart = new Date(2019, 11, 01);
let decEnd   = new Date(2019, 11, 31);
let decRange = moment().range(decStart, decEnd);
let decAry = Array.from(decRange.by('day', { step: 1 }));
let decFirst = moment(decAry[0]).format('e'); 
let decLast = moment(decAry[decAry.length - 1]).format('e');
let decAry2 = decAry.map(m => m.format('DD'));

for (let i = 0; i < (6 - decLast); i++) {
     decAry2.push("  ");
}

for (let i = 0; i < decFirst; i++) {
    decAry2.unshift("  ");
}
//prints output from arrays
console.log('January');
console.log("Sun Mon Tue Wed Thu Fri Sat");

for (let i = 0; i < janAry.length; i++) {
    console.log(janAry2[i] + "  " + janAry2[i + 1] + "  " + janAry2[i + 2] + "  " + janAry2[i + 3] + "  " + janAry2[i + 4] + "  " + janAry2[i + 5] + "  " + janAry2[i + 6]);
     i += 6;
}


console.log('February');
console.log("Sun Mon Tue Wed Thu Fri Sat");

for (let i = 0; i < febAry2.length; i++) {
     console.log(febAry2[i] + "  " + febAry2[i + 1] + "  " + febAry2[i + 2] + "  " + febAry2[i + 3] + "  " + febAry2[i + 4] + "  " + febAry2[i + 5] + "  " + febAry2[i + 6]);
      i += 6;
 }

console.log('March');
console.log("Sun Mon Tue Wed Thu Fri Sat");

for (let i = 0; i < marAry2.length; i++) {
     console.log(marAry2[i] + "  " + marAry2[i + 1] + "  " + marAry2[i + 2] + "  " + marAry2[i + 3] + "  " + marAry2[i + 4] + "  " + marAry2[i + 5] + "  " + marAry2[i + 6]);
      i += 6;
 }

console.log('April');
console.log("Sun Mon Tue Wed Thu Fri Sat");

for (let i = 0; i < aprAry2.length; i++) {
     console.log(aprAry2[i] + "  " + aprAry2[i + 1] + "  " + aprAry2[i + 2] + "  " + aprAry2[i + 3] + "  " + aprAry2[i + 4] + "  " + aprAry2[i + 5] + "  " + aprAry2[i + 6]);
      i += 6;
 }

console.log('May');
console.log("Sun Mon Tue Wed Thu Fri Sat");

for (let i = 0; i < mayAry2.length; i++) {
     console.log(mayAry2[i] + "  " + mayAry2[i + 1] + "  " + mayAry2[i + 2] + "  " + mayAry2[i + 3] + "  " + mayAry2[i + 4] + "  " + mayAry2[i + 5] + "  " + mayAry2[i + 6]);
      i += 6;
 }

console.log('June');
console.log("Sun Mon Tue Wed Thu Fri Sat");

for (let i = 0; i < junAry2.length; i++) {
     console.log(junAry2[i] + "  " + junAry2[i + 1] + "  " + junAry2[i + 2] + "  " + junAry2[i + 3] + "  " + junAry2[i + 4] + "  " + junAry2[i + 5] + "  " + junAry2[i + 6]);
      i += 6;
 }

console.log('July');
console.log("Sun Mon Tue Wed Thu Fri Sat");

for (let i = 0; i < julAry2.length; i++) {
     console.log(julAry2[i] + "  " + julAry2[i + 1] + "  " + julAry2[i + 2] + "  " + julAry2[i + 3] + "  " + julAry2[i + 4] + "  " + julAry2[i + 5] + "  " + julAry2[i + 6]);
      i += 6;
 }

console.log('August');
console.log("Sun Mon Tue Wed Thu Fri Sat");

for (let i = 0; i < augAry2.length; i++) {
     console.log(augAry2[i] + "  " + augAry2[i + 1] + "  " + augAry2[i + 2] + "  " + augAry2[i + 3] + "  " + augAry2[i + 4] + "  " + augAry2[i + 5] + "  " + augAry2[i + 6]);
      i += 6;
 }

console.log('September');
console.log("Sun Mon Tue Wed Thu Fri Sat");

for (let i = 0; i < sepAry2.length; i++) {
     console.log(sepAry2[i] + "  " + sepAry2[i + 1] + "  " + sepAry2[i + 2] + "  " + sepAry2[i + 3] + "  " + sepAry2[i + 4] + "  " + sepAry2[i + 5] + "  " + sepAry2[i + 6]);
      i += 6;
 }

console.log('October');
console.log("Sun Mon Tue Wed Thu Fri Sat");

for (let i = 0; i < octAry2.length; i++) {
     console.log(octAry2[i] + "  " + octAry2[i + 1] + "  " + octAry2[i + 2] + "  " + octAry2[i + 3] + "  " + octAry2[i + 4] + "  " + octAry2[i + 5] + "  " + octAry2[i + 6]);
      i += 6;
 }

console.log('November');
console.log("Sun Mon Tue Wed Thu Fri Sat");

for (let i = 0; i < novAry2.length; i++) {
     console.log(novAry2[i] + "  " + novAry2[i + 1] + "  " + novAry2[i + 2] + "  " + novAry2[i + 3] + "  " + novAry2[i + 4] + "  " + novAry2[i + 5] + "  " + novAry2[i + 6]);
      i += 6;
 }

console.log('December');
console.log("Sun Mon Tue Wed Thu Fri Sat");

for (let i = 0; i < decAry2.length; i++) {
     console.log(decAry2[i] + "  " + decAry2[i + 1] + "  " + decAry2[i + 2] + "  " + decAry2[i + 3] + "  " + decAry2[i + 4] + "  " + decAry2[i + 5] + "  " + decAry2[i + 6]);
      i += 6;
 }