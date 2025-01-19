import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { MdKeyboardArrowRight } from 'react-icons/md'

export default function Banner(props:{title:string}) {
  return (
<div className='font-poppins'>
            <div
                className="group78 w-full max-w-[1536px] mx-auto bg-cover bg-center flex flex-col items-center justify-center h-[130px] sm:h-[200px] md:h-[250px] lg:h-[316px] text-black"
                style={{ backgroundImage: "url('/background/bg.png')" }}
            >
                <div className='group55 flex flex-col items-center'>
                    <Image
                        src="/background/logo.png" // Path relative to the `public` folder
                        width={60}
                        height={40}
                        alt="logo"
                        className=""
                    />
                    <p className='text-[18px] sm:text-[30px] md:text-[36px] lg:text-[48px] font-medium'>
                    {props.title}
                    </p>
                </div>
                <div className='group56 flex items-center gap-[6px] text-sm  sm:text-lg'>
                    <p className='font-medium'><Link href={"/"}>Home</Link></p>
                    <MdKeyboardArrowRight className='text-base sm:text-3xl' />
                    <p className='font-light'>{props.title}</p>
                </div>
            </div>
        </div>
  )
}
