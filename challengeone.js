const num = document.querySelector('#num');
const numto2 = document.querySelector('#numto2');
const numless = document.querySelector('#numless');
let result = document.querySelector('#number-List');
let result2 = document.querySelector('#number-List2');
let result3 = document.querySelector('#number-Less3');

let numbersListFinal = [];

function clearResults1() {
    result.textContent = ""; // Limpiar el resultado
    num.value = ""; // Limpiar el campo de entrada
  }
function challengeOne() {

  const inputValue = num.value;
    
  const numbersList = inputValue.split(',').map(str => str.trim());
  
  // Filtrar y procesar los números
  const filteredNumbers = numbersList.map(num => {
      let numeroFiltrado = "";
      for (let i = 0; i < num.length; i++) {
          if (num[i] !== '5' && num[i] !== '6' && num[i] !== '7' && num[i] !== '8' && num[i] !== '9') {
              numeroFiltrado += num[i];
          }
      }
      const parsedNumber = parseInt(numeroFiltrado);
      return (!isNaN(parsedNumber) && parsedNumber <= 100) ? parsedNumber : null;
  });

  // Filtrar los números nulos y NaN
  const validNumbers = filteredNumbers.filter(num => num !== null);

  numbersListFinal = validNumbers.reverse();
 
  // Mostrar el resultado en la consola como un array
  console.log(numbersListFinal);
  
  result.textContent = JSON.stringify(numbersListFinal);
  
}
num.value = "";

let numbersListFinal2 = [];

function clearResults2() {
    result2.textContent = ""; // Limpiar el resultado
    numto2.value = ""; // Limpiar el campo de entrada
  }
function challengetwo() {

  const inputValue2 = numto2.value;
    
  const numbersList2 = inputValue2.split(',').map(str => str.trim());
  
  // Filtrar y procesar los números
  const filteredNumbers2 = numbersList2.map(numto2 => {
    const parsedNumber2 = parseInt(numto2);
    const squaredNumber2 = parsedNumber2 * parsedNumber2;
    return (!isNaN(parsedNumber2) && squaredNumber2 >= 0 && squaredNumber2 <= 55) ? squaredNumber2 : null;
  });


  // Filtrar los números nulos y NaN
  const validNumbers2 = filteredNumbers2.filter(numto2 => numto2 !== null);

  numbersListFinal2 = validNumbers2;
  numbersListFinal2.sort((a, b) => a - b);
 
  // Mostrar el resultado en la consola como un array
  console.log(numbersListFinal2);
  
  result2.textContent = JSON.stringify(numbersListFinal2);
  
}
numto2.value = "";


function clearResults3() {
  result3.textContent = ""; // Limpiar el resultado
  numless.value = ""; // Limpiar el campo de entrada
}

function challengethree() {
  let numberLess = [];

  const numbersList3 = numless.value.split(',').map(str => parseInt(str.trim()));
  const f = function(prefix, numbersList3) {
    for (let i = 0; i < numbersList3.length; i++) {
        numberLess.push(prefix.concat(numbersList3[i]));
        f(prefix.concat(numbersList3[i]), numbersList3.slice(i + 1));
    }
}

f([], numbersList3);
  const allSums = numberLess.map(combination => combination.reduce((a, b) => a + b, 0));
  const sumasOrdenadas = [...allSums].sort((a, b) => a - b);

  function encontrarPrimerFaltante(sumasOrdenadas) {
      let numeroFaltante = 1;

      for (let i = 0; i < sumasOrdenadas.length; i++) {
          if (sumasOrdenadas[i] === numeroFaltante) {
              numeroFaltante++;
          } else if (sumasOrdenadas[i] > numeroFaltante) {
              break;
          }
      }
      return numeroFaltante;
  }

  const primerFaltante = encontrarPrimerFaltante(sumasOrdenadas);
  result3.textContent = JSON.stringify(primerFaltante);
  console.log(primerFaltante);
}

// Llama a la función clearResults3 para inicializar el elemento result3
clearResults3();
