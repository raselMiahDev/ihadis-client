import React from "react";
import { GiBookAura } from "react-icons/gi";
import { VscBook } from "react-icons/vsc";
import { GiCartwheel } from "react-icons/gi";
const Card = ({ data }) => {
  console.log(data);
  return (
    <div>
      {data.length > 0
        ? data.map((item) => {
            return (
              <div key={item?.["_id"]}>
                <div className="flex items-center justify-between px-3 py-5 rounded-b-lg">
                  <div>
                    <div className="flex items-center gap-4 ">
                      <GiBookAura size={40} color="green" />
                      <div>
                        <h1 className="text-xl pb-1">{item?.["book"].title}</h1>
                        <p className="text-xs text-slate-700">
                          {item?.["book"].number_of_hadis}
                        </p>
                      </div>
                    </div>
                  </div>
                  <h1 className="text-xl font-bold">
                    {item?.["book"].title_ar}
                  </h1>
                </div>

                <div className="flex items-center gap-4 bg-white px-3 py-4 my-4 rounded-lg">
                  <h1 className="bg-green-700 px-3 py-1 rounded-lg text-white">
                    {item?.["chapter"].chapter_id}
                  </h1>
                  <h1>{item?.["chapter"].title}</h1>
                </div>

                <div className=" bg-white px-3 py-4 my-4 rounded-lg">
                  <div className="flex items-center gap-3">
                    <VscBook color="green" size={25} />
                    <h1>{item?.["chapter"].hadis_range}</h1>
                  </div>
                  <h1 className="py-4 text-sm font-semibold">
                    {item?.["hnarrator"]}
                  </h1>
                  <hr />
                  <h1 className="py-4 text-sm">
                    আল্লাহ্‌র রসূল (সাল্লাল্লাহু 'আলাইহি ওয়া সাল্লাম)- এর প্রতি
                    কীভাবে ওয়াহী [১] শুরু হয়েছিল।
                  </h1>
                </div>

                <div className=" bg-white px-3 py-4 my-4 rounded-lg">
                  <div className="flex items-center gap-3">
                    <GiCartwheel color="bg-green-400" size={20} />
                    <h1>১</h1>
                  </div>
                  <h1 className="py-4 text-xl">{item?.["ar"]}</h1>

                  <h1 className="py-4 text-xl">{item?.["bn"]}</h1>
                </div>
              </div>
            );
          })
        : "Loading..."}
    </div>
  );
};

export default Card;
