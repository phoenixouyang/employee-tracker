const inquirer = require('inquirer');
const {viewDepts, viewRoles, viewEmployees} = require('./lib/viewDB');
const {addDept, addRole, addEmp} = require('./lib/addDB');

// Add a department
const addDeptPrompt = [
    {
        type: 'input',
        name: 'department',
        message: 'Please enter the name of the new department you would like to add.',
        validate: departmentInput => {
            if (departmentInput) {
                return true;
            } else {
                console.log('Please enter a name for your new department.')
                return false;
            }
        }
    }
]

async function addDeptFunc() {
    let newDeptInq = await inquirer.prompt(addDeptPrompt);
    let newDept = addDept(newDeptInq.department);
    console.log('New department has been added')
    returnMenu();
}

// Add a role
const addRolePrompt = [
    {
        type: 'input',
        name: 'title',
        message: 'Please enter the title for the new role.',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('Please enter a title for the new role.')
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'salary',
        message: 'Please enter the salary of the new role.',
        validate: salaryInput => {
            if (isNaN(salaryInput) || salaryInput <= 0) {
                console.log('Please enter a valid amount, greater than $0.')
                return false;
            } else {
                return true;
            }
        }
    },
    {
        type: 'input',
        name: 'department',
        message: 'Please enter the department id of the new role',
        validate: idInput => {
            if (isNaN(idInput) || idInput <= 0) {
                console.log('Please enter a valid number')
                return false;
            } else {
                return true;
            }
        }
    },

]

async function addRoleFunc() {
    let newRoleInq = await inquirer.prompt(addRolePrompt);
    let newRoleTitle = newRoleInq.title;
    let newRoleSalary = newRoleInq.salary;
    let newRoleID = newRoleInq.department;
    addRole(newRoleTitle, newRoleSalary, newRoleID);
    console.log('New role has been added sucessfully')
    returnMenu();
}

// Add an employee
const addEmpPrompt = [
    {
        type: 'input',
        name: 'firstname',
        message: 'Please enter the first name of the new employee.',
        validate: fnInput => {
            if (fnInput) {
                return true;
            } else {
                console.log('Please enter the first name of the new employee.')
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'lastname',
        message: 'Please enter the last name of the new employee.',
        validate: lnInput => {
            if (lnInput) {
                return true;
            } else {
                console.log('Please enter the first name of the new employee.')
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'role',
        message: 'Please enter the role id of the employee',
        validate: roleInput => {
            if (!isNaN(roleInput) || roleInput === "" || roleInput >= 1) {
                return true;
            } else {
                console.log('Please enter a valid id number')
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'manager',
        message: "Please enter the id of the new employee's manager",
        validate: managerInput => {
            if (!isNaN(managerInput) || managerInput === "" | managerInput >= 1) {
                return true;
            } else {
                console.log('Please enter a valid id number')
                return false;
            }
        }
    },

]

async function addEmpFunc() {
    let newEmpInq = await inquirer.prompt(addEmpPrompt);
    let newEmpFn = newEmpInq.firstname.charAt(0).toUpperCase() + newEmpInq.firstname.slice(1);
    let newEmpLn = newEmpInq.lastname.charAt(0).toUpperCase() + newEmpInq.firstname.slice(1);
    let newEmpRole = newEmpInq.role;
    let newEmpMng = newEmpInq.manager;
    addEmp(newEmpFn, newEmpLn, newEmpRole, newEmpMng);
    console.log('New employee has been added successfully')
    returnMenu();
}

// List of prompts for main menu
const menu = [
    {
        type: 'list',
        name: 'menu',
        message: 'What would you like to do?',
        choices: 
        [
            'View all departments',
            'View all roles',
            'View all employees',
            'Add a department',
            'Add a role',
            'Add an employee',
            'Update an employee role'
        ]
    }
]

// switch case function for each menu option
async function startMenu() {
    let response = await inquirer.prompt(menu);
    switch(response.menu) {
        case 'View all departments':
            viewDepts();
            setTimeout(returnMenu, 1000);
            break;
        case 'View all roles':
            viewRoles();
            setTimeout(returnMenu, 1000);
            break;
        case 'View all employees':
            viewEmployees();
            setTimeout(returnMenu, 1000);
            break;
        case 'Add a department':
            addDeptFunc();
            break;
        case 'Add a role':
            addRoleFunc();
            break;
        case 'Add an employee':
            addEmpFunc();
            break;
        case 'Update an employee role':
            console.log('view roles')
            break;
        default:
            break;
    }

}

// return function to bring user back to main menu, or exit application
function returnMenu() {
    inquirer.prompt([
        {
            type: 'confirm',
            name: 'return',
            message: 'Return to main menu?',

        }
    ])
    .then((data) => {
        if (data.return) {
            startMenu()
        } else {
        process.exit();
        }
    })
}

startMenu();