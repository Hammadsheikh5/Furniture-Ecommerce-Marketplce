'use client'

import Link from "next/link";
import React, { useState } from "react";

export default function LogInForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault(); // Prevent page reload

    console.log('Logging in with:', { username, password, rememberMe });
    // Handle login logic here (e.g., authentication API call)

  };

  return (
    <div className="w-full md:w-1/2 px-8 lg:px-10 2xl:px-24 py-6">
      <h2 className="text-2xl md:text-3xl xl:text-4xl font-semibold  md:my-3 xl:my-6">
        Log In
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6 xl:space-y-10">
        {/* Username or email address */}
        <div>
          <label className="block my-2 xl:my-5">
            Username or email address
          </label>
          <input
          required
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full h-[45px] md:[60px] xl:h-[75px] border border-[#9F9F9F] p-2 rounded mt-5 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        {/* Password */}
        <div>
          <label className="block my-2 xl:my-5">Password</label>
          <input
          required
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full h-[45px] md:[60px] xl:h-[75px] border border-[#9F9F9F] p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 mt-5"
          />
        </div>
        {/* Remember me */}
        <div className="flex items-center">
          <input
            type="checkbox"
            checked={rememberMe}
            onChange={(e) => setRememberMe(e.target.checked)}
            className="mr-4 text-[#9F9F9F] w-[27px] h-[30px]"
            id="rememberMe"
          />
          <label htmlFor="rememberMe">Remember me</label>
        </div>

        {/* Login/Lost Your Password */}
        <div className="flex xl:items-center flex-col xl:flex-row md:justify-between">
          <div className="flex justify-center items-center">
            <button
              type="submit"
              className="py-1 sm:py-2 md:py-3 xl:py-4 px-20 text-base lg:text-xl border border-[#9F9F9F] rounded-xl hover:bg-[#FBEBB5]"
            >
              Login
            </button>
          </div>
          <Link href="#" className="hover:underline my-4">
            Lost Your Password?
          </Link>
        </div>
      </form>
    </div>
  );
}
