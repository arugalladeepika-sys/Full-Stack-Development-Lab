import fs from 'fs';

const data = 'Hello this is my operations file on operation';

fs.writeFile("sample1.txt",data,"utf-8",(error)=>{
    if(error){
        console.log("Error in writing file");
    }else{
        console.log("File written successfully");
    }
    fs.readFile("sample1.txt","utf-8",(error,readData)=>{
        if(error){
            console.log("Error in reading file");
        }
        console.log("File content:");
        console.log(readData);
        fs.appendFile("sample1.txt","\nwelcome to FSD lab","utf-8",(error)=>{
            if(error){
                console.log(error);
            }
            console.log("File appended successfully");
        
        })
    })
})