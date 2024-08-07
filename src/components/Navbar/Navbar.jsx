import { useState } from "react";
import { BiMenu, BiXCircle } from "react-icons/bi";

const Navbar = () => {
  const [active, setActive] = useState(true);
  return (
    <div>
      <nav className="bg-white px-2 sm:px-2 py-2.5">
        <div className="container flex flex-wrap justify-between items-center mx-auto">
          <a href="" className="text-xl font-bold line-through">
            ED
          </a>
          <div className="flex md:order-2 md:hidden">
            <button type="button" onClick={() => setActive(!active)}>
              {active ? <BiMenu size={30} /> : <BiXCircle size={30} />}
            </button>
          </div>
          <div
            className={`${
              active ? "hidden " : ""
            }justify-between items-center w-full md:flex md:w-auto md:order-1`}
          >
            <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 text-2xl">
              <li className="py-2 md:py-0">
                <a
                  href=""
                  className="py-4 pr-6 pl-0 hover:opacity-80 transition-all"
                >
                  Explore
                </a>
              </li>
              <li className="py-2 md:py-0">
                <a
                  href=""
                  className="py-4 pr-6 pl-0 hover:opacity-80 transition-all"
                >
                  Resources
                </a>
              </li>
              <li className="py-2 md:py-0">
                <a
                  href=""
                  className="py-4 pr-6 pl-0 hover:opacity-80 transition-all"
                >
                  Creators
                </a>
              </li>
              <li className="py-2 md:py-0">
                <a
                  href=""
                  className="py-4 pr-6 pl-0 hover:opacity-80 transition-all"
                >
                  Button
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
