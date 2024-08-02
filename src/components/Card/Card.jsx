import Sell from "../../assets/Images/Icons/hand.png"
import Buy from "../../assets/Images/Icons/shopping-bag.png"

const Card = () => {
  return (
    <div className="w-full h-72">
      <div className="w-[99%] h-full rounded-md ml-2 bg-gradient-to-r from-[#BB47A6] to-[#4E6DD8] p-0.5">
        <div className="h-full flex bg-[#0A0F29]">
            <div className="w-[50%]  h-full">
                <div className="w-full flex justify-center items-center h-full ">
                    <div className="w-[70%] flex justify-start items-center h-[85%] ">
                        <div className="w-[80%] h-full text-white flex justify-end items-center ">
                            <h1 className="text-center text-3xl font-bold ">We provider everything <br /> <span>that you need</span></h1>

                        </div>
                        <div className="w-1 h-32 ml-28 bg-gradient-to-r from-[#BB47A6] to-[#4E6DD8] ">

                        </div>


                    </div>

                </div>
            </div>
            <div className="w-[50%]">
                <div className="w-full h-full flex justify-start items-center">
                    <div className="w-[70%] h-[85%] flex gap-8">
                       <div className="w-[50%] h-full flex justify-center ">
                            <div className="w-16 h-16 mt-10 bg-pink-400 rounded-full flex justify-center items-center">
                             <img src={Buy} alt="" className="w-10 h-10" />
                            </div>
                                <div className="w-64 mt-28 text-white text-center h-32 absolute">
                                    <h2>Buy NFT</h2>
                                    <p className="mt-2"> There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form</p>
                                </div>
                        </div>
                        <div className="w-[50%] h-full flex justify-center ">
                            <div className="w-16 h-16 mt-10 bg-blue-400 rounded-full flex justify-center items-center">
                                <img src={Sell} alt="" className="w-10 h-10" />
                            </div>
                                <div className="w-64 mt-28 text-white text-center h-32 absolute">
                                    <h2>Sell NFT</h2>
                                    <p className="mt-2"> There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form</p>
                                </div>
                        </div>
                   
                    

                    </div>

                </div>

            </div>
           
           


        </div>

      </div>
    </div>
  )
}

export default Card
