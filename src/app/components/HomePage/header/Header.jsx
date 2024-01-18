import "./header.css";

function Header() {
  return (
    <header>
      <div className="header-content">
        <div className="header-icon">
          <img src="/image/shop4.png" alt="Picture of the author" />
        </div>
        <div className="menu">
          <div className="header-menu">
            <ul>
              <li>Home</li>
              <li>Brends</li>
              <li>About Us</li>
              <li>Contacts</li>
            </ul>
          </div>
          <div className="header-menu1">
            <ul>
              <div>
                <li>Home</li>
                <li>Brends</li>
              </div>
              <div>
                <li>About Us</li>
                <li>Contacts</li>
              </div>
            </ul>
          </div>
          <div className="header-logGet">
            <a href="/login" className="logIn">
              Log In
            </a>
            <a href="#" className="getStart">
              Get Started
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
