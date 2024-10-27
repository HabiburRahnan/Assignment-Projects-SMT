import { FaFacebook, FaInstagram } from "react-icons/fa"
import { FaLinkedin } from "react-icons/fa6"
import { Link } from "react-router-dom"

function Footer() {
  return (
    <div className="bg-[#232323] text-white">
      <div className="container mx-auto">
        <img className="p-10" src="https://i.ibb.co.com/yX6m854/nav-logo-1.png" alt="" />

        <footer className="footer p-10">
          <nav>
            <h6 className="footer-title text-[#FF2A1E] font-bold text-lg">Quick Links</h6>
            <Link to="/" className="link link-hover">Home</Link>
            <Link to="/" className="link link-hover">About Us</Link>
            <Link to="/" className="link link-hover">Careers</Link>
            <Link to="/" className="link link-hover">Contact</Link>
          </nav>
          <nav>
            <h6 className="footer-title text-[#FF2A1E] font-bold text-lg">Capabilitise</h6>
            <Link to="/" className="link link-hover">IT & Cyber Securty</Link>
            <Link to="/" className="link link-hover">Software Development</Link>
            <Link to="/" className="link link-hover">Facilities Support</Link>
            <Link to="/" className="link link-hover">Program Management</Link>
            <Link to="/" className="link link-hover">Logistics Expertise</Link>
            <Link to="/" className="link link-hover">Strategic Consulting</Link>
          </nav>
          <nav>
            <h6 className="footer-title text-[#FF2A1E] font-bold text-lg">Contact Us</h6>
            <Link to="/" className="link link-hover">contact@spartansolutions.com</Link>
          </nav>
          <nav>
            <h6 className="footer-title text-[#FF2A1E] font-bold text-lg">Follow Us On:</h6>
            <div className="flex gap-3 text-2xl">
              <FaFacebook />
              <FaLinkedin />
              <FaInstagram />
            </div>


          </nav>
        </footer>
        <footer className="footer px-10 py-4">
          <Link to="/" side className="grid-flow-col items-center">
            <aside>
              <p>© {new Date().getFullYear()} Spartan Solutions. All right reserved.</p>
            </aside>
          </Link>
          <nav className="md:place-self-center md:justify-self-end">
            <div className="flex flex-wrap justify-center items-center gap-2">
              <Link className="link link-hover">Privacy policy</Link>
              <Link className="link link-hover">Terms of Services</Link>
              <Link className="link link-hover">Site by <span className="text-blue-600 font-semibold">Blue Collar Builds</span></Link>
            </div>
          </nav>
        </footer>
      </div>

    </div>
  )
}

export default Footer