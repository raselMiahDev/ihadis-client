import Link from "next/link";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const page = () => {
  return (
    <div className="flex justify-center items-center h-[90vh] bg-gray-100">
      <Link
        href="/bukhari"
        className="bg-green-700 px-16 py-3 hover:bg-transparent border hover:border-green-800 hover:text-green-800 transition hover:duration-300 text-white rounded-lg flex gap-3 items-center text-lg shadow-md"
      >
        <span>হাদিস পড়ি</span>
        <span>
          <FaArrowRightLong />
        </span>
      </Link>
    </div>
  );
};

export default page;
