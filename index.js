// Code your solutions in this file
//const employee = ['Ada', 'Brendan', 'Ali'];

function printBadges(employee){
  for (let i = 0; i < employee.length; i++){
    console.log(`Welcome ${employee[i]}! You are employee #${i+1}.`);
  }
  return employee;
}



function tailsNeverFails() {
  return Math.random() >= 0.5;
}

let i = 0;

while (tailsNeverFails() {
  i++;
}
console.log(`You got ${i} tails in a row!`)