const Settings = () => {
  return (
    <div>
      {/* Arabic front  */}
      <div className="mb-3">
        <label className="block text-sm font-medium mb-2 dark:text-white">
          আরবি ফন্ট সিলেক্ট করুন
        </label>
        <select className="py-3 px-4 pe-9 block w-full border rounded-lg text-sm focus:border focus:ring-slate-200 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600">
          <option selected="KFGQ">KFGQ</option>
          <option>Me Quran</option>
          <option>Al Mushaf</option>
          <option>Amiri</option>
          <option>Arial</option>
        </select>
      </div>
      {/* Arabic front  */}

      {/* Arabic front size start  */}
      <div className="mb-3">
        <label className="block text-sm font-medium mb-2 dark:text-white">
          এরাবিক ফন্ট সাইজ
        </label>
        <label for="basic-range-slider-usage" className="sr-only">
          এরাবিক ফন্ট সাইজ
        </label>
        <input
          type="range"
          className="w-full bg-transparent cursor-pointer appearance-none disabled:opacity-50 disabled:pointer-events-none focus:outline-none
            [&::-webkit-slider-thumb]:w-2.5
            [&::-webkit-slider-thumb]:h-2.5
            [&::-webkit-slider-thumb]:-mt-0.5
            [&::-webkit-slider-thumb]:appearance-none
            [&::-webkit-slider-thumb]:bg-white
            [&::-webkit-slider-thumb]:shadow-[0_0_0_4px_rgba(37,99,235,1)]
            [&::-webkit-slider-thumb]:rounded-full
            [&::-webkit-slider-thumb]:transition-all
            [&::-webkit-slider-thumb]:duration-150
            [&::-webkit-slider-thumb]:ease-in-out
            [&::-webkit-slider-thumb]:dark:bg-neutral-700

            [&::-moz-range-thumb]:w-2.5
            [&::-moz-range-thumb]:h-2.5
            [&::-moz-range-thumb]:appearance-none
            [&::-moz-range-thumb]:bg-white
            [&::-moz-range-thumb]:border-4
            [&::-moz-range-thumb]:border-blue-600
            [&::-moz-range-thumb]:rounded-full
            [&::-moz-range-thumb]:transition-all
            [&::-moz-range-thumb]:duration-150
            [&::-moz-range-thumb]:ease-in-out

            [&::-webkit-slider-runnable-track]:w-full
            [&::-webkit-slider-runnable-track]:h-2
            [&::-webkit-slider-runnable-track]:bg-gray-100
            [&::-webkit-slider-runnable-track]:rounded-full
            [&::-webkit-slider-runnable-track]:dark:bg-neutral-700

            [&::-moz-range-track]:w-full
            [&::-moz-range-track]:h-2
            [&::-moz-range-track]:bg-gray-100
            [&::-moz-range-track]:rounded-full"
          id="basic-range-slider-usage"
        />
      </div>
      {/* Arabic front size end  */}

      {/* Arabic front size start  */}
      <div className="mb-3">
        <label className="block text-sm font-medium mb-2 dark:text-white">
          এরাবিক ফন্ট সাইজ
        </label>
        <label for="basic-range-slider-usage" className="sr-only">
          এরাবিক ফন্ট সাইজ
        </label>
        <input
          type="range"
          className="w-full bg-transparent cursor-pointer appearance-none disabled:opacity-50 disabled:pointer-events-none focus:outline-none
            [&::-webkit-slider-thumb]:w-2.5
            [&::-webkit-slider-thumb]:h-2.5
            [&::-webkit-slider-thumb]:-mt-0.5
            [&::-webkit-slider-thumb]:appearance-none
            [&::-webkit-slider-thumb]:bg-white
            [&::-webkit-slider-thumb]:shadow-[0_0_0_4px_rgba(37,99,235,1)]
            [&::-webkit-slider-thumb]:rounded-full
            [&::-webkit-slider-thumb]:transition-all
            [&::-webkit-slider-thumb]:duration-150
            [&::-webkit-slider-thumb]:ease-in-out
            [&::-webkit-slider-thumb]:dark:bg-neutral-700

            [&::-moz-range-thumb]:w-2.5
            [&::-moz-range-thumb]:h-2.5
            [&::-moz-range-thumb]:appearance-none
            [&::-moz-range-thumb]:bg-white
            [&::-moz-range-thumb]:border-4
            [&::-moz-range-thumb]:border-blue-600
            [&::-moz-range-thumb]:rounded-full
            [&::-moz-range-thumb]:transition-all
            [&::-moz-range-thumb]:duration-150
            [&::-moz-range-thumb]:ease-in-out

            [&::-webkit-slider-runnable-track]:w-full
            [&::-webkit-slider-runnable-track]:h-2
            [&::-webkit-slider-runnable-track]:bg-gray-100
            [&::-webkit-slider-runnable-track]:rounded-full
            [&::-webkit-slider-runnable-track]:dark:bg-neutral-700

            [&::-moz-range-track]:w-full
            [&::-moz-range-track]:h-2
            [&::-moz-range-track]:bg-gray-100
            [&::-moz-range-track]:rounded-full"
          id="basic-range-slider-usage"
        />
      </div>
      {/* Arabic front size end  */}

      {/* Night mood switch start  */}
      <div className="flex justify-between mb-3">
        <h1>নাইট মোড</h1>
        <div>
          <input
            type="checkbox"
            id="hs-basic-usage"
            className="relative w-[3.25rem] h-7 p-px bg-gray-100 border-transparent text-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:ring-blue-600 disabled:opacity-50 disabled:pointer-events-none checked:bg-none checked:text-blue-600 checked:border-blue-600 focus:checked:border-blue-600 dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-600 before:inline-block before:size-6 before:bg-white checked:before:bg-blue-200 before:translate-x-0 checked:before:translate-x-full before:rounded-full before:shadow before:transform before:ring-0 before:transition before:ease-in-out before:duration-200 dark:before:bg-neutral-400 dark:checked:before:bg-blue-200"
          />
          <label for="hs-basic-usage" className="sr-only">
            switch
          </label>
        </div>
      </div>
      {/* Night mood switch end  */}

      <div className="bg-green-600 rounded-lg p-3">
        <h1 className="text-white font-bold mb-3">
          আপনি সদাকায়ে জারিয়াতে অংশ নিন{" "}
        </h1>
        <p className="text-xs text-slate-200">
          আপনার দান, সেটা ছোট হলেও, ইসলামের বার্তা ও হাদিস প্রাচারে সহায়তা করবে
          । আমাদের কাজের অংশ হতে এবং এই গুরুত্বপূর্ন কাজে সাহায্য করতে আমাদের
          প্রজেক্টে হাদিয়া দিন। ইনশাআল্লাহ এটি সাদাকায়ে জারিয়াহ হিসেবে আল্লাহ্‌র
          কাছে কবুল হবে ।
        </p>

        <div className="w-full text-center pt-3">
          <button className="bg-gray-100 text-green-700 px-5 py-2 text-sm rounded-md text-center">
            সাপোর্ট করুন
          </button>
        </div>
      </div>
    </div>
  );
};

export default Settings;
