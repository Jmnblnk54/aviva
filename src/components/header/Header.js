import { useEffect, useState } from "react";
import "./header.css";
import logo from "../../assets/logo.jpg";

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
        <div className="logo-container">
          <img src={logo} alt="Aviva Insurance Adjusters" className="logo" />
        </div>
        <div className="menu">{/* <MenuIcon /> */}</div>
      </div>
    </header>
  );
};

export default Header;
