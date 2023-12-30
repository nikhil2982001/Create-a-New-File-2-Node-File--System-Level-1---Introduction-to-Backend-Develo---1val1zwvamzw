const fs = require("fs/promises");
const fileName = "myfile.txt";
const fileContent = "Newton School";
const writeFile = async (fileName, fileContent) => {
    //Write your code here
    //Don't change function name
    try{
        await fs.access(fileName);
        console.log(`${fileName} already exists. Skipping write operation`);
    }catch(error){
        await fs.writeFile(fileName,fileContent);
          console.log(`File ${fileName} created and data written successfully!`);
  
};
    writeFile(fileName, fileContent);
module.exports =  writeFile ;

    
    
    


    
