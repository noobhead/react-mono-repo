import React from "react";
import ScratchPad from "./ScratchPad";

class HomePage extends React.Component {
  constructor(props) {
    super(props);
  }

  renderHomePageText = () => (
    <div className="home-page-intro-text">
      <span>React lets you build user interfaces out of individual pieces called components. Create your own React components like Thumbnail, LikeButton, and Video. Then combine them into entire screens, pages, and apps.</span>
    </div>
  )

  renderScratchPad = () => (
    <ScratchPad />
  )

  render() {
    return (
      <div className="content-container"> 
        {this.renderHomePageText()}
        {this.renderScratchPad()}
      </div>
    )
  }
}

export default HomePage;
