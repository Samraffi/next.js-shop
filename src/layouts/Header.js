import Link from "next/link";
import "./header.css";

function Header () {
  return (
    <header>
      <div className="header-content">
        <div className="header-icon">
          <img src="/image/shop4.png" alt="Logo" />
        </div>
        <div className="menu">
          <div className="header-menu">
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/basket">Basket</Link></li>
              <li><Link href="/order">Order</Link></li>
            </ul>
          </div>
          <div className="header-menu1">
            <ul>
              <div>
                <li>Home</li>
                <li>Brands</li>
              </div>
              <div>
                <li>About Us</li>
                <li>Contacts</li>
              </div>
            </ul>
          </div>
          <div className="header-log-get">
            <Link href="/login">Log In</Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
