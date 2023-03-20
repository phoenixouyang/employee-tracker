const db = require('../db/connection');
const console = require('console');

function viewDepts() {
    db.query('SELECT * FROM departments', function (err, results) {
        if (err) {
            return 'Sorry, there was an error processing your request.'
        }
        console.table(results); 
    })
}

// View all roles
function viewRoles() {
    db.query('SELECT * FROM roles', function (err, results) {
        if (err) {
            return 'Sorry, there was an error processing your request.'
        }
        console.table(results); 
    })
}

// View all employees
function viewEmployees() {
    db.query('SELECT * FROM employees', function (err, results) {
        if (err) {
            return 'Sorry, there was an error processing your request.'
        }
        console.table(results); 
    })
}

module.exports = {viewDepts, viewRoles, viewEmployees};