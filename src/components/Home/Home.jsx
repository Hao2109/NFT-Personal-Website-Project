import Bundle from "../Bundle/Bundle"
import Card from "../Card/Card"
import Community from "../Comunity/Community"
import Creators from "../Creators/Creators"
import Landing from "../Landing/Landing"
import Navbar from "../Navbar/Navbar"
import Products from "../Products/Products"


const Home = () => {
  return (
    <div className="overflow-hidden bg-[#0A0F29]">
      <Navbar/>
      <Landing/>
      <Card/>
      <Bundle/>
      <Products/>
      <Creators/>
      <Community/>
    </div>
  )
}

export default Home
