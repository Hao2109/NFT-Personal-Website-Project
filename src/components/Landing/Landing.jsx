import Spline from "@splinetool/react-spline";
const Landing = () => {
  return (
    <div className="py-20 md:py-24 font-Montserrat">
      <div className="grid grid-cols-1 md:grid-cols-2 container mx-auto ">
        <div className="flex flex-col gap-8 text-center items-center md:text-left md:items-start">
          <p className="text-white mt-10 text-xl md:text-left">
            BEST NFT MARKETPLACE
          </p>
          <p className="text-white bt-5 text-7xl font-bold md:text-left ">
            Discover the latest <br />
            NFT Marketplace
          </p>
          <p className="text-white text-justify leading-7 w-[80%] ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="flex justify-between w-3/4">
            <div className="text-center text-white">
              <h1 className="text-xl md:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-[#BB47A6] to-[#4E6DD8] ">
                527M
              </h1>
              <p className="text-sm md:text-base">Trading Volume</p>
            </div>
            <div className="text-center text-white">
              <h1 className="text-xl md:text-3xl">300K</h1>
              <p className="text-sm md:text-base">Art Work</p>
            </div>
            <div className="text-center text-white">
              <h1 className="text-xl md:text-3xl">1.8M</h1>
              <p className="text-sm md:text-base">Total Users</p>
            </div>
          </div>

          <div className="w-80 mt-8 flex font-Montserrat ">
            <button className=" bg-gradient-to-r from-[#BB47A6] to-[#4E6DD8] px-[37px] py-[11px] text-white mr-2 rounded-lg hover:bg-none hover:border">
              Try for free
            </button>
            <button className=" bg-transparent hover:bg-gradient-to-r from-[#BB47A6] to-[#4E6DD8] text-white border rounded-lg hover:border-none px-[37px] py-[11px] btn">
              Learn more
            </button>
          </div>
        </div>
        <div className="rounded-2xl">
          <Spline scene="https://prod.spline.design/ylHfZB2fB8w0SyFQ/scene.splinecode" />
        </div>
      </div>
    </div>
  );
};

export default Landing;
