import React from "react";
import { Link } from "react-router-dom";
function Login() {
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
          >
            <input
              type="text"
              name="username"
              placeholder="User Name"
              className="py-[10px] px-[30px] border border-[#8A8888] rounded-md"
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="py-[10px] px-[30px] border border-[#8A8888] rounded-md"
            />
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
