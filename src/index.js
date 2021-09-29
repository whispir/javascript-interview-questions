export function createMapOfStudents(students) {
  // TODO: implement the function
}

export function getListOfFruitsForStudentsWhoseFavouriteColorIsBlue(students) {
  // TODO: implement the function
}






// This object is used by the fetchContactDetails function
const idLookup = {
  1: 'student1@example.com',
  2: 'student2@example.com',
  99: 'student99@example.com',
};

async function fetchContactDetails(id) {
  return new Promise((res) => {
    setTimeout(() => {
      const contactDetails = idLookup[id];
      res(contactDetails);
    }, Math.random() * 1000);
  });
}


export async function attachContactDetailsToStudents(students) {
    // TODO implement the function 
    //Use the fetchContactDetails function to get the email address for each student
}





const possibleClasses = ['math', 'science', 'english'];

// This function is implemented, but it is implemented wrong. 
// TODO fix it. 
export function addClassesToStudent(student) {
  const randomClass =
    possibleClasses[Math.floor(Math.random() * possibleClasses.length)];

  student.enrolledClasses = [randomClass];

  return student;
}

