const fs = require('fs');

function countStudents(path) {
    try {
        const data = fs.readFileSync(path, 'utf8');
        // Process the data, count students, etc.
        console.log(`Number of students: ${count}`);
        // Additional logging as per the requirements
    } catch (error) {
        throw new Error('Cannot load the database');
    }
}

module.exports = countStudents;
