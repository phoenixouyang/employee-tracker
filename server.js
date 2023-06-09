const inquirer = require('inquirer');
const {viewDepts, viewRoles, viewEmployees} = require('./lib/viewDB');
const {addDept, addRole, addEmp} = require('./lib/addDB');
const {getEmp, updateEmp, deleteEmp} = require('./lib/updateDB');

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

// Update an employee role
let empArr = [];
  

async function updateEmpRole() {
    const tempArr = await getEmp();
    const e = tempArr[0];
  
    e.forEach(item => {
        empArr.push({name: item.first_name, value: item.id});
    });

    console.log(empArr)

    const updateEmpPrompt = [
        {
            type: 'list',
            name: 'emp',
            message: 'Which employee would you like to update?',
            choices: empArr
        },
        {
            type: 'input',
            name: 'newRole',
            message: "Please enter the ID of the employee's new role",
        }
    ]

    let newEmpRoleInq = await inquirer.prompt(updateEmpPrompt);

    empChoice = newEmpRoleInq.emp;
    empNewRole = newEmpRoleInq.newRole;
    updateEmp(empNewRole, empChoice);
    console.log('Employee role has been updated!');
    returnMenu();
};

// Delete an employee
async function deleteEmpFunc() {
    const tempArr = await getEmp();
    const e = tempArr[0];
  
    e.forEach(item => {
        empArr.push({name: item.first_name, value: item.id});
    });

    console.log(empArr)

    const deleteEmpPrompt = [
        {
            type: 'list',
            name: 'emp',
            message: 'Which employee would you like to delete?',
            choices: empArr
        }
    ]

    let delEmpInq = await inquirer.prompt(deleteEmpPrompt);

    empChoice = delEmpInq.emp;
    deleteEmp(empChoice);
    console.log('Employee has been deleted');
    returnMenu();
};

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
            'Update an employee role',
            'Delete an employee'
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
            updateEmpRole();
            break;
        case 'Delete an employee':
            deleteEmpFunc()
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