const studentInputs = document.getElementById('student-list')
const stuForms = document.getElementById('filter-form')
const inputName = document.getElementById('name')
const inputAge = document.getElementById('age')

// adding event listener for submission to the form
stuForms.addEventListener('submit', function(event) {
  event.preventDefault() // prevents default form settings, ie having to openx in a new tab when submitted

  const name = inputName.value.trim()
  const age = parseInt(inputAge.value.trim(10))

filterStudents (name, age)
})

function filterStudents (name, age) {
  const students = [
    { name: 'James', age: 20 },
    { name: 'Mado', age: 22 },
    { name: 'Leroi', age: 19 },
    { name: 'Sonny', age: 21 },
    { name: 'Dan', age: 20 },
  ];

  // clear previous student list
  studentInputs.innerHTML = ''

   // Filtering students based on name and/or age
  const filteredStudents = students.filter (function(student) {
    return (name === '' || student.name.toLowerCase().includes(name.toLowerCase())) && // checks if the name variable is empty or if the lowercase version of the student's name contains the lowercase version of the provided name value. The includes method is used to perform a case-insensitive search.
           (isNaN(age) || student.age === age); // checks if the age variable is NaN (isNaN(age)) or if the student's age is equal to the provided age value.
  });

  // Display the filtered students
  filteredStudents.forEach(function(student) {  // The forEach method is used on the filteredStudents array to iterate over each student object.
    const listItem = document.createElement('li');
    listItem.textContent = `${student.name} (${student.age})`; // sets the textContent property of the listItem to a string that combines the student's name and age. The string is created using template literals (${...})
    listItem.classList.add('student-item'); // Add a CSS class to the listItem element
    studentInputs.appendChild(listItem);
  });
}
