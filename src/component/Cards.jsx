import CardItem from "./CardItem"
import '../assets/css/Cards.css'
import opCon from '../assets/images/OpCon.png'
import beasy from '../assets/images/logo-beasy.png'

const Cards = () => {
  return (
    <div className='cards' id='projects'>
      <h1>Projects</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem 
              src={opCon}
              text='Numerical Calculation Of Optical Conductivity Graphene Material'
              label='Numerical'
              path="https://github.com/giov27/OpticalConductivityGraphene"
            />
            <CardItem 
              src={beasy}
              text='BEASY (Banking Can Be Easy)'
              label='Web Dev'
              path="https://beasy.vercel.app/"
            />
          </ul>
          <ul className="cards__items">
            <CardItem 
              src="https://raw.githubusercontent.com/ikhwanwan07/Frontend-Mamasakan/master/img/logo.png"
              text='Mamasakan'
              label='Web Dev'
              path="https://github.com/ikhwanwan07/Frontend-Mamasakan"
            />
            <CardItem 
              src="https://raw.githubusercontent.com/giov27/E12_projectTeam/master/IMG_5773.jpg"
              text='Travelling Destination'
              label='Web Dev'
              path="https://giov27.github.io/E12_projectTeam/"
            />

          </ul>
        </div>
      </div>
    </div>
  )
}

export default Cards