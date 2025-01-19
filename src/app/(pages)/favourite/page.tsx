'use client';
import { useContext } from "react";
import { FavoriteContext } from "@/app/context/favContext";
import Banner from "@/components/banner";
import { MdDelete } from "react-icons/md";  // Import delete icon
import Image from "next/image";
import ActionLink from "@/components/actionLink";
import Header from "@/components/header";
import Link from "next/link";

export default function FavouritesPage() {
  const { favorites, removeFromFavorites } = useContext(FavoriteContext); // Access the favorites list and remove function

  return (
    <div  className="text-black font-poppins bg-white">
      <Header/>
      <Banner title="Favourites" />

      <div className="w-full max-w-[1536px] mx-auto h-auto">
        {favorites.length === 0 ? (
          <div className="p-5 sm:p-10 flex items-center justify-center gap-5">
          <p className="text-center text-lg sm:text-xl font-medium">
            Your favourite list is empty!
          </p>
          <ActionLink name="Check Now" href="/shop" />
        </div>
        ) : (
          <div className="px-2 sm:px-12 lg:px-[100px] py-6 sm:py-8 lg:py-[70px] flex flex-col xl:flex-row justify-between items-start gap-6 lg:gap-2">
            {/* Favorites Table Section */}
            <div className="w-full ">
              <table className="w-full ">
                <thead>
                  <tr className="bg-[#FFF9E5] h-[55px]">
                    <th className="text-sm sm:text-lg font-medium px-4 lg:px-4 sm:py-2">Product</th>
                    <th className="text-sm sm:text-lg font-medium px-4 lg:px-4 py-2 ">Price</th>
                    <th className="text-sm sm:text-lg  font-medium px-4 lg:px-4 py-2">Delete</th>
                    <th className="text-sm sm:text-lg  font-medium px-4 lg:px-4 py-2">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {favorites.map((item) => (
                    <tr className="w-full h-[106px]" key={item._id}>
                      <td className="flex sm:flex-row flex-col items-center justify-start gap-4 px-4 py-4">
                        <div className="h-[60px] w-[60px] sm:h-[106px] sm:w-[106px] rounded-[10px] overflow-hidden">
                          <Image
                            src={item.image}
                            width={112}
                            height={92}
                            alt={item.name}
                            className="object-cover w-full h-full"
                          />
                        </div>
                        <p className="text-base sm:text-lg text-[#9F9F9F]">{item.name}</p>
                      </td>
                      <td className="text-base sm:text-lg md:text-xl text-[#9F9F9F]">${item.price}</td>
                      <td className="text-center">
                        <button
                          onClick={() => removeFromFavorites(item._id)} // Remove from favorites
                          className="text-xl text-[#FBEBB5]"
                        >
                          <MdDelete className="text-2xl sm:text-3xl"/>
                        </button>

                      </td>
                      <td>
                       <Link href={`/shop/${item._id}`}>Shop Now</Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
