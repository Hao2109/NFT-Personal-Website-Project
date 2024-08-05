import Diamond from "../../assets/Images/diamond3.png";
import product from "../../data/products.json";

const Products = () => {
  return (
    <div className="w-full h-screen overflow-hidden font-Montserrat ">
      <div className="w-[30%] h-28 text-white flex justify-center mt-4">
        <h1 className="absolute text-2xl font-bold ml-2">
          Explore our collection
        </h1>
        <p className="mt-10 font-bold text-white ml-36">
          It is a long established fact that a reader will be distracted by the
          readable content.
        </p>
      </div>
      <div className="w-full h-full relative flex justify-center items-center">
        <div className="grid grid-cols-4 grid-rows-2 gap-8">
          {product.map((item) => {
            return (
              <div
                className="col-span-1 w-[280px] h-[350px] flex justify-start ml-2 rounded-2xl bg-gradient-to-r from-[#BB47A6] to-[#4E6DD8] p-0.5"
                key={item.name}
              >
                <div className="w-full h-full rounded-2xl flex justify-center bg-[#0A0F29]">
                  <div className="w-[95%] rounded-2xl mt-2 h-52 flex justify-center">
                    <img
                      src={`/img/${item.image}`}
                      alt=""
                      className="w-full h-full rounded-2xl "
                    />
                  </div>
                  <div className="absolute w-64 h-28 mt-56 ">
                    <div className="w-full text-white h-20">
                      <h1 className="font-bold mt-2">{item.name}</h1>
                      <button className="float-right px-6 py-0.5 rounded-md bg-gradient-to-r from-[#BB47A6] to-[#4E6DD8] p-0.5 -mt-6">
                        BID
                      </button>
                      <p className="text-gray-400 mt-2 text-sm">
                        {item.creator}
                      </p>
                    </div>
                    <div className="text-white flex justify-between">
                      <span className="flex items-center">
                        <img
                          src={Diamond}
                          alt=""
                          className="w-auto h-[16px] "
                        />
                        <p className="ml-[8px]">{item.eth}</p>
                      </span>
                      <p className=" flex items-center">{item.usd}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Products;
