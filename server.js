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
            console.log('view roles')
            break;
        case 'Add an employee':
            console.log('view roles')
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