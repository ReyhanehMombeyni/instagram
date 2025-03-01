import React from 'react'
import { Link } from 'react-router-dom'

export default function Signup() {
  return (
    <div className='max-w-xl mx-auto border border-[#9B9191] px-[210px] py-[50px] flex flex-col mt-[130px] items-center justify-center'>
      <img src="../../public/img/instagramLogo.svg" alt="" className='w-[306px] h-[93px]' />
      <form action="" className='flex flex-col gap-[14px] text-[#8A8888] text-[18px]'>
        <input type="email" name="email" placeholder='email' className='py-[10px] px-[30px] border border-[#8A8888] rounded-md'/>
        <input type="text" name='username' placeholder='userName' className='py-[10px] px-[30px] border border-[#8A8888] rounded-md'/>
        <input type="password" name='password' placeholder='Password' className='py-[10px] px-[30px] border border-[#8A8888] rounded-md'/>
        <button className='text-white text-center bg-[#44B8FA] px-[58px] py-[8px] cursor-pointer rounded-lg border border-[#8A8888]' type='submit'>Sign up</button>
      </form>
      <span className='text-black'>Already have an account?<Link to={"/login"} className='text-[#44B8FA]'>Login</Link></span>
    </div>
  )
}

