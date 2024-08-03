import Item1 from "../../assets/Images/item1.jpg"
import Item2 from "../../assets/Images/item2.jpg"

import Item3 from "../../assets/Images/item3.jpg"
import Item4 from "../../assets/Images/item4.jpg"
import Item5 from "../../assets/Images/item5.jpg"
import Item6 from "../../assets/Images/item6.jpg"
import Diamond from "../../assets/Images/diamond3.png"

const Products = () => {
  return (
    <div className="w-full h-fit overflow-hidden font-Montserrat ">
      <div className="w-[30%] h-28 text-white flex justify-center">
        <h1 className="absolute text-2xl font-bold ml-2">
          Explore our collection
        </h1>
        <p className="mt-10 font-bold text-white ml-36">
        It is a long established fact that a reader will be distracted by the readable content.
        </p>

      </div>
      <div className="w-full h-full relative flex justify-center items-center ">
        <div className="grid grid-cols-3 grid-rows-2 gap-8">
          <div className="col-span-1 w-[280px] h-[350px] flex justify-start ml-2 rounded-2xl bg-gradient-to-r from-[#BB47A6] to-[#4E6DD8] p-0.5">
            <div className="w-full h-full rounded-2xl flex justify-center bg-[#0A0F29] ">
              <div className="w-[95%] rounded-2xl mt-2 h-52 flex justify-center">
                <img src={Item1} alt="" className="w-full h-full rounded-2xl " />
              </div>
              <div className="absolute w-64 h-28 mt-56 ">
                <div className="w-full text-white h-20">
                  <h1 className="font-bold mt-2">Blue dolliner</h1>
                  <button className="float-right px-6 py-0.5 rounded-md bg-gradient-to-r from-[#BB47A6] to-[#4E6DD8] p-0.5 -mt-6">BID</button>
                  <p className="text-gray-400 mt-2 text-sm">by Alon art</p>
                </div>
                <div className="text-white flex justify-between">
                  <span className="flex items-center">
                    <img src={Diamond} alt="" className="w-auto h-[16px] " />
                    <p className="ml-[8px]">1.52 ETH</p>
                  </span>
                  <p className=" flex items-center">2.343 USD</p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-1 w-[280px] h-[350px] flex justify-start ml-2 rounded-2xl bg-gradient-to-r from-[#BB47A6] to-[#4E6DD8] p-0.5">
            <div className="w-full h-full rounded-2xl flex justify-center bg-[#0A0F29] ">
              <div className="w-[95%] bg-red-500 rounded-2xl mt-2 h-52 flex justify-center">
                <img src={Item2} alt="" className="w-full h-full rounded-2xl " />

              </div>
              <div className="absolute w-64 h-28 mt-56 ">
                <div className="w-full text-white h-20">
                  <h1 className="font-bold mt-2">Blue dolliner</h1>
                  <button className="float-right px-6 py-0.5 rounded-md bg-gradient-to-r from-[#BB47A6] to-[#4E6DD8] p-0.5 -mt-6">BID</button>
                  <p className="text-gray-400 mt-2 text-sm">by Alon art</p>
                </div>
                <div className="text-white flex justify-between">
                  <span className="flex items-center">
                    <img src={Diamond} alt="" className="w-auto h-[16px] " />
                    <p className="ml-[8px]">1.52 ETH</p>
                  </span>
                  <p className=" flex items-center">2.343 USD</p>
                </div>
              </div>
            </div>

          </div>

          <div className="col-span-1 w-[280px] h-[350px] flex justify-start ml-2 rounded-2xl bg-gradient-to-r from-[#BB47A6] to-[#4E6DD8] p-0.5">
            <div className="w-full h-full rounded-2xl flex justify-center bg-[#0A0F29] ">
              <div className="w-[95%] bg-red-500 rounded-2xl mt-2 h-52 flex justify-center">
                <img src={Item3} alt="" className="w-full h-full rounded-2xl " />

              </div>
              <div className="absolute w-64 h-28 mt-56 ">
                <div className="w-full text-white h-20">
                  <h1 className="font-bold mt-2">Blue dolliner</h1>
                  <button className="float-right px-6 py-0.5 rounded-md bg-gradient-to-r from-[#BB47A6] to-[#4E6DD8] p-0.5 -mt-6">BID</button>
                  <p className="text-gray-400 mt-2 text-sm">by Alon art</p>
                </div>
                <div className="text-white flex justify-between">
                  <span className="flex items-center">
                    <img src={Diamond} alt="" className="w-auto h-[16px] " />
                    <p className="ml-[8px]">1.52 ETH</p>
                  </span>
                  <p className=" flex items-center">2.343 USD</p>
                </div>
              </div>
            </div>

          </div>

          <div className="col-span-1 w-[280px] h-[350px] flex justify-start ml-2 rounded-2xl bg-gradient-to-r from-[#BB47A6] to-[#4E6DD8] p-0.5">
            <div className="w-full h-full rounded-2xl flex justify-center bg-[#0A0F29] ">
              <div className="w-[95%] bg-red-500 rounded-2xl mt-2 h-52 flex justify-center">
                <img src={Item4} alt="" className="w-full h-full rounded-2xl " />

              </div>
              <div className="absolute w-64 h-28 mt-56 ">
                <div className="w-full text-white h-20">
                  <h1 className="font-bold mt-2">Blue dolliner</h1>
                  <button className="float-right px-6 py-0.5 rounded-md bg-gradient-to-r from-[#BB47A6] to-[#4E6DD8] p-0.5 -mt-6">BID</button>
                  <p className="text-gray-400 mt-2 text-sm">by Alon art</p>
                </div>
                <div className="text-white flex justify-between">
                  <span className="flex items-center">
                    <img src={Diamond} alt="" className="w-auto h-[16px] " />
                    <p className="ml-[8px]">1.52 ETH</p>
                  </span>
                  <p className=" flex items-center">2.343 USD</p>
                </div>
              </div>
            </div>

          </div>

          <div className="col-span-1 w-[280px] h-[350px] flex justify-start ml-2 rounded-2xl bg-gradient-to-r from-[#BB47A6] to-[#4E6DD8] p-0.5">
            <div className="w-full h-full rounded-2xl flex justify-center bg-[#0A0F29] ">
              <div className="w-[95%] bg-red-500 rounded-2xl mt-2 h-52 flex justify-center">
                <img src={Item5} alt="" className="w-full h-full rounded-2xl " />

              </div>
              <div className="absolute w-64 h-28 mt-56 ">
                <div className="w-full text-white h-20">
                  <h1 className="font-bold mt-2">Blue dolliner</h1>
                  <button className="float-right px-6 py-0.5 rounded-md bg-gradient-to-r from-[#BB47A6] to-[#4E6DD8] p-0.5 -mt-6">BID</button>
                  <p className="text-gray-400 mt-2 text-sm">by Alon art</p>
                </div>
                <div className="text-white flex justify-between">
                  <span className="flex items-center">
                    <img src={Diamond} alt="" className="w-auto h-[16px] " />
                    <p className="ml-[8px]">1.52 ETH</p>
                  </span>
                  <p className=" flex items-center">2.343 USD</p>
                </div>
              </div>
            </div>

          </div>

          <div className="col-span-1 w-[280px] h-[350px] flex justify-start ml-2 rounded-2xl bg-gradient-to-r from-[#BB47A6] to-[#4E6DD8] p-0.5">
            <div className="w-full h-full rounded-2xl flex justify-center bg-[#0A0F29] ">
              <div className="w-[95%] bg-red-500 rounded-2xl mt-2 h-52 flex justify-center">
                <img src={Item6} alt="" className="w-full h-full rounded-2xl " />

              </div>
              <div className="absolute w-64 h-28 mt-56 ">
                <div className="w-full text-white h-20">
                  <h1 className="font-bold mt-2">Blue dolliner</h1>
                  <button className="float-right px-6 py-0.5 rounded-md bg-gradient-to-r from-[#BB47A6] to-[#4E6DD8] p-0.5 -mt-6">BID</button>
                  <p className="text-gray-400 mt-2 text-sm">by Alon art</p>
                </div>
                <div className="text-white flex justify-between">
                  <span className="flex items-center">
                    <img src={Diamond} alt="" className="w-auto h-[16px] " />
                    <p className="ml-[8px]">1.52 ETH</p>
                  </span>
                  <p className=" flex items-center">2.343 USD</p>
                </div>
              </div>
            </div>

          </div>

         



        </div>

      </div>
    </div>
  )
}

export default Products
