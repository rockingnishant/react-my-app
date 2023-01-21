import { useState } from "react";
import React from 'react';
interface propsName {
    buttonName:String
}
const clickMe = () =>{ 
    alert('hello');
}
   

const  customButton = ({buttonName}:propsName) =>{
    return (
    <>
     <button onClick={()=>{clickMe()}}>{buttonName}</button>
    </>
   
    )
}
export default customButton;