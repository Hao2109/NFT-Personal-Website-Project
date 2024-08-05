import Logo from "../../assets/Images/nft.png";
const Navbar = () => {
  return (
    <div className="w-full h-20 font-Montserrat flex justify-between text-white ">
      <div className=" h-full w-52 flex justify-end items-center">
        <img src={Logo} alt="" className="w-12 h-12" />
        <p className="text-3xl font-bold">Galaxy</p>
      </div>
      <div className="w-[35%] mr-14 flex justify-around h-full">
        <ul className="flex justify-evenly w-full h-full items-center text-lg font-semibold">
          <li>Home</li>
          <li>Feature</li>
          <li>Product</li>
          <li>Contact</li>

          <button className="bg-gradient-to-r from-[#BB47A6] to-[#4E6DD8] px-3 py-1.5 rounded-lg">
            Get started
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
