import fs from "fs";
import EventEmitter from "events";
export const  fileEvent = new EventEmitter();
fileEvent.on("textfile",()=>{
    fs.writeFileSync("text.txt","Hello World")
    console.log("File Created");
})
fileEvent.on("textfile",()=>{
    const data = fs.readFileSync("text.txt","utf8")
    console.log(data);
})