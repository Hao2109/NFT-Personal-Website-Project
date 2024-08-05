import Diamond from "../../assets/Images/diamond3.png";
import data from "../../data/data.json";
import Marquee from "react-fast-marquee";

const Creators = () => {
  return (
    <div className="w-full overflow-hidden  font-Montserrat text-white mt-60">
      <h1 className="text-center font-bold text-6xl pt-4  ">Top Creators</h1>
      <Marquee pauseOnHover={true} gradient={false} className="mt-5 py-4">
        {data.map((item) => {
          return (
            <div
              className="flex items-center gap-3 mr-12 cursor-pointer hover:scale-105 transition-all p-2"
              key={item.name}
            >
              <img
                src={`/img/${item.image}`}
                alt="avatar"
                className="w-[60px] h-[60px] rounded-full"
              />
              <div className="font-Montserrat">
                <p className="font-semibold text-2xl">{item.name}</p>
                <div className="text-white flex items-center">
                  <img
                    src={Diamond}
                    alt="diamond"
                    className="w-auto h-[16px]"
                  />
                  <p className="ml-1">{item.value}</p>
                </div>
              </div>
            </div>
          );
        })}
      </Marquee>
      <Marquee
        pauseOnHover={true}
        gradient={false}
        direction="right"
        className="mt-5 py-4"
      >
        {data.map((item) => {
          return (
            <div
              className="flex items-center gap-3 mr-12 cursor-pointer hover:scale-105 transition-all p-2"
              key={item.name}
            >
              <img
                src={`/img/${item.image}`}
                alt="avatar"
                className="w-[60px] h-[60px] rounded-full"
              />
              <div className="font-Montserrat">
                <p className="font-semibold text-2xl">{item.name}</p>
                <div className="text-white flex items-center">
                  <img
                    src={Diamond}
                    alt="diamond"
                    className="w-auto h-[16px]"
                  />
                  <p className="ml-1">{item.value}</p>
                </div>
              </div>
            </div>
          );
        })}
      </Marquee>
    </div>
  );
};

export default Creators;
