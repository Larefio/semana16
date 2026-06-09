import './Story.css'

const Story = () => {
  return (
    <section className="story" id="about">
      <div className="story__container">
        <div className="story__text">
          <span className="story__script">Discover</span>
          <h2 className="story__title">Our Story</h2>
          <p className="story__body">
            Lorem ipsum dolor sit amet consectetur adipiscing elit. Adipisci
            voluptatum dolor earum accusamus suscipit. Officia atque vitae
            excepturi deserunt nihil?
          </p>
          <a href="#about" className="story__link">Learn More</a>
        </div>
        <div className="story__image">
          <img src="/story-img.jpg" alt="Our story" />
        </div>
      </div>
    </section>
  )
}

export default Story