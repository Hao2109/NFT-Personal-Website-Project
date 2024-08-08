import Imagecard from "../../../public/img/nftgirl2.png";
const Bundle = () => {
  return (
    <div className="py-20 md:my-20 md:py-24 font-Montserrat bg-green-500 flex ">
      <div className="w-[50%] flex justify-center items-center bg-orange-500  ">
        <div className="w-full h-full flex justify-center items-center b ">
          <div className="">
            <img src={Imagecard} alt="" />
          </div>
        </div>
      </div>
      <div className="w-[50%] flex justify-center items-center bg-red-500">
        <div className="">
          <p className="text-white text-4xl text-center ">
            Get exclusive NFT bundle from here{" "}
          </p>
          <p className="text-white text-center  mt-8 leading-8">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which do look even slightly believable.
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which do look even slightly believable
          </p>
          <div className=" mt-8 flex justify-between items-center">
            <button className="bg-gradient-to-r from-[#BB47A6] to-[#4E6DD8] px-6 py-2 rounded-lg text-white hover:bg-none hover:border  ">
              Learn more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bundle;
