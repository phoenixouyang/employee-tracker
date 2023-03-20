const db = require('../db/connection');

// Get list of all employees for inquirer prompt
function getEmp() {
    return db.promise().query(
  `SELECT * 
  FROM employees`
  );
};

// update employee role
async function updateEmp(newRole, empId) {
    await db.promise().query(
        `UPDATE employees SET role_id = ${newRole} WHERE id = "${empId}";`
    ) .catch (err => {
        console.log(err)
    })
};

// delete employee
async function deleteEmp(empDelId) {
    await db.promise().query(
        `DELETE from employees WHERE id = "${empDelId}";`
    ) .catch (err => {
        console.log(err)
    })
}

module.exports = {getEmp, updateEmp, deleteEmp}