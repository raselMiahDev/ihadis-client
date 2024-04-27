"use client";
import SideBar from "@/components/SideBar";
import TableOfContents from "@/components/TableOfContents";
import { CgMenuGridR } from "react-icons/cg";
import { TfiMenuAlt } from "react-icons/tfi";
import { useState } from "react";
const layout = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const handleVisivility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="grid grid-cols-12">
      <div className="col-span-0 md:col-span-1 pl-5 hidden md:block">
        <SideBar />
      </div>

      <div className="col-span-12 md:col-span-11 bg-slate-100 rounded-tl-2xl">
        <div className="grid grid-cols-12 gap-5 m-5">
          <div className="col-span-12 md:col-span-4 block md:hidden">
            <div
              onClick={handleVisivility}
              className=" bg-white p-3 rounded-lg cursor-pointer"
            >
              {isVisible ? (
                <div className="flex justify-center">
                  <TfiMenuAlt size={25} />
                </div>
              ) : (
                <div className="flex justify-center">
                  <CgMenuGridR size={25} />
                </div>
              )}
            </div>
          </div>
          {isVisible && (
            <div className="col-span-12 md:col-span-4 block md:hidden ">
              <TableOfContents />
            </div>
          )}
          <div className="col-span-12 md:col-span-4 hidden md:block">
            <TableOfContents />
          </div>

          <div className="col-span-12 md:col-span-8">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default layout;
