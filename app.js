const sum=require("./module/calc");
const {getCurrentDirectory,getCurrentFileDirectory}=require("./module/global_obj");
const result=sum(100,250);
const directoryname=getCurrentDirectory();
const filename=getCurrentFileDirectory();

console.log(result);
console.log(directoryname);
console.log(filename);
