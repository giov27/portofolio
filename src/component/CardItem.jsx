/* eslint-disable react/jsx-no-target-blank */

const CardItem = (props) => {
  return (
    <>
      <li className="cards__item">
        {/* <a className="cards__item__link" to={{pathName: props.path}} target="_blank"> */}
        <a className="cards__item__link" href={props.path} target="_blank">
          <figure className="cards__item__pic-wrap" data-category={props.label}>
            <img src={props.src} alt="Travel" className="cards__item__img" />
          </figure>
          <div className="cards__item__info">
            <h5 className="cards__item__text">{props.text}</h5>
          </div>
        </a>
      </li>
    </>
  )
}

export default CardItem