import {children , createContext, useState } from "react";

export const UserDetailContext = createContext();



export const UserDetailProvider = ({ children }) => {
  const [userRegdetails, setuserRegdetails] = useState(null);
  const [userplandetails, setuserplandetails] = useState(null);
  const [completedetails,setcompletedetails]=useState(null);

  const saveUserDetails = (formData) => {
    setuserRegdetails(formData);
    console.log("user details.....>",formData)
  };

  const planDetails =(value)=>{
    setuserplandetails(value);
    console.log("user details.....>", value);


  }
  const userCompleteDetails=()=>{
    const userFullDetails = {
      ...userRegdetails,
      plan: userplandetails,
    };
    return userFullDetails;
  }
    
  

 

  return (
    <UserDetailContext.Provider
      value={{
        userRegdetails,
        saveUserDetails,
        planDetails,
        userplandetails,
        userCompleteDetails,
      }}
    >
      {children}
    </UserDetailContext.Provider>
  );
};
