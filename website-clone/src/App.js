import React, { Component } from "react";
import "./App.css";
import "./reset.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      menuStatus: "close"
    };
  }

  toggleMenu = () => {
    if (this.state.menuStatus === "open") {
      this.setState({ menuStatus: "close" });
    } else {
      this.setState({ menuStatus: "open" });
    }
  };

  render() {
    return (
      <div className="app">
        <nav className="nav-bar">
          <div className="nav-container">
            <div className="nav-title">Start Boostrap</div>
            <button className="menu-btn" onClick={() => this.toggleMenu()}>
              MENU <i className="fas fa-bars" />
            </button>
            <ul className="right-nav">
              <li>SERVICES</li>
              <li>PORTFOLIO</li>
              <li>ABOUT</li>
              <li>TEAM</li>
              <li>CONTACT</li>
            </ul>
          </div>
        </nav>

        <div className={this.state.menuStatus}>
          <ul>
            <li>SERVICES</li>
            <li>PORTFOLIO</li>
            <li>ABOUT</li>
            <li>TEAM</li>
            <li>CONTACT</li>
          </ul>
        </div>

        <header className="header">
          <div className="header-container">
            <h2>Welcome To Our Studio</h2>
            <h1>IT'S NICE TO MEET YOU</h1>
            <button>TELL ME MORE</button>
          </div>
        </header>

        <section className="services">
          <div className="services-container">
            <div className="services-title">
              <h1>SERVICES</h1>
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </div>
            <div className="articles">
              <div className="block">
                <div className="icon">
                  <i className="fas fa-shopping-cart" />
                </div>
                <h1>E-Commerce</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Minima maxime quam architecto quo inventore harum ex magni,
                  dicta impedit.
                </p>
              </div>
              <div className="block">
                <div className="icon">
                  <i className="fas fa-laptop" />
                </div>
                <h1>Responsive Design</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Minima maxime quam architecto quo inventore harum ex magni,
                  dicta impedit.
                </p>
              </div>
              <div className="block">
                <div className="icon">
                  <i className="fas fa-lock" />
                </div>
                <h1>Web Security</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Minima maxime quam architecto quo inventore harum ex magni,
                  dicta impedit.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
