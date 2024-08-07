import { FaArrowRight } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="border-t-4 mt-16 py-10 text-white border-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-2 md: gap- 6 text-center md:text-left">
            <div className="col-span-2">
              <a href="" className="text-5xl line-through font-bold">
                ED
              </a>
              <p className="mt-3 pr-5">
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>

            <div>
              <h2 className="font-bold text-2xl">Quick link</h2>
              <p className="mt-6">About</p>
              <p>Blog</p>
              <p>Press</p>
            </div>
            <div>
              <h2 className="font-bold text-2xl">Resource</h2>
              <p className="mt-6">Help center</p>
              <p>Community</p>
              <p>Partners</p>
            </div>
            <div className="col-span-2 md:col-span-1 flex flex-col items-center md:items-start">
              <h2 className="font-bold text-2xl">Newsletter</h2>
              <p className="mt-6">
                Sign up and receive the latest tips via email.
              </p>
              <button className="bg-transparent hover:bg-gradient-to-r from-[#4E6DD8] to-[#BB47A6] mt-6 py-3 px-8 rounded-full font-bold hover:border-none border transition-all flex items-center gap-2">
                Get NFT Updates <FaArrowRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
