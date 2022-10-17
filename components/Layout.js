import Footer from "./Footer"
import Navbar from "./Navbar"
//import MobileNavbar from "./MobileNavbar"


export default function Layout({ children }) {

  return (
    <div className="layout">
      <Navbar/>
        { children }
      <Footer />
    </div>
  )
}
