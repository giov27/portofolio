import { FaTypo3 } from 'react-icons/fa';
import '../assets/css/Navbar.css'
import { Link, animateScroll as scroll} from "react-scroll";

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark sticky-top">
      <div class="container-fluid">
        <Link onClick={()=> scroll.scrollToTop()} className="navbar-brand ms-5 navhover">
            Giov <FaTypo3 size={40}/>
        </Link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse me-5" id="navbarNavAltMarkup">
          <div class="navbar-nav ms-auto">
            <Link to="projects" smooth={true} duration={500} className="navhover" >Project</Link>
            <Link to="skill" smooth={true} duration={500} className="navhover mx-4" >Skill</Link>
            <Link to="experience" smooth={true} duration={500} className="navhover" >Experience</Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
