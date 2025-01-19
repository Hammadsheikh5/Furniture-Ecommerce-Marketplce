import { FaUser } from "react-icons/fa";
import { FaCalendar } from "react-icons/fa";
import { FaTag } from "react-icons/fa6";
import { LuSearch } from "react-icons/lu";
import Image from "next/image";
import Banner from "@/components/banner";
import Header from "@/components/header";

const page = () => {
  return (
    <div  className="bg-white w-full max-w-[1536px] mx-auto">

       <Header/>
      <Banner title="Blog" />
      

      {/* Blog Content*/}

      <div className=" w-full h-auto flex flex-col md:flex-row p-5 lg:p-20 gap-8">
        {/* Left side */}

        <div className="w-full lg:px-12 space-y-6">
          {/* FIrst Blog */}
          <Image
            src="/Assets/Image 26.jpg"
            alt="Image"
            width={817}
            height={400}
            className="w-auto h-auto  lg:h-[500px] rounded-xl"
          />
          <div className="flex items-center text-gray-500 gap-4">
            <span>
              <FaUser />
            </span>
            <p>Admin</p>
            <span>
              <FaCalendar />
            </span>
            <p>14 Oct 2022</p>
            <span>
              <FaTag />
            </span>
            <p>Wood</p>
          </div>
          <h1 className="text-3xl font-bold mt-4">
            Going all-in with millenial design
          </h1>
          <p className="text-gray-600 mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
            quos culpa ut nobis molestiae alias suscipit eos, laborum quia cum
            libero vel quibusdam rem consequuntur facilis! Expedita ab illum
            reiciendis. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Nulla consectetur enim vel urna aliquam, id euismod eros
            pellentesque. Cras volutpat turpis ac nisl iaculis, non faucibus
            erat volutpat. Aliquam erat volutpat.
          </p>
          <p className="text-[24px] underline underline-offset-[16px] mb-44 font-medium py-[10px]">
            Read More
          </p>

          {/* Second Blog */}

          <Image
            src="/Assets/Image 27.jpg"
            alt="Image"
            width={817}
            height={400}
            className="w-auto h-auto md:w-full  lg:h-[500px] rounded-xl"
          />
          <div className="flex items-center text-gray-500 gap-4">
            <span>
              <FaUser />
            </span>
            <p>Admin</p>
            <span>
              <FaCalendar />
            </span>
            <p>14 Oct 2022</p>
            <span>
              <FaTag />
            </span>
            <p>Handmade</p>
          </div>
          <h1 className="text-3xl font-bold mt-4">
            Handmade pieces that took time to made
          </h1>
          <p className="text-gray-600 mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
            quos culpa ut nobis molestiae alias suscipit eos, laborum quia cum
            libero vel quibusdam rem consequuntur facilis! Expedita ab illum
            reiciendis. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Nulla consectetur enim vel urna aliquam, id euismod eros
            pellentesque. Cras volutpat turpis ac nisl iaculis, non faucibus
            erat volutpat. Aliquam erat volutpat.
          </p>
          <p className="text-[24px] underline underline-offset-[16px] mb-44 font-medium py-[10px]">
            Read More
          </p>

          {/*Third Blog */}

          <Image
            src="/Assets/Image 28.jpg"
            alt="Image"
            width={817}
            height={500}
            className="w-auto h-auto  lg:h-[500px] rounded-xl"
          />
          <div className="flex items-center text-gray-500 gap-4">
            <span>
              <FaUser />
            </span>
            <p>Admin</p>
            <span>
              <FaCalendar />
            </span>
            <p>14 Oct 2022</p>
            <span>
              <FaTag />
            </span>
            <p>Wood</p>
          </div>
          <h1 className="text-3xl font-bold mt-4">
            Exploring new ways of decorating
          </h1>
          <p className="text-gray-600 mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
            quos culpa ut nobis molestiae alias suscipit eos, laborum quia cum
            libero vel quibusdam rem consequuntur facilis! Expedita ab illum
            reiciendis. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Nulla consectetur enim vel urna aliquam, id euismod eros
            pellentesque. Cras volutpat turpis ac nisl iaculis, non faucibus
            erat volutpat. Aliquam erat volutpat.
          </p>
          <button className="text-[24px] underline underline-offset-[16px] mb-44 font-medium py-[10px]">
            Read More
          </button>
        </div>
        {/* Rigt side */}

        <div className="w-full  flex flex-col px-5 space-y-6">
          {/* Search and Categories */}

          <div className=" flex flex-col gap-10 w-full md:w-[393px] md:h-[537px]  ">
            <div className="relative w-full">
              <input
                type="text"
                className="w-full h-auto md:h-[58px] pl-4 pr-12 rounded-2xl border-2 border-[#9F9F9F] focus:outline-none"
              />
              <LuSearch className="absolute right-4 top-1/2 transform -translate-y-1/2 text-black text-2xl" />
            </div>
            <div className="text-[#9F9F9F] px-16  flex flex-col gap-10">
              <h1 className="font-normal text-black text-2xl">Categories</h1>

              <div className="flex justify-between ">
                <p className=" space-y-9">Crafts</p> <p>2</p>
              </div>
              <div className="flex justify-between ">
                <p className=" space-y-9">Design</p> <p>8</p>
              </div>
              <div className="flex justify-between ">
                <p className=" space-y-9">Handmade</p> <p>7</p>
              </div>
              <div className="flex justify-between ">
                <p className=" space-y-9">Interior</p> <p>1</p>
              </div>
              <div className="flex justify-between ">
                <p className=" space-y-9">Wood</p> <p>6</p>
              </div>
            </div>
          </div>

          {/*  Recent posts*/}
          <div className="w-full flex flex-col md:w-[393px] md:px-20  space-y-9">
            <h1 className="text-2xl font-bold mb-4">Recent Posts</h1>
            {/*  First Post */}
            <div className="flex items-center space-x-4 ">
              <Image
                src="/Assets/Image 29.jpg"
                alt="Image"
                width={80}
                height={80}
                className="h-[80px] w-[80px] rounded-xl"
              />
              <div className="space-y-2">
                <h2 className="text-black ">
                  Going all-in with millenial design
                </h2>
                <p className="text-[#9F9F9F] text-sm">03 Aug 2022</p>
              </div>
            </div>
            {/*  Second Post */}
            <div className="flex items-center space-x-4">
              <Image
                src="/Assets/Image 30.jpg"
                alt="Image"
                width={80}
                height={80}
                className="h-[80px] w-[80px] rounded-xl"
              />
              <div className="space-y-2">
                <h2 className="text-black ">
                  Exploring new ways of decorating
                </h2>
                <p className="text-[#9F9F9F] text-sm">03 Aug 2022</p>
              </div>
            </div>
            {/*  Third Post */}

            <div className="flex items-center space-x-4">
              <Image
                src="/Assets/Image 31.jpg"
                alt="Image"
                width={80}
                height={80}
                className="h-[80px] w-[80px] rounded-xl"
              />
              <div className="space-y-2">
                <h2 className="text-black ">
                  Hand made pieces that took time to make
                </h2>
                <p className="text-[#9F9F9F] text-sm">03 Aug 2022</p>
              </div>
            </div>
            {/*  Fourth Post */}

            <div className="flex items-center space-x-4">
              <Image
                src="/Assets/Image 32.jpg"
                alt="Image"
                width={80}
                height={80}
                className="h-[80px] w-[80px] rounded-xl"
              />
              <div className="space-y-2">
                <h2 className="text-black ">Modern home in Milan</h2>
                <p className="text-[#9F9F9F] text-sm">03 Aug 2022</p>
              </div>
            </div>
            {/*  Fifth Post */}

            <div className="flex items-center space-x-6">
              <Image
                src="/Assets/Image 33.jpg"
                alt="Image"
                width={80}
                height={80}
                className="h-[80px] w-[80px] md:w-[125px] rounded-xl"
              />
              <div className="space-y-2">
                <h2 className="text-black">Colorful office redesign 5</h2>
                <p className="text-[#9F9F9F] text-sm">03 Aug 2022</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Buttons */}

      <div className="h-[60px] w-full flex justify-center gap-8 mt-6 items-center ">
        <button className="w-[60px] h-[60px] bg-[#FBEBB5] flex items-center justify-center ">
          1
        </button>
        <button className="w-[60px] h-[60px] bg-[#FFF9E5] flex items-center justify-center">
          2
        </button>
        <button className="w-[60px] h-[60px] bg-[#FFF9E5] flex items-center justify-center">
          3
        </button>
        <button className="w-[60px] h-[60px] bg-[#FFF9E5] flex items-center justify-center">
          Next
        </button>
      </div>
    </div>
  );
};

export default page;
