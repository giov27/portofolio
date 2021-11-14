import '../assets/css/Landing.css'
import SelfPic from '../assets/images/FE-Giov.jpg'

const Landing = () => {
  return (
    <div className='container-fluid' id='landing'>
      <div className='landing d-flex justify-content-center align-items-center'>
        <div className='introduction d-flex flex-column mx-md-5 text-start'>
          <h1>Hello, I'm <span className='name'> Giov</span></h1>
          <h3 className='mt-md-4'>Frontend Enggineer, Undergraduate Student in Physics</h3>
          <p className='flex-shrink-1'>I took interest in programming when I got my Programming class in University. After that, I started to learn and explore programming independently, before i apply to SYNRGY Academy to learn more about Web Developer.
            At last, I use programming as a research method to solve physics problems in my final thesis. </p>
        </div>
        <div>
          <img src={SelfPic} alt="xixi" className='pic1 img-fluid' />
        </div>
      </div>
      
    </div>
  )
}

export default Landing
