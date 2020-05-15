import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Classes from "../styles/Header.module.css";

export class Header extends Component {
  render() {
    //import variables using ES 6 feature
    const { Header, CartCount, TextLeft, TextRight } = Classes;

    //returning JSX
    return (
      <Header>
        <div className={`container-fluid ${Header}`}>
          <div className="row">
            <div className={`col-md-4 ${TextLeft}`}>
              <NavLink to="/" exact>
                Home
              </NavLink>
              <NavLink to="/menu" exact>
                Menu
              </NavLink>
              <NavLink to="/myOrders" exact>
                My Orders
              </NavLink>
              <NavLink
                to="/cart"
                className={`desktop-hidden ${TextRight}`}
                exact
              >
                <i
                  className="fas fa-shopping-cart"
                  style={{ position: "relative" }}
                >
                  <div className={CartCount}>0</div>
                </i>
              </NavLink>
            </div>
            <div className="col-md-4">
              <br />
              <br />
              <img src="/assets/logo.png" alt="Pizzaria Logo" />
            </div>
            <div className="col-md-4 mobile-hidden">
              <NavLink to="/cart" exact>
                <i
                  className="fas fa-shopping-cart fa-2x"
                  style={{ position: "relative" }}
                >
                  <div className={CartCount}>0</div>
                </i>
              </NavLink>
            </div>
          </div>
        </div>
      </Header>
    );
  }
}

export default Header;
