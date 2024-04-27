import PolygonShape from "./PolygonShape";
import { useState, useEffect } from "react";

const TableOfContents = () => {
  const [books, setBooks] = useState([]);
  const [capters, setCapters] = useState([]);

  useEffect(() => {
    // get books from api
    const fetchBooks = async () => {
      try {
        const response = await fetch(
          "https://ihadis-server.onrender.com/books"
        );
        const data = await response.json();
        setBooks(data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    // get chapter from api
    const fetchCapter = async () => {
      try {
        const response = await fetch(
          "https://ihadis-server.onrender.com/chapter"
        );
        const data = await response.json();
        setCapters(data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchBooks();
    fetchCapter();
  }, []);

  return (
    <div className="bg-white rounded-2xl">
      <nav className="flex space-x-1" aria-label="Tabs" role="tablist">
        <button
          type="button"
          className="hs-tab-active:bg-green-700 hs-tab-active:text-white hs-tab-active:hover:text-white hs-tab-active:dark:text-white py-3 px-4 text-center basis-0 grow inline-flex justify-center items-center bg-transparent text-sm font-medium text-gray-700 rounded-tl-2xl disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:hover:text-neutral-300 active"
          id="equal-width-elements-item-1"
          data-hs-tab="#equal-width-elements-1"
          aria-controls="equal-width-elements-1"
          role="tab"
        >
          বই
        </button>
        <button
          type="button"
          className="hs-tab-active:bg-green-700 hs-tab-active:text-white hs-tab-active:hover:text-white hs-tab-active:dark:text-white py-3 px-4 text-center basis-0 grow inline-flex justify-center items-center  bg-transparent text-sm font-medium text-gray-700  rounded-tr-2xl disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:hover:text-neutral-300"
          id="equal-width-elements-item-2"
          data-hs-tab="#equal-width-elements-2"
          aria-controls="equal-width-elements-2"
          role="tab"
        >
          অধ্যায়
        </button>
      </nav>
      <hr />
      {/* Input Filter  */}
      <div class="relative py-5 px-3">
        <input
          type="text"
          id="hs-leading-icon"
          class="bg-slate-100 p-2 ps-7 md:block w-full rounded-lg text-sm focus:z-10  focus:outline-none  disabled:opacity-50  dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
          placeholder="Search for filter"
        />
        <div class="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-4">
          <svg
            className="flex-shrink-0 size-4 text-gray-400 dark:text-neutral-500"
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx={11} cy={11} r={8} />
            <path d="m21 21-4.3-4.3" />
          </svg>
        </div>
      </div>
      {/* Tab item start  */}
      <div className="px-3">
        {/* Tab 1 Start  */}
        <div
          id="equal-width-elements-1"
          role="tabpanel"
          aria-labelledby="equal-width-elements-item-1"
        >
          <div className="overflow-auto h-96 md:max-h-[400px] lg:max-h-[700px]">
            {books.length > 0
              ? books.map((book) => {
                  return (
                    <div
                      key={book?.["_id"]}
                      className="flex items-center gap-4 hover:bg-green-100 transition duration-200 p-3 rounded-lg cursor-pointer"
                    >
                      <PolygonShape text={book?.["abvr_code"]} />
                      <div>
                        <h1 className="text-xs pb-1">{book?.["title"]}</h1>
                        <p className="text-xs text-slate-400">
                          সর্বমোট হাদিস - {book?.["number_of_hadis"]}
                        </p>
                      </div>
                    </div>
                  );
                })
              : "Loading"}
          </div>
        </div>
        {/* Tab 1 end  */}

        {/* Tab 2 Start  */}
        <div
          id="equal-width-elements-2"
          className="hidden"
          role="tabpanel"
          aria-labelledby="equal-width-elements-item-2"
        >
          <div className="overflow-auto h-96 md:max-h-[400px] lg:max-h-[700px]">
            {capters.length > 0
              ? capters.map((capter) => {
                  return (
                    <div
                      key={capter?.["_id"]}
                      className="flex items-center gap-4 hover:bg-green-100 transition duration-200 p-3 rounded-lg cursor-pointer"
                    >
                      <PolygonShape text={capter?.["number"]} />
                      <div>
                        <h1 className="text-xs pb-1">{capter?.["title"]}</h1>
                        <p className="text-xs text-slate-400">
                          হাদিস রেঞ্জ - {capter?.["hadis_range"]}
                        </p>
                      </div>
                    </div>
                  );
                })
              : "Loading"}
          </div>
        </div>
        {/* Tab 2 end  */}
      </div>
      {/* Tab item end  */}
    </div>
  );
};

export default TableOfContents;
