import React, { useState } from 'react'
import SignupInput from '../SignupInput/SignupInput'
import { FaFacebookF } from "react-icons/fa6";
import { FaGooglePlusG } from "react-icons/fa";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import 'react-toastify/dist/ReactToastify.css';
import {toast, Bounce } from 'react-toastify';



const Resistration = () => {
  const auth = getAuth();
  const[loading,setloading] =useState(false);

  const[userInfo, setuserInfo] = useState({
    Email: "",
    Address: "",
    Number: "",
    Password: "",
    ConfirmPassword: "",
    FullName: "",
    agrement: false,
  });
  const[userInfoError, setuserInfoError] = useState({
    EmailError: "",
    AddressError: "",
    NumberError: "",
    PasswordError: "",
    ConfirmPasswordError: "",
    FullNameError: "",
    agrementError: "",
    passwordnotMatch: "",
  });


  // HandleInput function start here 

  const HandleInput = (e) =>{
    if(e.target.checked){
      setuserInfo({
        ...userInfo,
        [e.target.id]: true,
      })
    }else{
      setuserInfo({
        ...userInfo,
        [e.target.id]: e.target.value,
      });
    }  
  };


  // HandlesignUp function start here 
  const HandlesignUp = () => {
      const {
        Email,
        Address,
        Number,
        Password,
        ConfirmPassword,
        FullName,
        agrement,
      } = userInfo;
      if(!Email){
        setuserInfoError({
          ...userInfoError,
          AddressError: "",
          NumberError: "",
          PasswordError: "",
          ConfirmPasswordError: "",
          passwordnotMatch: "",
          FullNameError: "",
          agrementError: "",
          EmailError: "Email Missing",
        })
      }else if(!Address){
        setuserInfoError({
          ...userInfoError,
          NumberError: "",
          PasswordError: "",
          ConfirmPasswordError: "",
          passwordnotMatch: "",
          FullNameError: "",
          agrementError: "",
          EmailError: "",
          AddressError: "Address Missing",
        })
      }else if(!Number){
        setuserInfoError({
          ...userInfoError,
          EmailError: "",
          AddressError: "",
          PasswordError: "",
          ConfirmPasswordError: "",
          passwordnotMatch: "",
          FullNameError: "",
          agrementError: "",
          NumberError: "Number Missing",
        });
      }else if(!Password){
        setuserInfoError({
          ...userInfoError,
          AddressError: "",
          NumberError: "",
          ConfirmPasswordError: "",
          passwordnotMatch: "",
          FullNameError: "",
          agrementError: "",
          EmailError: "",
          PasswordError: "Password Missing",
        });
      }else if(!ConfirmPassword){
        setuserInfoError({
          ...userInfoError,
          AddressError: "",
          NumberError: "",
          PasswordError: "",
          passwordnotMatch: "",
          FullNameError: "",
          agrementError: "",
          EmailError:"",
          ConfirmPasswordError: "Confirm Password Missing",
        })
      }else if(Password !== ConfirmPassword){
        setuserInfoError({
          ...userInfoError,
          AddressError: "",
          NumberError: "",
          PasswordError: "",
          ConfirmPasswordError: "",
          FullNameError: "",
          agrementError: "",
          EmailError: "",
          passwordnotMatch: "Password don't match",
        });
      }
      else if(!FullName){
        setuserInfoError({
          ...userInfoError,
          AddressError: "",
          NumberError: "",
          PasswordError: "",
          ConfirmPasswordError: "",
          passwordnotMatch: "",
          agrementError: "",
          EmailError: "",
          FullNameError: "Fullname Missing",
        });
      }else if(!agrement){
        setuserInfoError({
          ...userInfoError,
          AddressError: "",
          NumberError: "",
          PasswordError: "",
          ConfirmPasswordError: "",
          passwordnotMatch: "",
          FullNameError: "",
          EmailError: "",
          agrementError: "Agrement Missing",
        });
      }else{
       setuserInfoError({
         ...userInfoError,
         AddressError: "",
         NumberError: "",
         PasswordError: "",
         ConfirmPasswordError: "",
         passwordnotMatch: "",
         FullNameError: "",
         agrementError: "",
         EmailError: "",
       });

       setuserInfo({
        Email: "",
        Address: "",
        Number: "",
        Password: "",
        ConfirmPassword: "",
        FullName: "",
        agrement: false,
       });

      //Loading state
       setloading(true);


       //Create New user with firebase 
    createUserWithEmailAndPassword(
      auth,
      userInfo.Email,
      userInfo.Password
    ).then((uservalue) => {
      
      toast.success(`${userInfo.FullName} Resistration Done`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
        });
    }).catch((error) =>{
      toast.error(`${userInfo.code} Something Wrong`, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
        });
    }).finally(() => {
      setloading(false)
    })
      };
  };





  return (
    <>
      <div className="bg-bg_color w-full h-[100vh]">
        <div className="container">
          <div className="w-[900px] m-auto">
            <div className="flex items-center justify-between py-8">
              <h2 className="font-Roboto text-2xl">Create your Account</h2>
              <p className="font-Roboto text-base">
                Already member?{" "}
                <a href="#" className="text-blue-400">
                  Login
                </a>{" "}
                here.
              </p>
            </div>
            <div className="w-[900px] py-6 bg-white pb-8">
              <div className="flex gap-x-2">
                <div className="w-1/2 pl-6">
                  <div>
                    <SignupInput
                      className={
                        "w-[380px] py-2 border-2 border-Border_color pl-3"
                      }
                      labelTitle={"Email*"}
                      TypeInput={"email"}
                      InputId={"Email"}
                      InputName={"Email"}
                      InputPlaceHolder={"Enter your email"}
                      onchangeInput={HandleInput}
                      valueFrom={userInfo.Email}
                    />
                    {userInfoError.EmailError && (
                      <p className="font-Roboto font-normal text-base text-red-500">
                        {userInfoError.EmailError}
                      </p>
                    )}
                  </div>
                  <div>
                    <SignupInput
                      className={
                        "w-[380px] py-2 border-2 border-Border_color pl-3"
                      }
                      labelTitle={"Address*"}
                      TypeInput={"text"}
                      InputId={"Address"}
                      InputName={"Address"}
                      InputPlaceHolder={"Enter your address"}
                      onchangeInput={HandleInput}
                      valueFrom={userInfo.Address}
                    />
                    {userInfoError.AddressError && (
                      <p className="font-Roboto font-normal text-base text-red-500">
                        {userInfoError.AddressError}
                      </p>
                    )}
                  </div>
                  <div>
                    <SignupInput
                      className={
                        "w-[380px] py-2 border-2 border-Border_color pl-3"
                      }
                      labelTitle={"Number*"}
                      TypeInput={"number"}
                      InputId={"Number"}
                      InputName={"Number"}
                      InputPlaceHolder={"+880"}
                      onchangeInput={HandleInput}
                      valueFrom={userInfo.Number}
                    />
                    {userInfoError.NumberError && (
                      <p className="font-Roboto font-normal text-base text-red-500">
                        {userInfoError.NumberError}
                      </p>
                    )}
                  </div>
                  <div>
                    <SignupInput
                      className={
                        "w-[380px] py-2 border-2 border-Border_color pl-3"
                      }
                      labelTitle={"Password*"}
                      TypeInput={"password"}
                      InputId={"Password"}
                      InputName={"Password"}
                      InputPlaceHolder={"Enter your password"}
                      onchangeInput={HandleInput}
                      valueFrom={userInfo.Password}
                    />
                    {userInfoError.PasswordError && (
                      <p className="font-Roboto font-normal text-base text-red-500">
                        {userInfoError.PasswordError}
                      </p>
                    )}
                    {userInfoError.passwordnotMatch && (
                      <p className="font-Roboto font-normal text-base text-red-500">
                        {userInfoError.passwordnotMatch}
                      </p>
                    )}
                  </div>
                  <div>
                    <SignupInput
                      className={
                        "w-[380px] py-2 border-2 border-Border_color pl-3"
                      }
                      labelTitle={"Confirm Password*"}
                      TypeInput={"password"}
                      InputId={"ConfirmPassword"}
                      InputName={"ConfirmPassword"}
                      InputPlaceHolder={"Enter your confirm password"}
                      onchangeInput={HandleInput}
                      valueFrom={userInfo.ConfirmPassword}
                    />
                    {userInfoError.ConfirmPasswordError && (
                      <p className="font-Roboto font-normal text-base text-red-500">
                        {userInfoError.ConfirmPasswordError}
                      </p>
                    )}
                    {userInfoError.passwordnotMatch && (
                      <p className="font-Roboto font-normal text-base text-red-500">
                        {userInfoError.passwordnotMatch}
                      </p>
                    )}
                  </div>
                </div>
                <div className="w-1/2">
                  <div>
                    <SignupInput
                      className={
                        "w-[380px] py-2 border-2 border-Border_color pl-3"
                      }
                      labelTitle={"Full Name*"}
                      TypeInput={"text"}
                      InputId={"FullName"}
                      InputName={"FullName"}
                      InputPlaceHolder={"Enter your first name and last name"}
                      onchangeInput={HandleInput}
                      valueFrom={userInfo.FullName}
                    />
                    {userInfoError.FullNameError && (
                      <p className="font-Roboto font-normal text-base text-red-500">
                        {userInfoError.FullNameError}
                      </p>
                    )}
                  </div>

                  <div className="flex items-center gap-x-2 pt-6 cursor-pointer">
                    <input
                      type="checkbox"
                      id="agrement"
                      name="agrement"
                      onChange={HandleInput}
                      valueFrom={userInfo.agrement}
                    />
                    <p
                      className={`font-Roboto font-normal text-gray-600 ${
                        userInfoError.agrementError && "text-red-500"
                      }`}
                    >
                      {userInfoError.agrementError
                        ? "Please agree to the privacy policy"
                        : "I have read and agree to the Privacy Policy"}
                    </p>
                  </div>
                  {/* signup button  */}
                  <div>
                    {loading ? (
                      <button
                        type="button"
                        class="w-[380px] mt-4 text-xl bg-indigo-500 rounded flex items-center py-4 text-white font-Roboto font-bold justify-center"
                      >
                        <svg
                          class="animate-spin h-5 w-5 mr-3 border-t-4 border-b-white border-gray-300 border-4 rounded-full"
                          viewBox="0 0 24 24"
                        ></svg>
                        Processing...
                      </button>
                    ) : (
                      <button
                        className="w-[380px] py-4 bg-Btn_color font-Roboto font-normal text-white text-xl rounded-sm mt-4"
                        onClick={HandlesignUp}
                      >
                        SIGN UP
                      </button>
                    )}
                  </div>
                  {/* signup button  */}
                  <div className="pt-6">
                    <p className="font-Roboto font-normal text-gray-600">
                      Or, sign up with
                    </p>
                    <div className="w-[380px] flex items-center justify-between">
                      <button className="flex items-center pr-10 pl-4 py-2 bg-[#3B5998] font-Roboto font-normal text-white text-xl rounded-sm mt-4">
                        <FaFacebookF className="mr-4" /> Facebook
                      </button>
                      <button className="flex items-center pr-10 pl-4 py-2 bg-[#D34836] font-Roboto font-normal text-white text-xl rounded-sm mt-4">
                        <FaGooglePlusG className="mr-4" /> Google
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Resistration
