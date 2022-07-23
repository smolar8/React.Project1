export const Nav = () => {
  return (
    <>
      <nav className="nav">
        <div className="nav-wrapper container_everything">
          <div className="nav-logo">
            <a className="logo-link" href="#">
              Gabinet Kosmetyczny "Twój Salon Urody"
            </a>
          </div>
          <ul className="nav-links">
            <li>
              <a className="nav-links-clik" href="#about_us">
                o nas
              </a>
            </li>
            <li>
              <a className="nav-links-clik" href="#offer">
                oferta
              </a>
            </li>
            <li>
              <a className="nav-links-clik disable" href="contact">
                kontakt
              </a>
            </li>
          </ul>
          <div className="mobile-menu">
            <img src="hamburger.png" alt="" />
          </div>
        </div>
      </nav>
    </>
  );
};
