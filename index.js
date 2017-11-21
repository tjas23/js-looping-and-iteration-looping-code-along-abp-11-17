// Code your solutions in this file
const employee = ['Ada', 'Brendan', 'Ali'];

function printBadges(emplyee){
  for (let i = 0; i < employee.length; i++){
    console.log(`Welcome ${employee[i]}! You are employee #${i}.`)
  }
  return employee;
}
