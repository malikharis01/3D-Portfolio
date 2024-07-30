"use client"

import Image from "next/image";
import Link from "next/link";
import { Public_Sans } from 'next/font/google'
import { DM_Sans } from 'next/font/google'

const mont = Public_Sans({ subsets: ['latin'], weight: '900', style: 'normal' })
const dm = DM_Sans({ subsets: ['latin'], weight: '400', style: 'normal' })



export default function Home() {
  return (
    <main className="w-screen h-screen relative">
      <div
        className="flex items-center w-full h-full bg-cover bg-center"
        style={{ backgroundImage: "url(/main-bg.webp)" }}
      >
        <div className="pl-20 md:pl-40 pb-56 md:pb-20 flex flex-col gap-5 z-[10] max-w-[750px]">
          <div className=" space-y-2">
          <h1 className={`text-[50px] text-white font-semibold ${mont.className}`}>
          Hi, I am Haris
          <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500 animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white"> Front-End Developer</h1>
            {/* <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500">
              {" "}
              Front-End Developer
            </span> */}
          </h1>
          </div>
          <p className="text-gray-200 hidden md:block font-medium leading-6">
          I am a full-stack developer specialised in frontend and backend development for complex scalable web apps. I write about web development on my blog and regularly speak at various web conferences and meetups. Want to know how I may help your project? Check out my project case studies and resume.
          </p>
          <div className="flex-col md:flex-row hidden md:flex gap-5">
            <Link
              href="/my-skills"
              className="rounded-[20px] group relative bg-blue-500 hover:bg-blue-400 px-5 py-3 text-lg text-white max-w-[200px]"
            >
              Learn more
            </Link>
           


           
        
          </div>
        </div>
      </div>



        
    </main>
  );
}