const db = require('../db/connection');
const console = require('console');

// add department
async function addDept(deptName) {
    await db.promise().query(
        `INSERT INTO departments (name)
        VALUES ("${deptName}")`
    )
};

// add role
async function addRole(roleTitle, roleSalary, deptId) {
    await db.promise().query(
        `INSERT INTO roles (title, salary, department_id)
        VALUES ("${roleTitle}", ${roleSalary}, ${deptId})`
    )
};

function addEmp() {

}


module.exports = {addDept, addRole, addEmp};