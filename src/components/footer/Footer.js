import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p>
        <span>© Copyright </span>
        <span>{new Date().getFullYear()}</span>
        <span>
          <a href="https://avivapa.com/"> Aviva Insurance Adjusters & </a>
        </span>
        <span>
          <a href="https://www.blankdigitaldesign.com">Blank Digital Design </a>
        </span>
      </p>
    </footer>
  );
};

export default Footer;
