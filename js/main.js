class PlazoFijo {
  calcularMontoTotal(tasaAnual, monto, dias) {
    const tasaInteres = tasaAnual / 100;
    const intereses = (monto * tasaInteres * dias) / 365;
    const total = monto + intereses;
    return Math.round(total); // Agregar Math.round() al resultado
  }
}

const tasaAnual = parseFloat(prompt('Ingrese la tasa de interés anual (%):'));
const monto = parseFloat(prompt('Ingrese el monto a simular:'));
const dias = parseInt(prompt('Ingrese la cantidad de días a simular:'));

if (isNaN(tasaAnual) || isNaN(monto) || isNaN(dias)) {
  alert('Por favor, ingrese valores numéricos válidos.');
} else {
  const plazoFijo = new PlazoFijo('Plazo Fijo 1');
  const montoTotal = plazoFijo.calcularMontoTotal(tasaAnual, monto, dias);
  alert(`Cuando finalice el plazo, usted tendrá en su cuenta: ${montoTotal}`);
}
