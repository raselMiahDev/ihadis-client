import React from "react";
import { GiBookAura } from "react-icons/gi";
import { VscBook } from "react-icons/vsc";
import { GiCartwheel } from "react-icons/gi";
const Card = () => {
  return (
    <div>
      <div className="flex items-center justify-between px-3 py-5 rounded-b-lg">
        <div>
          <div className="flex items-center gap-4 ">
            <GiBookAura size={40} color="green" />
            <div>
              <h1 className="text-xl pb-1">সহিহ বুখারী</h1>
              <p className="text-xs text-slate-700">সর্বমোট হাদিস - ৭৫৬৩</p>
            </div>
          </div>
        </div>
        <h1 className="text-xl font-bold">صحيح البخاري</h1>
      </div>

      <div className="flex items-center gap-4 bg-white px-3 py-4 my-4 rounded-lg">
        <h1 className="bg-green-700 px-3 py-1 rounded-lg text-white">1</h1>
        <h1>ওহীর সূচনা অধ্যায়</h1>
      </div>

      <div className=" bg-white px-3 py-4 my-4 rounded-lg">
        <div className="flex items-center gap-3">
          <VscBook color="green" size={25} />
          <h1>১/১. অধ্যায়ঃ</h1>
        </div>
        <h1 className="py-4 text-sm font-semibold">
          আল্লাহ্‌র রসূল (সাল্লাল্লাহু 'আলাইহি ওয়া সাল্লাম)- এর প্রতি কীভাবে
          ওয়াহী [১] শুরু হয়েছিল।
        </h1>
        <hr />
        <h1 className="py-4 text-sm">
          আল্লাহ্‌র রসূল (সাল্লাল্লাহু 'আলাইহি ওয়া সাল্লাম)- এর প্রতি কীভাবে
          ওয়াহী [১] শুরু হয়েছিল।
        </h1>
      </div>

      <div className=" bg-white px-3 py-4 my-4 rounded-lg">
        <div className="flex items-center gap-3">
          <GiCartwheel color="bg-green-400" size={20} />
          <h1>১</h1>
        </div>
        <h1 className="py-4 text-xl">
          حَدَّثَنَا الْحُمَيْدِيُّ عَبْدُ اللَّهِ بْنُ الزُّبَيْرِ، قَالَ
          حَدَّثَنَا سُفْيَانُ، قَالَ حَدَّثَنَا يَحْيَى بْنُ سَعِيدٍ
          الأَنْصَارِيُّ، قَالَ أَخْبَرَنِي مُحَمَّدُ بْنُ إِبْرَاهِيمَ
          التَّيْمِيُّ، أَنَّهُ سَمِعَ عَلْقَمَةَ بْنَ وَقَّاصٍ اللَّيْثِيَّ،
          يَقُولُ سَمِعْتُ عُمَرَ بْنَ الْخَطَّابِ ـ رضى الله عنه ـ عَلَى
          الْمِنْبَرِ قَالَ سَمِعْتُ رَسُولَ اللَّهِ صلى الله عليه وسلم يَقُولُ
          " إِنَّمَا الأَعْمَالُ بِالنِّيَّاتِ، وَإِنَّمَا لِكُلِّ امْرِئٍ مَا
          نَوَى، فَمَنْ كَانَتْ هِجْرَتُهُ إِلَى دُنْيَا يُصِيبُهَا أَوْ إِلَى
          امْرَأَةٍ يَنْكِحُهَا فَهِجْرَتُهُ إِلَى مَا هَاجَرَ إِلَي
        </h1>

        <h1 className="py-4 text-xl">
          আমি ‘উমর ইব্‌নুল খাত্তাব (রাঃ)-কে মিম্বারের উপর দাঁড়িয়ে বলতে শুনেছিঃ
          আমি আল্লাহর রসূল (সাল্লাল্লাহু ‘আলাইহি ওয়া সাল্লাম)-কে বলতে শুনেছিঃ
          কাজ (এর প্রাপ্য হবে) নিয়ত অনুযায়ী। আর মানুষ তার নিয়ত অনুযায়ী প্রতিফল
          পাবে। তাই যার হিজরত হবে ইহকাল লাভের অথবা কোন মহিলাকে বিবাহ করার
          উদ্দেশ্যে- তবে তার হিজরত সে উদ্দেশ্যেই হবে, যে জন্যে, সে হিজরত করেছে।
          (৫৪, ২৫২৯, ৩৮৯৮, ৫০৭০, ৬৬৮৯, ৬৯৫৩; মুসলিম ২৩/৪৫ হাঃ ১৯০৭, আহমাদ ১৬৮) (
          আধুনিক প্রকাশনী- ১, ইসলামিক ফাউন্ডেশন ১)
        </h1>
      </div>
    </div>
  );
};

export default Card;
