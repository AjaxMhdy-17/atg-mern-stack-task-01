import React from "react";
import { useForm } from "react-hook-form";
import TransparentButton from "../ui/button/TransparentButton";

const RegisterForm = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    // reset,
  } = useForm();

  const handleSubmitForm = (data) => {
    console.log(data);
  };

  return (
    <div>
      <div>
        <form onSubmit={handleSubmit(handleSubmitForm)} className="">
          <div className="form-group">
            <h4>{errors.fname && <span>please enter your first name</span>}</h4>
            <input
              type="text"
              placeholder="First Name"
              {...register("fname", {
                required: true,
              })}
              className="w-[50%] border border-gray-500 focus:outline-none w-full py-1 px-3"
            />
            <input
              type="text"
              placeholder="Last Name"
              {...register("lname", {
                required: true,
              })}
              className="w-[50%] border-y border-r  focus:outline-none w-full py-1 px-3"
            />
          </div>
          <div className="">
            <h4>{errors.email && <span>please enter a valid email</span>}</h4>
            <input
              type="email"
              placeholder="Enter Email"
              {...register("email", {
                required: true,
                pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              })}
              className="border border-gray-500 focus:outline-none w-full py-1 px-3"
            />
          </div>
          <div className="">
            <h4>
              {errors.password && (
                <span>password length more then 5 characture</span>
              )}
            </h4>
            <input
              type="password"
              placeholder="Enter Password"
              {...register("password", { required: true, minLength: 5 })}
              className="border border-gray-500 focus:outline-none w-full py-1 px-3"
            />
          </div>
          <div className="mt-5 flex items-center justify-between ">
            <button className="bg-custom_blue text-white py-2 px-3 rounded-full">
              Create Account
            </button>
            <div onClick={() => props.toggleHandler()} className="text-[13px] font-bold underline">or,Sign In</div>
          </div>
        </form>
        <div className="my-5 space-y-3">
          <TransparentButton black="black" full="full" >Sign up with Facebook</TransparentButton>
          <TransparentButton black="black" full="full" >Sign up with Google</TransparentButton>
        </div>
        <div className="text-center">
              By Signin up, you agree with our terms and conditions, Privacy Policy
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
