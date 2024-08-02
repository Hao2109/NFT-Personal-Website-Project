

const Bundle = () => {
  return (
    <div className="w-full h-screen font-Montserrat flex overflow-hidden">
      <div className="w-[50%] flex justify-center items-center bg-green-300">
        <div className="w-full h-full flex justify-center items-center bg-red-300 ">
            <div className="w-[70%] h-[65%] bg-orange-300">
                <img src="" alt="" />

            </div>

        </div>
      </div>
      <div className="w-[50%] flex justify-center items-center">
        <div className="w-full flex justify-center items-end h-full">
            <div className="w-[70%] h-[85%]">
                <p className="text-white text-4xl mt-24 ">Get exclusive NFT bundle from here </p>
                <p className="text-white w-[30rem] text-justify mt-8 leading-8">
                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do look even slightly believable.
                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do look even slightly believable
                </p>
                <div className="w-80 mt-8 flex justify-between">
                    <button className="bg-gradient-to-r from-[#BB47A6] to-[#4E6DD8] px-6 py-2 rounded-lg text-white hover:bg-none hover:border  ">
                        Learn more</button>

                </div>


            </div>

        </div>

      </div>
    </div>
  )
}

export default Bundle
