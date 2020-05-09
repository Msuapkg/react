const Casa = require ('./casa')
const Edificio = require ('./edificio')

let casa1 = new Casa (1,5,200,150, 'Coras No. 20, Col. Ajusco, Del. Coyoacan, C.P. 04630, CDMX')

let edificio1 = new Edificio (2,25,250,200,5,'15 m', 'Av. Universidad No. 1030, Col. Xoco, Del. Benito Juárez, C.P. 03310, CDMX')

console.log(casa1);
console.log(casa1.m2());
casa1.setDireccion('Popocatépetl No. 6, Col. Ajusco, Del. Coyoacan, C.P. 04630, CDMX');
console.log(casa1.getDireccion());

console.log(edificio1);
console.log(edificio1.m2());
edificio1.setDireccion('Mitla No. 103, Col. Narvarte Oriente, Del. Benito Juárez, C.P. 03020 , CDMX');
console.log(edificio1.getDireccion());