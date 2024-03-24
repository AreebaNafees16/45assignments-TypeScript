// Define a TypeScript object to store car values

// Datatype of student object
interface student {
    fullName: string,
    age: number,
    cgpa: number,
    isPass: boolean
};
// student object
let student = {
    fullName: "Sara Raz",
    age: 23,
    cgpa: 8.2,
    isPass: true,
};
// Print the student object.
console.log("student:", student);

// Define a TypeScript object to store car values

// Datatype of car object
interface car {
    brand: string,
    model: string,
    Year: number,
    color: string,
    price: number,
    isAutomatic: boolean
};
//car object
let car = {
    brand: "Toyota",
    model: "Camry",
    Year: 2024,
    color: "Silver",
    price: 53859000,
    isAutomatic: true
};
// Print the car object
console.log("car:", car);
