// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

  const employees = [];

// Collect employee data
const collectEmployees = function() {
  let shouldAskQuestion = true;
  while(shouldAskQuestion){
    const firstName = window.prompt ("Please enter your first name");
    const lastName = window.prompt ("Please enter your last name");
    const salary = window.prompt ("Please enter your salary");
    employees.push({ firstName, lastName, salary})
    shouldAskQuestion = window.confirm('do you want to add another employee?')
  }
   return employees;
  // TODO: Get user input to create and return an array of employee objects
}

// Display the average salary
  const displayAverageSalary = function(employeesArray) {
    let totalSalary = 0;
    for (const employee of employees) {
      totalSalary += employee.salary;
    }
    
    const averageSalary = totalSalary / employees.length;
    
    console.log(`Average salary: ${averageSalary.toFixed(2)}`);

  // TODO: Calculate and display the average salary
}

// Select a random employee
const getRandomEmployee = function(employeesArray) {
  // TODO: Select and display a random employee
}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
