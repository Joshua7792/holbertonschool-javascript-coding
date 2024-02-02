// 2-read_file.js
const fs = require('fs');

function countStudents(path) {
    try {
        // Read the file content
        const data = fs.readFileSync(path, 'utf8');
        
        // Split the content into lines and remove the header and any empty lines
        const lines = data.split('\n').filter((line, index) => line && index !== 0);
        
        // Initialize an object to keep track of the fields and students
        const fieldCounts = {};
        
        lines.forEach(line => {
            const [firstName, field] = line.split(',');
            if (!fieldCounts[field]) {
                fieldCounts[field] = [];
            }
            fieldCounts[field].push(firstName);
        });
        
        // Log total number of students
        console.log(`Number of students: ${lines.length}`);
        
        // Log details by field
        Object.keys(fieldCounts).forEach(field => {
            console.log(`Number of students in ${field}: ${fieldCounts[field].length}. List: ${fieldCounts[field].join(', ')}`);
        });
        
    } catch (error) {
        throw new Error('Cannot load the database');
    }
}

module.exports = countStudents;
