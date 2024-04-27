"use client";
import Breadcrumb from "@/components/Breadcrumb";
import Card from "@/components/Card";
import React from "react";
import { usePathname } from "next/navigation";
const page = () => {
  const currentRoute = usePathname();
  return (
    <div className="overflow-auto min-h-[30rem] md:min-h-[20rem] lg:min-h-[1/3] xl:min-h-[1/3] 2xl:min-h-[1/3]">
      <div className="bg-slate-50 p-3 rounded-t-lg">
        <Breadcrumb currentRoute={currentRoute} />
      </div>
      <hr />
      <Card />
    </div>
  );
};

export default page;
