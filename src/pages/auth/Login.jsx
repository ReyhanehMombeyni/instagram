import React from "react";
import { Link } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { PostApiLogin } from "./api";

const schema = yup.object({
  username: yup.string().required(),
  password: yup.string().required().min(8).max(12),
});

function Login() {

  const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm({
      resolver: yupResolver(schema),
      mode: "onBlur",
    });
  
    const submitForm=(user) => {
      PostApiLogin(user)
    }

  return (
    <div>
      <div className="max-w-sm mx-[200px] flex justify-between items-center gap-[95px]">
        <img className="w-[504px] h-[603px]" src="../../../public/img/loginimg.png" alt=""/>
        <div className="py-[50px] border border-[#9B9191] px-[210px]  flex flex-col items-center justify-center">
          <img
            src="../../public/img/instagramLogo.svg"
            alt=""
            className="w-[180px] h-[93px]"
          />
          <form
            action=""
            className="flex flex-col gap-[14px] text-[#8A8888] text-[18px]"
            onSubmit={handleSubmit(submitForm)}
          >
            <input
              type="text"
              name="username"
              placeholder="User Name"
              className="py-[10px] px-[30px] border border-[#8A8888] rounded-md"
              {...register("username")}
            />
            {errors.username && <span className="text-error py-3">{errors.username.message}</span>}
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="py-[10px] px-[30px] border border-[#8A8888] rounded-md"
              {...register("password")}
            />
            {errors.password && <span className="text-error py-3">{errors.password.message}</span>}
            <button
              className="text-white text-center bg-[#44B8FA] px-[58px] py-[8px] cursor-pointer rounded-lg   outline-none"
              type="submit"
            >
              Log in
            </button>
          </form>
          <span className="text-black mt-3">
            Don’t have an account?
            <Link to={"/"} className="text-[#44B8FA]">
              Sign Up
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Login;
