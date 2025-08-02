import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"


const Fileupload = () => {
  const [error, seterror] = useState();
  const [file,setfile]=useState(null)

  const allowedtypes = [
    "application/pdf",
    "application/doc",
    "application/docx",
    "image/png",
    "image/jpg",
  ];
  const maxfilesize=5*1024*1024
 
  const handlefileupload=(e)=>{
     const uplodedfile=e.target.files[0];
     console.log(uplodedfile)

     if(uplodedfile){
      if(!allowedtypes.includes(uplodedfile.type)){
        seterror("change this file formate")
      }else{
        if (uplodedfile.size > maxfilesize) {
          seterror("File size must contain less than 5MB");
        }
        else{
          if (allowedtypes.includes(uplodedfile.type)) {
            seterror("To click submit button and ask your questions");
          }
          setfile(uplodedfile);
        }
      }
     }
    
  }
  
  return (
    <>
      <div className="d-flex justify-content-start  align-items-start">
        <div className="  d-flex justify-content-start align-items-start">
          <h4>upload your file</h4>
          <input type="file" onChange={handlefileupload} />
          <h5>{error}</h5>
          <button className="btn btn-primary" disabled={!file}>submit</button>
        </div>
      </div>
    </>
  );
}

  

export default Fileupload;
