import "./Header.css";
import logo from "../../assets/logo.svg";

const NAV_LINKS = [
  { label: "How it works", href: "#how-it-works" },
  { label: "Trust", href: "#trust" },
  { label: "Integrations", href: "#integrations" },
];

const Header = () => {
  return (
    <header className="header">
      <div className="header__margin">
        <div className="header__container">
          {/* Logo */}
          <a href="/" className="header__logo-link">
            <div className="header__logo">
              <div className="header__logo-icon">
                <img src={logo} alt="Sole logo" className="header__logo-img" />
              </div>
              <span className="header__logo-text">Sole</span>
            </div>
          </a>

          {/* Navigation */}
          <nav className="header__nav">
            <div className="header__nav-links">
              {NAV_LINKS.map((link) => (
                <a key={link.label} href={link.href} className="header__nav-link">
                  {link.label}
                </a>
              ))}

              <button type="button" className="header__lang-btn">
                <span className="header__flag" aria-hidden="true">
                  <svg viewBox="0 0 20 16" className="header__flag-svg">
                    <rect width="20" height="16" fill="#012169" />
                    <path d="M0 0L20 16M20 0L0 16" stroke="#FFFFFF" strokeWidth="3.2" />
                    <path d="M0 0L20 16M20 0L0 16" stroke="#C8102E" strokeWidth="1.2" />
                    <path d="M10 0V16M0 8H20" stroke="#FFFFFF" strokeWidth="5.4" />
                    <path d="M10 0V16M0 8H20" stroke="#C8102E" strokeWidth="2" />
                  </svg>
                </span>
                English
              </button>
            </div>

            <div className="header__actions">
              <a href="/request-access" className="header__cta">
                Request Access
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;