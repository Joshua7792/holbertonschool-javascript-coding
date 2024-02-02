const fs = require('fs').promises;

async function countStudents(path) {
  try {
    // Asynchronously read the file
    const data = await fs.readFile(path, 'utf8');

    // Split the content into lines, filter out empty lines and the header
    const lines = data.split('\n').filter((line, index) => line && index !== 0);

    // Process the student data
    const studentsData = lines.map((line) => line.split(','));

    const totalStudents = studentsData.length; // Calculate the total number of students
    console.log(`Number of students: ${totalStudents}`);

    const studentsByField = {}; // Initialize an object to hold students by their field of study

    // Populate the studentsByField object
    studentsData.forEach((student) => {
      const fieldName = student[3];
      if (!studentsByField[fieldName]) {
        studentsByField[fieldName] = [];
      }
      studentsByField[fieldName].push(student[0]);
    });

    // Log the number of students and their names for each field
    Object.entries(studentsByField).forEach(([field, names]) => {
      console.log(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
    });
  } catch (error) {
    // If reading the file fails, throw an error indicating the database could not be loaded
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
