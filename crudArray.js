const students = [
    { id: 1, name: 'John Doe', age: 20 },
    { id: 2, name: 'Jane Smith', age: 22 },
    { id: 3, name: 'Michael Johnson', age: 19 }
];
//create student new student ={id:4, name:'Emily Davis', age:21} students.push(newStudent) console.log('All students:', students)
const newStudent = { id: 4, name: 'Emily Davis', age: 21 };
students.push(newStudent);
console.log('All students:', students);

//Read student by id
const studentIdToUpdate = 2;
const studentToRead = students.find(student => student.id === studentIdToUpdate);
console.log(`student with ID ${studentIdToUpdate}:`, studentToRead);

//update student by id
const studentToUpdate = 3;
const updateStudent = students.find(student => student.id === studentToUpdate);
const studentIndexToUpdate = students.findIndex(student => student.id === studentToUpdate);
if (studentIndexToUpdate !== -1) {
    students[studentIndexToUpdate] = { ...updateStudent, name: 'Updated Name', age: 25 };
    console.log(`Updated student with ID ${studentToUpdate}:`, students[studentIndexToUpdate]);
    
}else{
    console.log(`Student with ID ${studentToUpdate} not found.`);
}

//delete student by id
const studentIdToDelete = 1;
const studentIndexToDelete = students.findIndex(student => student.id === studentIdToDelete);
if (studentIndexToDelete !== -1) {
    const deletedStudent = students.splice(studentIndexToDelete, 1)[0];
    console.log(`Deleted student with ID ${studentIdToDelete}:`, deletedStudent);
}else{
    console.log(`Student with ID ${studentIdToDelete} not found.`);
}
//all students after CRUD operations
console.log('All students records after CRUD operations:', students);
