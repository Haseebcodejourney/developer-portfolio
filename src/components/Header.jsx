import "../styles/components/_header.scss";

const logoUrl = new URL('../assets/images/Saleem Logo.svg', import.meta.url).href;

const Header = () => {
  return (
    <header>
      <nav
        className="navbar navbar-expand-lg navbar-light"
        id="main-header"
      >
        <div className="container-fluid header-inner-wrapper">
          {/* Logo */}
          <a className="navbar-brand" href="/" aria-label="logo">
            <img
              src={logoUrl}
              alt="Logo"
              width="139"
              height="35"
              className="lazy-load"
            />
          </a>

          {/* Mobile Toggle Button */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span>
              <svg
                width="32px"
                height="32px"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
              >
                <path
                  fill="#fff"
                  fillRule="evenodd"
                  d="M19 4a1 1 0 01-1 1H2a1 1 0 010-2h16a1 1 0 011 1zm0 6a1 1 0 01-1 1H2a1 1 0 110-2h16a1 1 0 011 1zm-1 7a1 1 0 100-2H2a1 1 0 100 2h16z"
                />
              </svg>
            </span>
          </button>

          {/* Navbar Links */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Home
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#features">
                  Features
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#portfolio">
                  Portfolio
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#clients">
                  Clients
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#contact-us">
                  Contact
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link-btn" id="downloadButton" href="#">
                  RESUME
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;