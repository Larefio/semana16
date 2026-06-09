import './Menu.css'

const Menu = () => {
  return (
    <section className="menu">
      <div className="menu__container">
        <div className="menu__grid">
          <img src="/square-1.jpg" alt="menu item" />
          <img src="/square-2.jpg" alt="menu item" />
          <img src="/square-3.jpg" alt="menu item" />
          <img src="/square-4.jpg" alt="menu item" />
        </div>
        <div className="menu__text">
          <span className="menu__script">Explore</span>
          <h2 className="menu__title">Menu</h2>
          <p className="menu__body">
            Lorem ipsum dolor sit amet consectetur adipiscing elit. Adipisci
            voluptatum dolor earum accusamus suscipit. Officia atque vitae
            excepturi deserunt nihil?
          </p>
          <a href="#menu" className="menu__link">See Full Menu</a>
        </div>
      </div>
    </section>
  )
}

export default Menu