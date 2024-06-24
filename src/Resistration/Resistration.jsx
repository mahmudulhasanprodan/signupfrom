import React from 'react'
import SignupInput from '../SignupInput/SignupInput'
import { FaFacebookF } from "react-icons/fa6";
import { FaGooglePlusG } from "react-icons/fa";


const Resistration = () => {
  return (
    <>
      <div className="bg-bg_color w-full h-[100vh]">
        <div className="container">
          <div className="w-[900px] m-auto">
            <div className="flex items-center justify-between py-8">
              <h2 className="font-Roboto text-2xl">Create your Account</h2>
              <p className="font-Roboto text-base">
                Already member?{" "}
                <a
                  href="#"
                  className="text-blue-400"
                >
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
                    />
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
                    />
                  </div>
                  <div>
                    <SignupInput
                      className={
                        "w-[380px] py-2 border-2 border-Border_color pl-3"
                      }
                      labelTitle={"Number*"}
                      TypeInput={"text"}
                      InputId={"Number"}
                      InputName={"Number"}
                      InputPlaceHolder={"+880"}
                    />
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
                    />
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
                    />
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
                    />
                  </div>

                  <div className="flex items-center gap-x-2 pt-6 cursor-pointer">
                    <input type="checkbox" id="checkbox" name="checkbox" />
                    <p className="font-Roboto font-normal text-gray-600">
                      I have read and agree to the Privacy Policy
                    </p>
                  </div>
                  <div>
                    <button className="w-[380px] py-4 bg-Btn_color font-Roboto font-normal text-white text-xl rounded-sm mt-4">
                      SIGN UP
                    </button>
                  </div>
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
