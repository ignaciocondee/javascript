
//function CalcularPeso/Potencia

alert ("BIENVENIDO!!!, calcule el peso-potencia de su vehiculo (cuanto menor resultado mejor peso-potencia)");

let peso = parseInt(prompt("Ingrese el peso en kg de su vehiculo"));
let potencia = parseInt(prompt("Ingrese la potencia de su vehiculo"));
let pesopotencia = peso / potencia;

console.log("peso: " + peso  +"kg");
console.log("potencia " + potencia + "cv");
console.log("pesopotencia" + pesopotencia);

alert ("Tu Peso-Potencia es de:" + pesopotencia );

// function calcular potencia/cilindrada

alert ("calcule su potencia-cilindrada (cunto mayor sea el resultado indicado, mejor rendimiento en altas RPM")

let Potencia2 = parseInt(prompt("Ingrese la Potencia de su vehiculo"));
let cilindrada = parseFloat(prompt("Ingrese la cilindrada de su vehiculo en Litros"));
let potenciacilindrada = Potencia2 / cilindrada;

console.log("Potencia:" + Potencia2 + "cv");
console.log("cilindrada" + cilindrada + "litros");
console.log("Potencia" + potenciacilindrada);

alert ("Tu Potencia-cilindra es de :" + potenciacilindrada)