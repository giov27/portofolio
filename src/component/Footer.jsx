/* eslint-disable react/jsx-no-target-blank */
import '../assets/css/Footer.css'
import {FaInstagram} from 'react-icons/fa'
import { GoLogoGithub } from "react-icons/go";

const Footer = () => {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Thanks for visiting, contact my social media to interact with me
        </p>
        <div className='d-flex justify-content-center'>
          <a className='mx-3 icons' href={'https://www.instagram.com/giovmahendra/'} target='_blank'><FaInstagram size={40}/></a>
          <a className='icons' href={'https://github.com/giov27'} target='_blank'><GoLogoGithub size={40}/></a>

        </div>
      </section>
      {/* Socmed logo */}
    </div>
  )
}

export default Footer
