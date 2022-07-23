export const Header = () => {
  return (
    <div className="Header">
      <header className="header">
        <div className="shadow"></div>
        <div className="header-wrapper container_everything">
          <h1 className="main_text">
            Nasza firma oferuje najlepszej jakości produkty
          </h1>
          <p className="subtext">Nie wierz nam na słowo - sprawdź nas</p>
          <a className="header_link_offer" href="#offer">
            oferta
          </a>
        </div>
      </header>
    </div>
  );
};
