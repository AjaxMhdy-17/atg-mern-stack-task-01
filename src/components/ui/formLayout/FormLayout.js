import React from "react";
import { useState } from "react";
import LoginForm from "../../authForms/LoginForm";
import RegisterForm from "../../authForms/RegisterForm";

const FormLayout = (props) => {
  const [toggle, setToggle] = useState(true);
  const toggleHandler = () => {
    setToggle(!toggle);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="flex items-center justify-between">
          <div className="text-3xl fonr-bold text-[24px] font-[500]">
            {toggle === true ? "Create Account" : "Welcome Back"}
          </div>
          <div className="text-gray-500 hidden lg:flex">
            {toggle === true ? (
              <>
                Already have an account?{" "}
                <span className="text-custom_blue font-[600]">Sign in</span>
              </>
            ) : (
              <>
                don't have an account?{" "}
                <span className="text-custom_blue font-[600]">
                  Create for free
                </span>
              </>
            )}
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6">
          {toggle === true ? (
            <RegisterForm toggleHandler={toggleHandler} />
          ) : (
            <LoginForm toggleHandler={toggleHandler} />
          )}
        </div>
        <div className="col-lg-6 hidden lg:flex">
          <img src="/images/form_img.png" alt="form_image" />
        </div>
      </div>
    </div>
  );
};

export default FormLayout;
