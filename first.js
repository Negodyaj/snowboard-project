let a = getNumberFromUser('please enter the value for A');
let b = getNumberFromUser('please enter the value for B');
let resultOfFunction;

console.log(`IT'S TIME FOR EXPERIMENTS!!!!!!!!!!!))))`);
resultOfFunction = calculateFormula(a, b);
console.log(resultOfFunction);

a = 123;
b = 456;

console.log(calculateFormula(a, b));

calculateFormula(c, d);
const c = 14;
const d = 71;

function calculateFormula(valA = 42, valB = 10) {
  const result = calculateFirstPart(valA, valB) / (valB - valA);
  return result;
}

function calculateFirstPart(a, b) {
  return 5*a - b*b;
}

const _calculateFormula = (valA = 42, valB = 10) => {
  const result = _calculateFirstPart(valA, valB) / (valB - valA);
  return result;
}

const _calculateFirstPart = function(a, b) {
  return 5*a - b*b;
}

function getNumberFromUser(message) {
  let userValue;
  let flag = false;

  do {
    if (flag) {
      alert(`you've entered a wrong value. please do it again`);
    }
    userValue = +prompt(message);
    flag = true;
  } while (isNaN(userValue))

  return userValue;
}