import React from "react";
import SignUp from "./SignUp";
import Option from "./Options";
import Steps from "./Steps";
import Explore from "./Explore";
import OpenAcc from "../OpenAccount";


function SignUpPage(){
    return(
    <>
    <SignUp/>
    <Option/>
    <Steps/>
    <Explore/>
    <OpenAcc/>
    </>
    );
}
export default SignUpPage;