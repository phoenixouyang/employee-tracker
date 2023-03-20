const db = require('../db/connection');
const console = require('console');

async function addDept(deptName) {
    await db.promise().query(
        `INSERT INTO departments (name)
        VALUES ("${deptName}")`
    )
};


function addRole() {

}

function addEmp() {

}


module.exports = {addDept, addRole, addEmp};