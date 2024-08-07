const Card = () => {
  return (
    <>
      <div className="container mx-auto text-white">
        <h1 className="font-bold text-3xl md:text-6xl text-center mb-0 md:mb-8">
          Create and sell your NFTs
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 py-8  ">
          <div className=" text-center rounded-2xl border w-full  p-3 md:p-4 flex flex-col items-center gap-4 cursor-pointer hover:scale-105 transition-all  ">
            <img src="/img/create1.png" alt="" className="w-44 h-44 my-10 " />
            <h1 className="text-2xl md:text-4xl font-bold ">
              Create 3D cartoon
            </h1>
            <p className="text-sm md:text-lg ">
              Create your collection, Add social list, a description, profile &
              bannel create your collection, Add social list, a description,
              profile & bannel
            </p>
          </div>
          <div className=" text-center rounded-2xl border w-full p-3 md:p-4 flex flex-col items-center gap-4 cursor-pointer hover:scale-105 transition-all">
            <img src="/img/create1.png" alt="" className="w-44 h-44 my-10" />
            <h1 className="text-2xl md:text-4xl font-bold ">
              Create 3D cartoon
            </h1>
            <p className="text-sm md:text-lg ">
              Create your collection, Add social list, a description, profile &
              bannel create your collection, Add social list, a description,
              profile & bannel
            </p>
          </div>
          <div className=" text-center rounded-2xl border w-full p-3 md:p-4 flex flex-col items-center gap-4 cursor-pointer hover:scale-105 transition-all md:col-span-1 col-span-2">
            <img src="/img/create1.png" alt="" className="w-44 h-44 my-10" />
            <h1 className="text-2xl md:text-4xl font-bold ">
              Create 3D cartoon
            </h1>
            <p className="text-sm md:text-lg ">
              Create your collection, Add social list, a description, profile &
              bannel create your collection, Add social list, a description,
              profile & bannel
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
