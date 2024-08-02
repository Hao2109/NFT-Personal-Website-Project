
import Image from "../../assets/Images/boy.jpg"
const Landing = () => {
  return (
    <div className="w-full h-screen overflow-hidden flex font-Montserrat">
        <div className="w-[50%] flex justify-center items-center ">
            <div className="w-full flex justify-center items-center h-full">
                <div className="w-[70%] h-[85%]">
                    <p className="text-white mt-10 text-lg">BEST NFT MARKETPLACE</p>
                    <p className="text-white mt-5 text-4xl w-[28rem] leading-10">Discover the latest <br/>NFT Marketplace</p>
                    <p className="text-white mt-8 w-[30rem] text-justify leading-7 ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <div className="w-80 mt-4 flex font-Montserrat ">
                      <button className="bg-gradient-to-r from-[#BB47A6] to-[#4E6DD8] px-[37px] py-[11px] text-white mr-2 rounded-lg hover:bg-none hover:border">Try for free</button>
                      <button className="bg-transparent hover:bg-gradient-to-r from-[#BB47A6] to-[#4E6DD8] text-white border rounded-lg hover:border-none px-[37px] py-[11px] btn" >Learn more</button>
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
  )
}

export default Landing
