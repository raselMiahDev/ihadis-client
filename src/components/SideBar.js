import { GoHome } from "react-icons/go";
import { FiBookOpen } from "react-icons/fi";
import { TbBooks } from "react-icons/tb";
import { IoBookmarkOutline } from "react-icons/io5";
import { RxDashboard } from "react-icons/rx";
import { IoPaperPlaneOutline } from "react-icons/io5";
import Link from "next/link";

const SideBar = () => {
  return (
    <div className="pt-10">
      <ul>
        <li className="pb-7">
          <Link href="/">
            <GoHome size={25} className="hover:text-green-600 text-slate-600" />
          </Link>
        </li>
        <li className="pb-7">
          <Link href="/">
            <TbBooks
              size={25}
              className="hover:text-green-600 text-slate-600"
            />
          </Link>
        </li>
        <li className="pb-7">
          <Link href="/">
            <FiBookOpen
              size={25}
              className="hover:text-green-600 text-slate-600"
            />
          </Link>
        </li>
        <li className="pb-7">
          <Link href="/">
            <IoBookmarkOutline
              size={25}
              className="hover:text-green-600 text-slate-600"
            />
          </Link>
        </li>
        <li className="pb-7">
          <Link href="/">
            <RxDashboard
              size={25}
              className="hover:text-green-600 text-slate-600"
            />
          </Link>
        </li>
        <li className="pb-7">
          <Link href="/">
            <IoPaperPlaneOutline
              size={25}
              className="hover:text-green-600 text-slate-600"
            />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
