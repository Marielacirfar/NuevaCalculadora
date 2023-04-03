let numero1 = '';
let numero2 = '';
let operador = '';
const resultado = document.getElementById('resultado');

function agregarNumero(numero) {
  if (operador === '') {
    numero1 += numero;
    resultado.value = numero1;
  } else {
    numero2 += numero;
    resultado.value = numero2;
  }
}

function operacion(signo) {
  operador = signo;
}

function borrar() {
  numero1 = '';
  numero2 = '';
  operador = '';
  resultado.value = '';
}

function calcular() {
  let total;
  switch (operador) {
    case '+':
      total = parseInt(numero1) + parseInt(numero2);
      break;
    case '-':
      total = parseInt(numero1) - parseInt(numero2);
      break;
    case '*':
      total = parseInt(numero1) * parseInt(numero2);
      break;
    case '/':
      total = parseInt(numero1) / parseInt(numero2);
      break;
  }
  resultado.value = total;
}
