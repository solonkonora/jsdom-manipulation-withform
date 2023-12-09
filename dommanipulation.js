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

  const filteredStudents = students.filter(function(student) {
    const studentName = student.name.toLowerCase().replace(/\s/g, '')
    return (name === '' || studentName.includes(name)) &&  // checks if the name variable is empty or if the lowercase version of the student's name contains the lowercase version of the provided name value. The includes method is used to perform a case-insensitive search.
           (isNaN(age) || student.age === age) // checks if the age variable is NaN (isNaN(age)) or if the student's age is equal to the provided age value.
  });


  filteredStudents.forEach(function(student) {
    const listItem = document.createElement('li')
    const initials = document.createElement('div')
    const deleteBtn = document.createElement('button')

    initials.classList.add('initials')
    initials.textContent = getInitials(student.name)
    listItem.appendChild(initials)

    const studentInfo = document.createElement('span')
    studentInfo.textContent = `${student.name} (${student.age})`
    listItem.appendChild(studentInfo);

    deleteBtn.classList.add('delete-btn');
    deleteBtn.textContent = 'Delete'
    deleteBtn.addEventListener('click', function() {
      deleteStudent(student)
    })
    listItem.appendChild(deleteBtn)

    studentInputs.appendChild(listItem)
  })
}

function getInitials(name) {
  const names = name.trim().split(' ')
  if (names.length === 1) {
    return names[0].charAt(0)
  } else {
    return names[0].charAt(0) + names[names.length - 1].charAt(0)
  }
}
function deleteStudent(student) {
  const index = student.indexOf(student);
  if (index !== -1) {
    student.splice(index, 1);
    filterStudents(nameInput.value.trim().toLowerCase().replace(/\s/g, ''), parseInt(ageInput.value.trim(), 10));
  }
}
filterStudents('', NaN);


// function deleteStudent(student) {
//   student = student.filter(function(s) {
//     return s !== student;
//   });
//   filterStudents(nameInput.value.trim().toLowerCase().replace(/\s/g, ''), parseInt(ageInput.value.trim(), 10));
// }
// filterStudents('', NaN);



// // Sample data
// const students = [
//   { name: 'John Doe', age: 20 },
//   { name: 'Jane Smith', age: 22 },
//   { name: 'Michael Johnson', age: 19 },
//   { name: 'Sarah Davis', age: 21 },
// ];

// // Initial rendering
// filterStudents('', NaN);





//   // Display the filtered students
//   filteredStudents.forEach(function(student) {  // The forEach method is used on the filteredStudents array to iterate over each student object.
//     const listItem = document.createElement('li');
//     listItem.textContent = `${student.name} (${student.age})`; // sets the textContent property of the listItem to a string that combines the student's name and age. The string is created using template literals (${...})
//     listItem.classList.add('student-item'); // Add a CSS class to the listItem element
//     studentInputs.appendChild(listItem);
//   });
// }
