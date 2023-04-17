
const display = document.querySelector("#display")

function insert(num) {

  display.textContent += num
  const value = display.textContent
  const fistChar = value.charAt(0)
  const lastChar = value.split(-1)
  
  if(isNaN(fistChar) || isNaN(lastChar)) {
    display.textContent = null
  }
}

function calcular() {
  let result = display.textContent
  display.textContent = eval(result)
}

function clean() {
  display.textContent = ""
}

function back() {
  let resultado = display.textContent;
  display.textContent = resultado.substring(0, resultado.length -1);
}
