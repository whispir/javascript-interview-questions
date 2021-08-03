export function createMapOfStudents(students) {}

export function getListOfFruitsForStudentsWhoseFavouriteColorIsBlue(students) {}

const possibleClasses = ['math', 'science', 'english'];
export function addClassesToStudent(student) {
  const randomClass =
    possibleClasses[Math.floor(Math.random() * possibleClasses.length)];

  student.enrolledClasses = [randomClass];

  return student;
}

const idLookup = {
  1: 'student1@example.com',
  2: 'student2@example.com',
  3: 'student3@example.com',
};




async function fetchContactDetails(id) {
  return new Promise((res) => {
    setTimeout(() => {
      const contactDetails = idLookup[id];
      res(contactDetails);
    }, Math.random() * 1000);
  });
}


function attachContactDetailsToStudents(students) {

    //Use the fetchContactDetails function to get the email address for each student
}