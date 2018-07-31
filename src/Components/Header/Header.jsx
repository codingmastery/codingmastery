import React from "react";
import { NavLink, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./Header.scss";

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      open: false
    };
    this.navRef = React.createRef();
  }

  closeMenu(e) {
    console.log("closed");
    this.setState(() => ({
      open: false
    }));
  }

  toogleMenu(e) {
    console.log("toggled");
    this.setState(prevState => ({
      open: !prevState.open
    }));
  }

  render() {
    return (
      <header className="grid-container-header">
        <div className="left-side" />
        <div className="center">
          <div className="content">
            <Link to="/">
              <h3>Coding Mastery</h3>
            </Link>
          </div>
        </div>
        <div className="right-side">
          {this.state
            .open ? // <div className="openMenu" onClick={e => this.toogleMenu(e)}>
          //   <FontAwesomeIcon
          //     className="content"
          //     icon={["fa", "times"]}
          //     color="black"
          //     fixedWidth
          //   />
          // </div>
          null : (
            <div className="closedMenu" onClick={e => this.toogleMenu(e)}>
              <FontAwesomeIcon
                className="content"
                icon={["fa", "bars"]}
                color="black"
                fixedWidth
              />
            </div>
          )}
        </div>
        {this.state.open ? (
          <div className="nav" ref={this.navRef}>
            <nav>
              <ul>
                <li>
                  <div className="grid-container-header">
                    <div className="left-side" />
                    <div className="center">
                      <div className="content">
                        <Link to="/" onClick={e => this.closeMenu(e)}>
                          <h3>Coding Mastery</h3>
                        </Link>
                      </div>
                    </div>
                    <div className="right-side">
                      <div
                        className="openMenu"
                        onClick={e => this.toogleMenu(e)}
                      >
                        <FontAwesomeIcon
                          className="content"
                          icon={["fa", "times"]}
                          color="black"
                          fixedWidth
                        />
                      </div>
                    </div>
                  </div>
                </li>
                <li className="item">
                  <NavLink
                    activeClassName="active"
                    exact
                    to="/"
                    onClick={e => this.closeMenu(e)}
                  >
                    <h3>Home</h3>
                  </NavLink>
                </li>
                <li className="item">
                  <NavLink
                    activeClassName="active"
                    exact
                    to="/contact"
                    onClick={e => this.closeMenu(e)}
                  >
                    <h3>Contact</h3>
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>
        ) : null}
      </header>
    );
  }
}
export default Header;
