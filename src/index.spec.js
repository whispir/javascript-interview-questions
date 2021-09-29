import { addClassesToStudent,createMapOfStudents,  getListOfFruitsForStudentsWhoseFavouriteColorIsBlue, attachContactDetailsToStudents} from ".";

describe("createMapOfStudents", () => {
    it ("Transforms the data to the right shape", () => {
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
                id: "99", 
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
            "99": {
                id: "99", 
                firstName: "Cindy", 
                lastName: "Cindyson", 
            }
        }; 

        const result = createMapOfStudents(students); 
        expect(result).toEqual(expectedResult);
    }); 

}); 

describe("getListOfFruitsForStudentsWhoseFavouriteColorIsBlue", () => {


    it("Returns a list of fruit", () => {
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
                id: "99", 
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

}); 



describe("attachContactDetailsToStudents", () => {


    it("Returns a list of students with contact details", async () => {
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
                id: "99", 
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
                id: "99", 
                firstName: "Cindy", 
                lastName: "Cindyson", 
                emailAddress: "student99@example.com", 
            }
        ]; 
    
        expect(result).toEqual(expectedResult);
    });


}); 



describe("addClassesToStudent", () => {


    it("Does not mutate the original student. ", () => {
        const student =             {
            id: "1", 
            firstName: "Joe", 
            lastName: "Bloggs", 
        }; 
    
        const result = addClassesToStudent(student); 
    
        expect(result.enrolledClasses).toBeDefined(); 
        expect(result.enrolledClasses).toHaveLength(1); 

        // The original student should not be mutated
        expect(student.enrolledClasses).not.toBeDefined();
    })

}); 