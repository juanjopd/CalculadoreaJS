let operando1 = "";
let operando2 = "";
let operacionActual = null;
let resultado = null;

function concatenar(digito) {
  if (operacionActual === null) {
    operando1 += digito;
    actualizarDisplay(operando1);
  } else {
    operando2 += digito;
    actualizarDisplay(operando2);
  }
}

function punto() {
  if (operacionActual === null) {
    if (!operando1.includes(".")) {
      operando1 += ".";
      actualizarDisplay(operando1);
    }
  } else {
    if (!operando2.includes(".")) {
      operando2 += ".";
      actualizarDisplay(operando2);
    }
  }
}

function operacion(op) {
  if (operando1 !== "") {
    operacionActual = op;
  }
}

function calcular() {
  if (operando1 !== "" && operando2 !== "" && operacionActual !== null) {
    operando1 = parseFloat(operando1);
    operando2 = parseFloat(operando2);

    switch (operacionActual) {
      case "+":
        resultado = operando1 + operando2;
        break;
      case "-":
        resultado = operando1 - operando2;
        break;
      case "*":
        resultado = operando1 * operando2;
        break;
      case "/":
        resultado = operando1 / operando2;
        break;
      default:
        break;
    }

    actualizarDisplay(resultado);
    reiniciarCalculadora();
  }
}

function limpiar() {
  operando1 = "";
  operando2 = "";
  operacionActual = null;
  resultado = null;
  actualizarDisplay("");
}

function reiniciarCalculadora() {
  operando1 = resultado.toString();
  operando2 = "";
  operacionActual = null;
  resultado = null;
}

function actualizarDisplay(valor) {
  document.getElementById("display").value = valor;
}
