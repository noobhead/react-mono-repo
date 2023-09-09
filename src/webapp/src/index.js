import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header";
import "./styles/styles-ltr.scss";
import HomePage from "./components/HomePage";
import { ConfigProvider } from "antd";
import { defaultTheme } from "./constants/globalConstants";


class App extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div
        style={{
          "--primary-color": defaultTheme.primaryThemeColor,
          "--secondary-color": defaultTheme.secondaryThemeColor,
          "--primary-font-color": defaultTheme.primaryFontColor,
          "--secondary-font-color": defaultTheme.secondaryFontColor,
        }}
      >
        <ConfigProvider theme={{token:{
          colorPrimary: defaultTheme.primaryThemeColor
        }}}>
          <Header />
          <HomePage />
        </ConfigProvider>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
