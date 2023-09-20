// Define the grade scale
const gradeScale = {
    'A+': 4.0,
    'A': 4.0,
    'A-': 3.7,
    'B+': 3.3,
    'B': 3.0,
    'B-': 2.7,
    'C+': 2.3,
    'C': 2.0,
    'C-': 1.7,
    'D+': 1.3,
    'D': 1.0,
    'F': 0.0
  };
  
  // Define your courses with grades and credit hours
  const courses = [
    { name: 'Math', grade: 'A', creditHours: 3 },
    { name: 'Science', grade: 'B+', creditHours: 4 },
    { name: 'History', grade: 'C', creditHours: 3 }
  ];
  
  // Calculate GPA
  function calculateGPA(courses) {
    let totalGradePoints = 0;
    let totalCreditHours = 0;
  
    for (const course of courses) {
      const gradeValue = gradeScale[course.grade];
      const gradePoints = gradeValue * course.creditHours;
  
      totalGradePoints += gradePoints;
      totalCreditHours += course.creditHours;
    }
  
    const gpa = totalGradePoints / totalCreditHours;
    return gpa.toFixed(2); // Round to two decimal places
  }
  
  const gpa = calculateGPA(courses);
  console.log(`Your GPA is: ${gpa}`);
  