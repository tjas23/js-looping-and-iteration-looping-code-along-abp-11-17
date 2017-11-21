// Code your solutions in this file
//const employee = ['Ada', 'Brendan', 'Ali'];

function printBadges(employee){
  for (let i = 0; i < employee.length; i++){
    console.log(`Welcome ${employee[i]}! You are employee #${i+1}.`);
  }
  return employee;
}



// function tailsNeverFails() {
//   return Math.random() >= 0.5;
// }
// 
// let j = 0;
// 
// while (tailsNeverFails()) {
//   j++;
// }
// console.log(`You got ${j} tails in a row!`)

function tailsNeverFails() {
  let j = 0;
  while (Math.random() >= 0.5) {
    j++
  }
  console.log(`You got ${j} tails in a row!`)
}


