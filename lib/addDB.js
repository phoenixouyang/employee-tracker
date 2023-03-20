const db = require('../db/connection');
const console = require('console');

// add department
async function addDept(deptName) {
    await db.promise().query(
        `INSERT INTO departments (name)
        VALUES ("${deptName}")`
    ) .catch (err => {
        console.log(err)
    })
};

// add role
async function addRole(roleTitle, roleSalary, deptId) {
    await db.promise().query(
        `INSERT INTO roles (title, salary, department_id)
        VALUES ("${roleTitle}", ${roleSalary}, ${deptId})`
    ) .catch (err => {
        console.log(err)
    })
};

async function addEmp(empFirst, empLast, empRole, empMng) {
    await db.promise().query(
        `INSERT INTO employees (first_name, last_name, role_id, manager_id)
        VALUES ("${empFirst}", "${empLast}", ${empRole}, ${empMng})`
    ) .catch (err => {
        console.log(err)
    })
};

module.exports = {addDept, addRole, addEmp};