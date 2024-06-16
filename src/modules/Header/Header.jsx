const Header = () => {
  return (
    <header>
      <div>
        <div>
          <img src="path_to_your_image" alt="Logo" className="header-logo" />
          <nav className="header-nav">
            <ul className="nav-list">
              <li className="nav-item">Home Page</li>
              <li className="nav-item">Menu</li>
              <li className="nav-item">About Us</li>
              <li className="nav-item">Reservation</li>
            </ul>
          </nav>
          <a href="tel:+1234567890" className="phone-number">
            +1 (234) 567-890
          </a>
          <button type="button" className="reservation-button">
            TABLE RESERVATION
          </button>
        </div>
        <div>
          <h1>Welcome to Our Restaurant</h1>
          <button type="button" className="view-menu-button">
            View Menu
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
