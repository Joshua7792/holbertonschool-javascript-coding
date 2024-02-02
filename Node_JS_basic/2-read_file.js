const fs = require('fs');

function countStudents(filePath) {
  let fileContent;

  // Attempt to read the file content
  try {
    fileContent = fs.readFileSync(filePath, 'utf8'); // Directly read as 'utf8' to get a string
  } catch (error) {
    throw new Error('Cannot load the database');
  }

  // Split the content into lines and filter out any empty lines
  const lines = fileContent.split('\n').filter((line) => line);

  // Skip the header and prepare student data
  const studentsData = lines.slice(1).map((line) => line.split(','));

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
}

module.exports = countStudents;
