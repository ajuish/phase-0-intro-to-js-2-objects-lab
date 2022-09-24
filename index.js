// // Write your solution in this file!
// const employee = {name: "NAME", streetAddress: "ADDRESS"}

// function updateEmployeeWithKeyAndValue(employee,key,value){
//     return {...employee, [key]:value}
// }

// function destructivelyUpdateEmployeeWithKeyAndValue(employee,key,value){
//     employee[key]= value;
//     return employee
// }

// function deleteFromEmployeeByKey(employee,key){
//   const newEmployee = {...employee}
//   delete newEmployee[key];
//   return newEmployee
// }

// function destructivelyDeleteFromEmployeeByKey(employee,key){
//     delete employee[key];
//     return employee
// }

// destructivelyDeleteFromEmployeeByKey(employee,"name")
// console.log(employee)

//redo

const employee = {name:"NAME", streetAddress: "ADDRESS"};

let newEmployee
const updateEmployeeWithKeyAndValue = (employee, key, value) => {
    newEmployee ={...employee, [key]:value}
    return newEmployee
}

const destructivelyUpdateEmployeeWithKeyAndValue = (employee, key, value) => {
    employee[key]= value;
    return employee
}

const deleteFromEmployeeByKey = (employee,key) => {
    newEmployee = {...employee};
    delete newEmployee[key];
    return newEmployee;
}

const destructivelyDeleteFromEmployeeByKey = (employee, key) => {
    delete employee[key];
    return employee;
}