const studentInputs = document.getElementById('student-list')
const stuForms = document.getElementById('filter-form')
const inputName = document.getElementById('name')
const inputAge = document.getElementById('age')

const students = [
  { name: 'James', age: 20 },
  { name: 'Mado', age: 22 },
  { name: 'Leroi', age: 19 },
  { name: 'Sonny', age: 21 },
  { name: 'Dan', age: 20 },
  { name: 'Dan Josh', age: 21 }
]

// adding event listener for submission to the form
stuForms.addEventListener('submit', function (event) {
  event.preventDefault()
  const name = inputName.value.trim()
  const age = parseInt(inputAge.value.trim(10))
  filterStudents(name, age)
})

function displayStudents (arrUsers) {
  arrUsers.forEach(function (student) {
    const listItem = document.createElement('li')
    const initials = document.createElement('div')
    const deleteBtn = document.createElement('button')

    initials.classList.add('initials')
    initials.textContent = getInitials(student.name)
    listItem.appendChild(initials)

    const studentInfo = document.createElement('span')
    studentInfo.textContent = `${student.name} (${student.age})`
    listItem.appendChild(studentInfo)

    deleteBtn.classList.add('delete-btn')
    deleteBtn.textContent = 'Delete'
    deleteBtn.addEventListener('click', function () {
      deleteStudent(student)
    })
    listItem.appendChild(deleteBtn)

    studentInputs.appendChild(listItem)
  })
}

function getInitials (name) {
  const names = name.trim().split(' ')
  if (names.length === 1) {
    return names[0].charAt(0)
  } else {
    return names[0].charAt(0) + names[names.length - 1].charAt(0)
  }
}

function filterStudents (name, age) {
  // clear previous student list
  studentInputs.innerHTML = ''

  const filteredStudents = students.filter(function (student) {
    const studentName = student.name.toLowerCase().replace(/\s/g, '')

    // checks if the name variable is empty or if the lowercase version of the student's name contains the lowercase version of the provided name value. The includes method is used to perform a case-insensitive search.
    return (name === '' || studentName.includes(name)) &&

      // checks if the age variable is NaN (isNaN(age)) or if the student's age is equal to the provided age value.
      (isNaN(age) || student.age === age)
  })

  displayStudents(filteredStudents)
}

function deleteStudent (student) {
  const index = students.findIndex(function (s) {
    return s.name === student.name && s.age === student.age
  })

  if (index !== -1) {
    students.splice(index, 1)
    filterStudents(inputName.value.trim(), parseInt(inputAge.value.trim(), 10))
  }
  console.log(students)
}

displayStudents(students)
