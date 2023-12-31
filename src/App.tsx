import { Outlet, Link, useLocation } from "react-router-dom";
import logo from "./assets/IMG_7844.jpg"
import { useProducts } from "./context/Context";
import { useEffect } from "react";


const App = () => {
  const { products, langEng, updateLang } = useProducts();

  const location = useLocation();

  useEffect(() => {
    const hash = location.hash;
    if (hash) {
      const targetEl = document.querySelector(hash);
      if (targetEl) {
        targetEl.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.scrollTo(0, 0); // Scroll to top when no hash present
    }
  }, [location]);

  return (
    <div className="body-container">
    <header>
      <div>
        <nav>
          <div id="logo-container">
            <Link to="/">
              <img id="logo" src={logo} alt="logo" />
            </Link>
          </div>
          <Link to="/">
            <h1 id="cafe-title" className="pt-1">{langEng ? 'Tea Collective' : '티컬렉티브'}</h1>
          </Link>
          {langEng ? (
            <div id="navigation-container">
            <p>directory</p>
            <ul id="nav-list-1">
              <Link to="/">home</Link>
              <Link to="/directions">directions</Link>
              <Link to="/reservation">reserve</Link>
            </ul>
            <p>order online</p>
            <ul id="nav-list-2">
              <li>
                <Link to="#matcha">matcha</Link>
              </li>
              <li>
                <Link to="/#sencha">sencha</Link>
              </li>
              <li>
                <Link to="/#hojicha">hojicha</Link>
              </li>
              <li>
                <Link to="/#gyokuro">gyokuro</Link>
              </li>
            </ul>
          </div>) :  (
            <div id="navigation-container">
            <p>메뉴</p>
            <ul id="nav-list-1">
              <Link to="/">홈</Link>
              <Link to="/directions">위치 정보</Link>
              <Link to="/reservation">예약</Link>
            </ul>
            <p>주문하기</p>
            <ul id="nav-list-2">
              <li>
                <Link to="tea-collective#matcha">말자</Link>
              </li>
              <li>
                <Link to="/#sencha">센차</Link>
              </li>
              <li>
                <Link to="/#hojicha">호지차</Link>
              </li>
              <li>
                <Link to="gyokuro">교쿠로</Link>
              </li>
            </ul>
          </div>
          )}
        </nav>
      </div>
    </header>
    <div className="container">
      <div className="row row-content">
        <div
          id="top-title"
          className="d-xs-flex d-sm-none mt-2 col col-lg-10 offset-lg-1"
        >
          <h1>{langEng ? "Tea Collective" : "티컬렉티브"}</h1>
          <div className="d-flex justify-content-around">
            <Link to="/">{langEng ? "home" : "홈"}</Link>
            <Link to="/directions">{langEng ? "directions": "위치 정보"}</Link>
            <Link to="/reservation">{langEng ? "reserve": "예약하기"}</Link>
          </div>
        </div>
        <div className="d-xs-none d-md-block mt-2 col col-lg-10 offset-lg-1">
          <div className="d-flex flex-row justify-content-end">
            <Link to="/cart" className="btn">
              {langEng ? 'cart' : '장바구니'} (<b>{products.length}</b>)
            </Link>
            <button
              id="lang-btn"
              className="btn"
              type="button"
              data-bs-toggle="tooltip"
              lang="ko"
              data-bs-placement="bottom"
              title="언어 바꾸기"
              onClick={() => updateLang()}
            >
              {langEng ?' lang (kr)' : '언어 (en)'}
            </button>
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  </div>
  );
};

export default App;
