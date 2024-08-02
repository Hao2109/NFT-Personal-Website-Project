import Bundle from "../Bundle/Bundle"
import Card from "../Card/Card"
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
    </div>
  )
}

export default Home
