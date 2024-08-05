import Image from "../../../public/img/main.png";
const Landing = () => {
  return (
    <div className="w-full h-screen overflow-hidden flex font-Montserrat">
      <div className="w-[50%] flex justify-center items-center ">
        <div className="w-full flex justify-center items-center h-full">
          <div className="w-[70%] h-auto  flex flex-col justify-">
            <p className="text-white mt-10 text-xl">BEST NFT MARKETPLACE</p>
            <p className="text-white mt-5 bt-5 text-6xl font-bold ">
              Discover the latest <br />
              NFT Marketplace
            </p>
            <p className="text-white mt-8 w-full text-justify leading-7 ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="w-80 mt-8 flex font-Montserrat ">
              <button className=" bg-gradient-to-r from-[#BB47A6] to-[#4E6DD8] px-[37px] py-[11px] text-white mr-2 rounded-lg hover:bg-none hover:border">
                Try for free
              </button>
              <button className=" bg-transparent hover:bg-gradient-to-r from-[#BB47A6] to-[#4E6DD8] text-white border rounded-lg hover:border-none px-[37px] py-[11px] btn">
                Learn more
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[50%] flex justify-center items-center ">
        <div className="w-full h-full flex justify-center">
          <div className="w-[80%] h-[100%]">
            <img src={Image} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
