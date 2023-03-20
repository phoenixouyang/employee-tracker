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

module.exports = {getEmp, updateEmp}