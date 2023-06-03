
class PlazoFijo {
  calcularMontoTotal(tasaAnual, monto, dias) {
    const tasaInteres = tasaAnual / 100;
    const intereses = (monto * tasaInteres * dias) / 365;
    const total = monto + intereses;
    return Math.round(total); // Agregar Math.round() al resultado
  }
}

function obtenerDatosUsuario() {
  const tasaAnual = parseFloat(prompt('Ingrese la tasa de interés anual (%):'));
  const monto = parseFloat(prompt('Ingrese el monto a simular:'));
  const dias = parseInt(prompt('Ingrese la cantidad de días a simular:'));

  if (isNaN(tasaAnual) || isNaN(monto) || isNaN(dias)) {
    alert('Por favor, ingrese un valor correcto.');
    return null;
  } else {
    return {
      tasaAnual,
      monto,
      dias
    };
  }
}

function mostrarResultado(montoTotal) {
  alert(`Cuando finalice el plazo, usted tendrá en su cuenta: ${montoTotal}`);
}

function simularPlazoFijo(plazoFijo, datosUsuario) {
  if (datosUsuario) {
    const { tasaAnual, monto, dias } = datosUsuario;
    const montoTotal = plazoFijo.calcularMontoTotal(tasaAnual, monto, dias);
    mostrarResultado(montoTotal);
  }
}

const plazoFijo = new PlazoFijo('Plazo Fijo 1');
const datosUsuario = obtenerDatosUsuario();
simularPlazoFijo(plazoFijo, datosUsuario);