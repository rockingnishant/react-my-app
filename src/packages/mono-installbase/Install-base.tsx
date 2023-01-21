import { useState } from "react";
import React from 'react';
import CustomButton from "./CustomButton";
interface propsName {
    name:String
}
const  InstallBase = ({name}:propsName) =>{
    return (
    <>
        <div>Install Base</div>
        <div>After code refctor by {name}</div>
        <CustomButton buttonName={'Show'}/>
    </>
   
    )
}
export default InstallBase;