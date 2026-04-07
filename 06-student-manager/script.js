// Student Manager - Calculate Average Marks

// Array of student objects
const students = [
  { name: "Sarvan", marks: [80, 75, 90] },
  { name: "Prajwal", marks: [85, 88, 92] },
  { name: "Shubh", marks: [70, 65, 78] }
];

// Function to calculate average marks
function calculateAverage(marks) {
  const total = marks.reduce((sum, mark) => sum + mark, 0);
  return total / marks.length;
}

// Loop through each student and display their average
students.forEach(student => {
  const avg = calculateAverage(student.marks);

  console.log("Student Name:", student.name);
  console.log("Marks:", student.marks.join(", "));
  console.log("Average Marks:", avg.toFixed(2));
});