import "./Footer.css";

const Footer = () => {
  return (
    <footer className="Footer">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <polygon fill="white" points="0,0 100,0 0,100" />
      </svg>
      <div className="container">
        <div className="Footer-content">
          <div>
            Created with React at
            <a
              href="http://lereacteur.io"
              target="_blank"
              rel="noopener noreferrer"
            >
              Le Reacteur
            </a>
            by
            <a
              href="http://ludovic-six.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ludovic Six
            </a>
          </div>
          <div>© 2021 MARVEL</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
