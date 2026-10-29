import fs from "fs";

export const extractFileData = (filename) => {
  try {

    return {
        statusCode :200,
        statusMessage :"Success",
        data : fs.readFileSync(filename, "utf8")
    }


  } catch (error) {

    return {
        statusCode : 404,
        statusMessage: "File Not found",
        error : error.message
    }
  }
}
export const writefile=(filename,content)=>{

    try{
        if(content!=null){
            fs.writeFileSync(filename,content)
            const filecontent=fs.readFileSync(filename,"utf8")
            return{
            statusCode :200,
            statusMessage :"Success",
            data : filecontent  

        }
        }
        else{
            return "write content";
        }
    }
    catch{
        return {

        statusCode : 404,
        statusMessage: "File Not found",
        error : error.message
    }
        
    }
}
export const appendTheContent = (filename,content) => {
     try{
        if(content!=null){
            fs.appendFileSync(filename,content)
            const fileContent = extractFileData(filename)
            return {
                statusCode : 200,
                statusMessage:"Success",
                content : fileContent.data
            }
        }
            
        else{
            return "Please Add a content"
        }
            

    }
    catch (error) {
        return {
            statusCode : 404,
            statusMessage:"FILE NOT FOUND",
                
        }
    }
}
export const deletecontent=(file)=>{
    try{
        if(file!=null){
            fs.unlinkSync(file);
            return {
                statusCode : 200,
                statusMessage:"Success",
            }
        }
        else{
            return "File is not available"
        }

    }
    catch(error){
        return {
            statusCode : 404,
            statusMessage:"FILE NOT FOUND",
                
        }        
    }


}
export const createdir=(folder)=>{
    try{
        fs.mkdirSync(folder);
        return {
            statusCode: 200,
            statusMessage : "success",
            data : "Folder is Crated"
        }

    }
    catch{
        return {
            statusCode: 409,
            statusMessage : "Failed",
            data : "Folder name already exist"
        }
    }
}
