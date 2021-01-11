import React from "react";
import logo from "../Assets/images/icons/logo-sm.png";
import cart from "../Assets/images/icons/cart-sm.png";
import search from "../Assets/images/icons/search-icon-sm.png";
import cartLast from "../Assets/images/icons/cart-sm.png";
function Header() {
  return (
    <div>
      <div className=" nav-wrapper fixed-top">
        <nav className="navbar navbar-expand-md navbar-dark">
          <div className="container">
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#collapsibleNavbar"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <a className="navbar-brand mx-auto" href="/">
              <img src={logo} />
            </a>
            <a
              className="nav-link js-scroll-trigger d-md-none d-lg-none"
              href="/cart/"
            >
              <img src={cart} /> <a />
            </a>
            <div className="collapse navbar-collapse " id="collapsibleNavbar">
              <ul className="navbar-nav nav-justified w-100">
                <li className="nav-item">
                  <a className="nav-link js-scroll-trigger" href="/mac/">
                    Mac
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link js-scroll-trigger" href="/Iphone/">
                    iphone
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link js-scroll-trigger" href="/Ipad/">
                    ipad
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link js-scroll-trigger" href="/Watch/">
                    watch
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link js-scroll-trigger" href="/Tv/">
                    tv
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link js-scroll-trigger" href="/Music/">
                    Music
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link js-scroll-trigger" href="/Support/">
                    Support
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link js-scroll-trigger" href="/search/">
                    <img src={search} />
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link js-scroll-trigger d-none d-sm-none d-md-block "
                    href="/cart/"
                  >
                    <img src={cartLast} />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Header;
