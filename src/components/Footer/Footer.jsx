import "./Footer.css";
import logo from "../../assets/logo.svg";

const PRODUCT_LINKS = [
  { label: "How it works", href: "#how-it-works" },
  { label: "Trust", href: "#trust" },
  { label: "Integration", href: "#integration" },
  { label: "Security", href: "#security" },
  { label: "Contact", href: "#contact" },
];

const COMPANY_LINKS = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
];

const GitHubIcon = () => (
  <svg viewBox="0 0 16 16" className="footer__social-icon">
    <path
      fill="#FFFFFF"
      d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82a7.6 7.6 0 0 1 4 0c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8Z"
    />
  </svg>
);

const LinkedInIcon = () => (
  <svg viewBox="0 0 16 16" className="footer__social-icon">
    <path
      fill="#FFFFFF"
      d="M14.82 0H1.18C.53 0 0 .52 0 1.16v13.68C0 15.48.53 16 1.18 16h13.64c.65 0 1.18-.52 1.18-1.16V1.16C16 .52 15.47 0 14.82 0ZM4.75 13.64H2.38V6h2.38v7.64Zm-1.19-8.7a1.38 1.38 0 1 1 0-2.75 1.38 1.38 0 0 1 0 2.75Zm10.08 8.7h-2.38V9.92c0-.9-.02-2.05-1.25-2.05-1.25 0-1.44.97-1.44 1.98v3.79H6.19V6h2.29v1.04h.03c.32-.6 1.09-1.25 2.25-1.25 2.41 0 2.85 1.58 2.85 3.64v4.21Z"
    />
  </svg>
);

const XIcon = () => (
  <svg viewBox="0 0 16 16" className="footer__social-icon">
    <path
      fill="#FFFFFF"
      d="M12.6 0h2.45L9.9 6.77 15.9 16h-4.7l-3.68-5.4L3.3 16H.85l5.46-7.19L.6 0h4.82l3.33 4.94L12.6 0Zm-.86 14.4h1.36L4.32 1.5H2.86l8.88 12.9Z"
    />
  </svg>
);

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__top">
          <div className="footer__brand">
            <div className="footer__logo">
              <span className="footer__logo-icon">
                <img src={logo} alt="" className="footer__logo-img" />
              </span>
              <span className="footer__logo-text">Sole</span>
            </div>
            <p className="footer__tagline">
              Developing our MVP · non-custodial · built for MENA merchants
            </p>
          </div>

          <div className="footer__links">
            <ul className="footer__link-col">
              {PRODUCT_LINKS.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="footer__link">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            <ul className="footer__link-col">
              {COMPANY_LINKS.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="footer__link">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <span className="footer__copyright">
            © 2026 Sole. All rights reserved.
          </span>

          <div className="footer__socials">
            <a
              href="https://github.com"
              className="footer__social-link"
              aria-label="GitHub"
              target="_blank"
              rel="noreferrer"
            >
              <GitHubIcon />
            </a>
            <a
              href="https://linkedin.com"
              className="footer__social-link"
              aria-label="LinkedIn"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedInIcon />
            </a>
            <a
              href="https://x.com"
              className="footer__social-link"
              aria-label="X"
              target="_blank"
              rel="noreferrer"
            >
              <XIcon />
            </a>
          </div>
        </div>
      </div>

      {/* Faint oversized watermark logo mark on the right */}
      <div className="footer__watermark" aria-hidden="true">
        <img src={logo} alt="" className="footer__watermark-img" />
      </div>
    </footer>
  );
};

export default Footer;