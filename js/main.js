
alert ("BIENVENIDO!!!, calcule el peso-potencia de su vehiculo (cuanto menor resultado mejor peso-potencia)");

    let Peso = parseFloat(prompt("Ingrese el peso en kg de su vehiculo"));
    let potencia = parseFloat(prompt("Ingrese la potencia de su vehiculo"));
    let pesopotencia = Peso / potencia;

    while (Peso != Peso) {
        alert("tu vehiculo pesa:" + Peso);
    }

    while (potencia != potencia) {
        alert("tu vehiculo tiene :" + potencia + "cv")
    }

    alert ("Tu Peso-Potencia es de:" + pesopotencia.toFixed(2) );
    
    alert ("Calcule su potencia-cilindrada (cunto mayor sea el resultado indicado, mejor rendimiento en altas RPM")   

    function name(params) {
        
    }
    
    function calcularCilindradaPotencia(params) {
        alert ("Calcule su potencia-cilindrada (cunto mayor sea el resultado indicado, mejor rendimiento en altas RPM")

        let Potencia2 = parseInt(prompt("Ingrese la Potencia de su vehiculo"));
        let cilindrada = parseFloat(prompt("Ingrese la cilindrada de su vehiculo en Litros"));
        let potenciacilindrada = Potencia2 * cilindrada;

        alert("tu potencia-cilindrada es:" + potenciacilindrada.toFixed(2));

    }

    calcularCilindradaPotencia();