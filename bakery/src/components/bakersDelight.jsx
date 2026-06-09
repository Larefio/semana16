import './bakersDelight.css'

const BakersDelight = () => {
  return (
    <section className="delight" id="reservation">
      <div className="delight__container">
        <div className="delight__text">
          <span className="delight__script">Baker's</span>
          <h2 className="delight__title">Delight</h2>
          <p className="delight__body">
            Lorem ipsum dolor sit amet consectetur adipiscing elit. Adipisci
            voluptatum dolor earum accusamus suscipit. Officia atque vitae
            excepturi deserunt nihil?
          </p>
          <a href="#reservation" className="delight__link">Make a Reservation</a>
        </div>
        <div className="delight__images">
          <img src="/bakers-delight-1.jpg" alt="bakers delight" />
          <img src="/bakers-delight-2.jpg" alt="bakers delight" />
        </div>
      </div>
    </section>
  )
}

export default BakersDelight