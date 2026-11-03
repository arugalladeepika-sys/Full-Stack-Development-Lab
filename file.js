import fs from 'fs';
const data = "Hello this is my operations file on operation";
fs.writeFileSync("sample.txt", data, "utf-8");

const readData = fs.readFileSync("sample.txt", "utf-8");
console.log(readData);
fs.appendFileSync("sample.txt", "\n This is my append line", "utf-8");

const updatedData = fs.readFileSync("sample.txt", "utf-8");
console.log(updatedData);

//fs.unlinkSync("sample.txt");