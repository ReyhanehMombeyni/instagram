import React from "react";
import { Link } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { PostApiRegister } from "./api";


const schema = yup.object({
  username: yup.string().required(),
  email: yup.string().required().email(),
  password: yup.string().required().min(8).max(12),
});

export default function Signup() {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onBlur",
  });

  const submitForm=(user) => {
    PostApiRegister(user)
  }

  return (
    <div className="max-w-2xl mx-auto border border-[#9B9191] px-[210px] py-[50px] flex flex-col mt-[130px] items-center justify-center">
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
          type="email"
          name="email"
          placeholder="email"
          className="py-[10px] px-[30px] border border-[#8A8888] rounded-md"
          {...register("email")}
        />
        {errors.email && <span className="text-error py-3">{errors.email.message}</span>}
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
        />
        {errors.password && <span className="text-error py-3">{errors.password.message}</span>}
        <button
          className="text-white text-center bg-[#44B8FA] px-[58px] py-[8px] cursor-pointer rounded-lg outline-none"
          type="submit"
        >
          Sign up
        </button>
      </form>
      <span className="text-black mt-3">
      Already have an account?
        <Link to={"/login"} className="text-[#44B8FA]">
          Login
        </Link>
      </span>
    </div>
  );
}
