import { useEffect, useState } from "react";
import "./header.css";
import logo from "../../assets/logo.jpg";
import { HiPhone } from "react-icons/hi";

const Header = () => {
  const [small, setSmall] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () =>
        setSmall(window.pageYOffset > 200)
      );
    }
  }, []);
  return (
    <header className={`header ${small ? "small" : ""}`}>
      <div className="header-container">
        <div className="phone-container">
          <h5 className="call">CALL 24/7: </h5>
          <a href="tel:+1-877-351-1933">
            <HiPhone size={40} />
          </a>
          <h2 className="espanol">Se habla español!</h2>
        </div>
        <div className="logo-container">
          <img src={logo} alt="Aviva Insurance Adjusters" className="logo" />
        </div>
        <div className="menu">{/* <MenuIcon /> */}</div>
      </div>
    </header>
  );
};

export default Header;
