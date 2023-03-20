const inquirer = require('inquirer');
const {viewDepts} = require('./lib/lib');

// View all departments

async function menu() { 
    inquirer.prompt([
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
    ])
    .then((data) => {
        let response = data;
        switch(response.menu) {
            case 'View all departments':
                let departments = viewDepts();
                console.table(departments);
                menu();
                break;
            case 'View all roles':
                console.log('view roles')
                break;
            case 'View all employees':
                console.log('view roles')
                break;
            case 'Add a department':
                console.log('view roles')
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
        }
        
    })
};

menu();