
function add(num1, num2){
  return(num1 + num2)
}
function sub(num1, num2){
  return(num1 - num2)
}
function multiply(num1, num2){
  return(num1 * num2)
}
function divide(num1, num2){
  return(num1 / num2)
}
function power(num1, num2){
  return(num1 ** num2)
}
function remainder(num1, num2){
  return(num1 % num2)
}
function squareroot(num1){
  return(Math.sqrt(num1))
}

function calculate(expression){ 
  const tokens = expression.split(' ')
  let operator
  let num1
  let num2
  if (tokens.length === 3){
    num1 =Number(tokens[0])
    operator =tokens[1]
    num2 =Number(tokens[2])
    if (isNaN(num1) || isNaN(num2)){
      alert("that is not a number")
      return
    }
  } if (tokens.length === 2){
    operator = tokens[0]
    num1 = tokens[1]
  } if (isNaN(num1)){
    alert("that is not a number")
    return
  }
 
  if (tokens[1] === "+"){
    return(add(num1, num2))
  } else if (tokens[1] === "-"){
    return(sub(num1, num2))
  } else if (tokens[1] === "*"){
    return(multiply(num1, num2))
  } else if (tokens[1] === "/"){
    return(divide(num1, num2))
  } else if (tokens[1] === "**"){
    return(power(num1, num2))
  } else if (tokens[1] === "%"){
    return(remainder(num1, num2))
  }


} 

/* **************** DO NOT EDIT THE CODE BELOW **************** */
/* ************************************************************ */
/* **************** DO NOT EDIT THE CODE BELOW **************** */

// When the Submit button is clicked, this code calls your `calculate` function
// and then inserts the result on the HTML page.
document.querySelector('#submitButton').addEventListener('click', () => {
  const result = calculate(document.querySelector('#expression').value);
  if (result !== undefined) {
    document.querySelector('#answer').innerText = result;
  }
});
