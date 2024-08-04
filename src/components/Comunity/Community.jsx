import { FaDiscord } from "react-icons/fa"


const Comunity = () => {
  return (
    <div className="h-fit container mx-auto py-4 md:py-16 px-3 md:px-0 rounded-3xl flex flex-col items-center gap-4 bg-gradient-to-r from-[#BB47A6] to-[#4E6DD8] text-white">
        <h1 className="font-Montserrat font-bold text-2xl md:text-6xl text-center">Join Our Community</h1>
        <p className="text-center text-base md:text-lg"> It is a long established fact that a reader will be distracted</p>
        <button className="border-2 hover:bg-transparent hover:border-white border-purple-400 text-base px-6 py-3 rounded-full flex items-center">
          <FaDiscord size={28}/>  Launch Discord
        </button>
       
    </div>
  )
}

export default Comunity

