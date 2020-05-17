import React from 'react';
import headerLogo from '../img/header-logo.png';
import { NavLink, useHistory } from 'react-router-dom';


export default function Navigation() {
  const history = useHistory();

  const openCart = () => {
    history.push('/cart')
  }

  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-light">
      <a className="navbar-brand" href="/">
        <img src={headerLogo} alt="Bosa Noga" />
      </a>

      <div className="collapse navbar-collapse" id="navbarMain">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <div className="nav-link"><NavLink exact to="/" activeClassName="active">Главная</NavLink></div>
          </li>
          <li className="nav-item">
            <div className="nav-link"><NavLink to="/catalog" activeClassName="active">Каталог</NavLink></div>
          </li>
          <li className="nav-item">
            <div className="nav-link"><NavLink to="/about" activeClassName="active">О магазине</NavLink></div>
          </li>
          <li className="nav-item">
            <div className="nav-link"><NavLink to="/contacts" activeClassName="active">Контакты</NavLink></div>
          </li>
        </ul>
        <div>
          <div className="header-controls-pics">
            <div data-id="search-expander" className="header-controls-pic header-controls-search"></div>
            {/* <!-- Do programmatic navigation on click to /cart.html --> */}
            <div className="header-controls-pic header-controls-cart" onClick={openCart}>
              <div className="header-controls-cart-full">1</div>
              <div className="header-controls-cart-menu"></div>
            </div>
          </div>
          <form data-id="search-form" className="header-controls-search-form form-inline invisible">
            <input className="form-control" placeholder="Поиск" />
          </form>
        </div>
      </div>
    </nav>
  )
}
