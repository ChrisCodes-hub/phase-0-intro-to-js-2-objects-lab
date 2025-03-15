// Write your solution in this file!
const employee={
    name: 'chris',
    streetAdress:'chege'

}
function updateEmployeeWithKeyAndValue(employee,key,value){
    const update = { ...employee, 'name': 'Sam',
        'streetAddress':'11 Broadway'
    }
    return update;
}

   
   
   

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}


function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = { ...employee };
    delete newEmployee[key];
    return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}

