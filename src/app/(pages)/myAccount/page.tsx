import Banner from '@/components/banner'
import Footer2 from '@/components/footer2'
import Header from '@/components/header'
import LogInForm from '@/components/logInForm'
import RegisterForm from '@/components/registerForm'
import React from 'react'

export default function AccountPage() {
  return (
    <div  className="text-black font-poppins bg-white">
      <Header/>
      <Banner title='My Account'/>
      <div  className="w-full max-w-[1536px] mx-auto h-auto flex flex-col md:flex-row gap-4 lg:gap-12 2xl:gap-24 px-5 lg:px-4 2xl:px-40 py-8 ">
        <LogInForm/>
        <RegisterForm/>




      </div>
        <Footer2/>
    </div>
  )
}
