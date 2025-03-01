import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { PostApiRegister } from './api';

const schema = yup.object({
  username: yup.string().required(),
  email: yup.string().required().email(),
  password: yup.string().required().min(8),
});

export default function Signup() {

  const {register, handleSubmit, formState: {errors}}= useForm({
    resolver: yupResolver(schema),
    mode: "onBlur"
  })

  const formSumit = (user) =>{
    PostApiRegister(user)
  }


  return (
    <div className='max-w-xl mx-auto border border-[#9B9191] px-[210px] py-[50px] flex flex-col mt-[130px] items-center justify-center'>
      <img src="../../public/img/instagramLogo.svg" alt="" className='w-[306px] h-[93px]' />
      <form action="" onSubmit={handleSubmit(formSumit)} className='flex flex-col gap-[14px] text-[#8A8888] text-[18px]'>
        <input type="email" {...register("email")} name="email" placeholder='Email' className='py-[10px] px-[30px] border border-[#8A8888] rounded-md'/>
        {errors.email && <span className='text-error'>{errors.email.message}</span>}
        <input type="text" {...register("username")} name='username' placeholder='userName' className='py-[10px] px-[30px] border border-[#8A8888] rounded-md'/>
        {errors.username && <span className='text-error'>{errors.username.message}</span>}
        <input type="password" {...register("password")} name='password' placeholder='Password' className='py-[10px] px-[30px] border border-[#8A8888] rounded-md'/>
        {errors.password && <span className='text-error'>{errors.password.message}</span>}
        <button className='text-white text-center bg-[#44B8FA] px-[58px] py-[8px] cursor-pointer rounded-lg border border-[#8A8888]' type='submit'>Sign up</button>
      </form>
      <span className='text-black'>Already have an account?<Link to={"/login"} className='text-[#44B8FA]'>Login</Link></span>
    </div>
  )
}

