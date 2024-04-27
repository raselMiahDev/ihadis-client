"use client";
import Breadcrumb from "@/components/Breadcrumb";
import Card from "@/components/Card";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
const page = () => {
  const [hadiths, setHadiths] = useState([]);

  useEffect(() => {
    // get hadiths from api
    const fetchHadith = async () => {
      try {
        const response = await fetch(
          "https://ihadis-server.onrender.com/hadith"
        );
        const data = await response.json();
        setHadiths(data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchHadith();
  }, []);
  const currentRoute = usePathname();
  return (
    <div className="overflow-auto h-[500px]">
      <div className="bg-slate-50 p-3 rounded-t-lg">
        <Breadcrumb currentRoute={currentRoute} />
      </div>
      <hr />
      <Card data={hadiths} />
    </div>
  );
};

export default page;
