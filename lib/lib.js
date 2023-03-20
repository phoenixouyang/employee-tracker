const db = require('../db/connection');
const console = require('console');

// View all departments
function viewDepts() {
    db.query('SELECT * FROM departments', function (err, results) {
        console.log(results);
    });
}

module.exports = {viewDepts}