import './Navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__logo">Bakery</div>
      <ul className="navbar__links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About Us</a></li>
        <li><a href="#reservation">Reservation</a></li>
        <li><a href="#bakers">Bakers</a></li>
      </ul>
    </nav>
  )
}

export default Navbar