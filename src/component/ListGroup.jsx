import '../assets/css/ListGroup.css'
import ImageList from './ImageList'

const ListGroup = () => {
  return (
    <div className='container-fluid py-5' id='experience'>
      <h1 className='title my-5'>Experience</h1>
      <div className="list-group mx-auto text-start">
        <a href className="list-group-item list-group-item-action group-item-dark">
          <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1">Event and Creative UGM Integrated Career Days</h5>
            <medium className="">2020</medium>
          </div>
          <p className="mb-1 text-muted">-</p>
        </a>
        <a href className="list-group-item list-group-item-action group-item-dark">
          <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1">Coordinator KKN-PPM UGM Sub-Unit Polewali Mandar</h5>
            <medium className="">2019</medium>
          </div>
          <p className="mb-1 text-muted">-</p>
        </a>
        <a href className="list-group-item list-group-item-action group-item-dark">
          <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1 text-start">Head Division of Apresiasi Mahasiswa BEM KM FMIPA UGM</h5>
            <medium className="">2018</medium>
          </div>
          <p className="mb-1 text-muted">-</p>
        </a>
        <a href className="list-group-item list-group-item-action group-item-dark">
          <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1">Co-Fasilitator PPSMB Palapa</h5>
            <medium className="">2017</medium>
          </div>
          <p className="mb-1 text-muted">-</p>
        </a>
      </div>
      <ImageList/>
    </div>
  )
}

export default ListGroup
