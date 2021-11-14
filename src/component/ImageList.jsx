import pic1 from '../assets/images/IMG_5560-min.JPG'
import pic2 from '../assets/images/IMG_8879-min.JPG'
import '../assets/css/ImageList.css'

const ImageList = () => {
  return (
    <div className='d-flex justify-content-around py-5'>
      <img src={pic1} alt="" className='rounded img-fluid listPicture'/>
      <img src={pic2} alt="" className='rounded img-fluid listPicture'/>
      <img src="" alt="" />
      <img src="" alt="" />
    </div>
  )
}

export default ImageList
