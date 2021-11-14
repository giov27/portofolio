import '../assets/css/Landing.css'
import SelfPic from '../assets/images/FE-Giov.jpg'

const Landing = () => {
  return (
    <div className='container-fluid' id='landing'>
      <div className='landing d-flex justify-content-center align-items-center'>
        <div className='introduction d-flex flex-column mx-md-5 text-start'>
          <h1>Hello, I'm <span className='name'> Giov</span></h1>
          <h3 className='mt-md-4'>Frontend Enggineer, Undergraduate Physics Student</h3>
          <p className='flex-shrink-1'>As a Physics student, I interested with programming when I got my Programming subject. After that, I start learning by myself, and implement 
            what i have studied at my Thesis. Moreover I learn about Web Developer at my last online course in SYNRGY Academy. </p>
        </div>
        <div>
          <img src={SelfPic} alt="xixi" className='pic1 img-fluid' />
        </div>
      </div>
      
    </div>
  )
}

export default Landing
