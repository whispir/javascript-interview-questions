import { addClassesToStudent, getListOfFruitsForStudentsWhoseFavouriteColorIsBlue } from ".";

describe("createMapOfStudents", () => {


    it ("does what is expected", () => {

        const students = [
            {
                id: "1", 
                firstName: "Joe", 
                lastName: "Bloggs", 
            },
            {
                id: "2", 
                firstName: "Alice", 
                lastName: "Alison", 
            },
            {
                id: "3", 
                firstName: "Cindy", 
                lastName: "Cindyson", 
            }
        ];


        const expectedResult = {
            "1": {
                id: "1", 
                firstName: "Joe", 
                lastName: "Bloggs", 
            },
            "2": {
                id: "2", 
                firstName: "Alice", 
                lastName: "Alison", 
            },
            "3": {
                id: "3", 
                firstName: "Cindy", 
                lastName: "Cindyson", 
            }
        }; 


        const result = createMapOfStudents(students); 

        expect(result).toEqual(expectedResult);
    }); 

}); 


describe("getListOfFruitsForStudentsWhoseFavouriteColorIsBlue", () => {
    const students = [
        {
            id: "1", 
            firstName: "Joe", 
            lastName: "Bloggs",
            favoriteColor: "blue", 
            favoriteFruit: "orange", 
        },
        {
            id: "2", 
            firstName: "Alice", 
            lastName: "Alison", 
            favoriteColor: "blue", 
            favoriteFruit: "apple", 
        },
        {
            id: "3", 
            firstName: "Cindy", 
            lastName: "Cindyson",
            favoriteColor: "red", 
            favoriteFruit: "pineapple",  
        }
    ];

    const expectedResult = ["orange", "apple"]; 

    const result = getListOfFruitsForStudentsWhoseFavouriteColorIsBlue(students); 
    expect(result).toEqual(expectedResult);
}); 

describe("addClassesToStudent", () => {
    const student =             {
        id: "1", 
        firstName: "Joe", 
        lastName: "Bloggs", 
    }; 

    const result = addClassesToStudent(student); 

    expect(result.enrolledClasses).toBeDefined(); 
    expect(result.enrolledClasses).toHaveLength(1); 

    expect(student.enrolledClasses).not.toBeDefined();
}); 


describe("attachContactDetailsToStudents", async () => {

    const students = [
        {
            id: "1", 
            firstName: "Joe", 
            lastName: "Bloggs", 
        },
        {
            id: "2", 
            firstName: "Alice", 
            lastName: "Alison", 
        },
        {
            id: "3", 
            firstName: "Cindy", 
            lastName: "Cindyson", 
        }
    ];

    const result = await attachContactDetailsToStudents(students); 
    const expectedResult = [
        {
            id: "1", 
            firstName: "Joe", 
            lastName: "Bloggs", 
            emailAddress: "student1@example.com", 
        },
        {
            id: "2", 
            firstName: "Alice", 
            lastName: "Alison", 
            emailAddress: "student2@example.com", 

        },
        {
            id: "3", 
            firstName: "Cindy", 
            lastName: "Cindyson", 
            emailAddress: "student3@example.com", 
        }
    ]; 

    expect(result).toEqual(expectedResult);

}); 