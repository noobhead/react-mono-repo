import React from "react";
import reactIconLogo from "../assets/icons/react-icon.svg";
import githubCatWhite from "../assets/icons/github-cat-white.svg";
import linkedInWhite from "../assets/icons/linkedin-white.svg";

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  renderHomeNavigation = () => {
    return (
      <div className="home-navigation" onClick={() => window.location.replace("/")}>
        <img className="app-logo" src={reactIconLogo} alt="logo" />
        <h1>Scratch Pad</h1>
      </div>
    )
  }

  renderActions = () => {
    return (
      <div className="header-actions">
        <div className="action-group">
          <div className="action-item" onClick={() => window.open("https://react.dev/")}>Learn React</div>
          <div className="action-item">Blog</div>
        </div>
        <div className="action-group">
          <div className="action-item" onClick={() => window.open("https://in.linkedin.com/in/devjatin")}>
            <img src={linkedInWhite} alt="linkedIn"/>
          </div>
          <div className="action-item" onClick={() => window.open("https://github.com/noobhead")}>
            <img src={githubCatWhite} alt="github"/>
          </div>
        </div>
      </div>
    )
  }

  render() {
    return (
      <header>
        <div className="app-header">
          { this.renderHomeNavigation() }
          { this.renderActions() }
        </div>
      </header>
    )
  }
}

export default Header;
