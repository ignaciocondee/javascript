class PlazoFijo {
  calcularMontoTotal(tasaAnual, monto, dias) {
    const tasaInteres = tasaAnual / 100;
    const intereses = (monto * tasaInteres * dias) / 365;
    const total = monto + intereses;
    return Math.round(total);
  }
}

function mostrarResultado(montoTotal) {
  const resultadoContainer = document.querySelector('.result-container');
  resultadoContainer.innerHTML = '';
  
  const resultadoElement = document.createElement('p');
  resultadoElement.textContent = `Cuando finalice el plazo, usted tendrá en su cuenta: ${montoTotal}`;
  resultadoContainer.appendChild(resultadoElement);
}

function simularPlazoFijo(event) {
  event.preventDefault();

  const tasaAnual = parseFloat(document.getElementById('tasaAnual').value) || 0;
  const monto = parseFloat(document.getElementById('monto').value) || 0;
  const dias = parseInt(document.getElementById('dias').value) || 0;

  if (!tasaAnual || !monto || !dias) {
    alert('Por favor, ingrese un valor correcto.');
    return;
  }

  const plazoFijo = new PlazoFijo();
  const montoTotal = plazoFijo.calcularMontoTotal(tasaAnual, monto, dias);
  mostrarResultado(montoTotal);

  const datosUsuario = {
    tasaAnual,
    monto,
    dias
  };

  localStorage.setItem('datosUsuario', JSON.stringify(datosUsuario));
}

const plazoFijoForm = document.getElementById('plazoFijoForm');
plazoFijoForm.addEventListener('submit', simularPlazoFijo);
