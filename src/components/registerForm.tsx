'use client'

import React, { useState } from "react";

export default function RegisterForm() {
  const [email, setEmail] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault(); // Prevent page reload

    // console.log('Registering with email:', email);
    // Handle registration logic here (e.g., sending data to an API)
  };

  return (
    <div className="w-full md:w-1/2 px-8 lg:px-10 2xl:px-24 py-6">
      <h2 className="text-2xl md:text-3xl xl:text-4xl font-semibold md:my-3 xl:my-6">
        Register
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6 xl:space-y-10">
        {/* Email address */}
        <div>
          <label className="block my-2 xl:my-5">Email address</label>
          <input
            required
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full h-[45px] md:[60px] xl:h-[75px] border border-[#9F9F9F] p-2 rounded mt-5 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        {/* Email Details */}
        <p className="my-5 text-sm">
          A link to set a new password will be sent to your email address.
        </p>
        <p className="my-4 text-sm">
          Your personal data will be used to support your experience throughout
          this website, to manage access to your account, and for other purposes
          described in our
          <span className="font-bold"> privacy policy</span>.
        </p>
        {/* Button */}
        <div className="flex justify-center items-center">
          <button
            type="submit"
            className="py-1 sm:py-2 md:py-3 xl:py-4 px-20 text-base lg:text-xl border border-[#9F9F9F] rounded-xl hover:bg-[#FBEBB5]"
          >
            Register
          </button>
        </div>
      </form>
    </div>
  );
}
