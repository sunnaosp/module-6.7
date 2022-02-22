import { AiOutlineBell, AiOutlineUser } from "react-icons/ai";
import { GiAstronautHelmet } from "react-icons/gi";
import { FiSearch } from "react-icons/fi";
import Link from "next/link";

export default function Layout({ children }) {
  return (
    <div>
      <div className="px-2 md:px-24 bg-black text-white flex justify-between h-16">
        <Link href="/">
          <a className="text-white uppercase text-2xl flex align-baseline px-10 my-auto">
            <GiAstronautHelmet className="inline text-4xl mr-4" /> Sunna
            Projects
          </a>
        </Link>

        <div className="flex items-center text-2xl">
          <AiOutlineBell className="mr-2 cursor-pointer hover:text-red-600" />
          <AiOutlineUser className="mr-2 cursor-pointer hover:text-red-600" />
        </div>
      </div>

      <div className="px-2 md:px-24 bg-white flex border-b border-black">
        <Link href="/">
          <a className="mr-10 text-xl mt-5 px-5 border-b-2 border-transparent hover:border-black">
            Home
          </a>
        </Link>
      </div>
      {children}
      <div className="bg-black text-white text-xl py-10 px-24 flex flex-col">
        <div>
          <Link href="/">
            <a className="text-white uppercase text-2xl flex align-baseline px-10 my-auto">
              <GiAstronautHelmet className="inline text-4xl mr-4" /> Sunna
              Projects
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
