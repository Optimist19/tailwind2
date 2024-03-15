import { IoIosCall } from "react-icons/io";
import { IoMail } from "react-icons/io5";
{/* <IoMail /> */}

function FirstNav() {
  return (
    <nav className="bg-black text-white py-3 w-full">
      <ul className="flex items-center justify-between px-3">
        <li className="flex items-center gap-2">
          <IoIosCall className="text-yellow-600"/>
          <p className="text-[10px] sm:text-[15px]">Call: +098 87656776543</p>
        </li>
        <li className="flex items-center gap-2">
          <IoMail className="text-yellow-600"/>
          <p className="text-[10px] sm:text-[15px]">Email: mail@domain.com</p>
        </li>
      </ul>
    </nav>
  );
}

export default FirstNav;
