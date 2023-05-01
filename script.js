
const display = document.querySelector("#display")

function insert(num) {

  display.value += num
  const value = display.value
  const fistChar = value.charAt(0)
  const lastChar = value.charAt(value.length - 1)
  const penultimateChar = value.charAt(value.length - 2)

  if(isNaN(fistChar)) {
    display.value = null
  }

  if(isNaN(lastChar) && isNaN(penultimateChar)) {
    display.value = display.value.slice(0, - 1)
  }
}

function calcular() {
  let result = display.value
  display.value = eval(result)
}

function clean() {
  display.value = ""
}

function back() {
  let resultado = display.value;
  display.value = resultado.substring(0, resultado.length -1);
}
