const Card = () => {
  return (
    <>
      <div className=" container mx-auto text-white">
        <div className="flex flex-col gap-4 bg-red-500">
          <h1 className="font-bold text-3xl md:text-6xl text-center mb-0 md:mb-8">
            Create and sell your NFTs
          </h1>
          <p className="text-center md:text-lg justify-between">
            Với sự chuyên nghiệp và sáng tạo, chúng tôi không chỉ dừng lại ở
            thiết kế website mà còn mang lại các giải pháp đa dạng, giúp tăng tỷ
            lệ chuyển đổi và thúc đẩy hiệu quả doanh số.
          </p>
          <button className="text-white">
            <span className="bg-gradient-to-r from-[#BB47A6] to-[#4E6DD8] px-6 py-3 rounded-2xl text-xl">
              Khám phá
            </span>
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 py-8  ">
          <div className=" text-center rounded-2xl border w-full  p-3 md:p-4 flex flex-col items-center gap-4 cursor-pointer hover:scale-105 transition-all  ">
            <img src="/img/c1.png" alt="" className="w-44 h-44 my-10 " />
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
            <img src="/img/c2.png" alt="" className="w-44 h-44 my-10" />
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
            <img src="/img/c3.png" alt="" className="w-44 h-44 my-10" />
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
