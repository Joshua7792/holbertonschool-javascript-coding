const fs = require('fs');

function countStudents(path) {
    try {
        const data = fs.readFileSync(path, 'utf8');
        const lines = data.split('\n').filter(Boolean);
        console.log(`Number of students: ${lines.length - 1}`); // First line is header
    } catch (error) {
        throw new Error('Cannot load the database');
    }
}

module.exports = countStudents;
