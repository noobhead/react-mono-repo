import React from "react";
import { ThemeData, defaultThemeConstants } from "../constants/globalConstants";
import { styleUtils } from "../utils/styleUtils.js";
import { ThemeContext } from "../utils/themeContext";

export default function <T extends ThemeData>(Wrapped : React.ComponentType<T>) {
  return class Themed extends React.Component<T> {
    componentRef: HTMLDivElement | null = null;
    constructor(props : T) {
      super(props);
    }

    componentDidMount(): void {
      styleUtils.setStyleSheetForRtlLtr(this.props.language == 'ar' ? 'rtl': 'ltr');
      this.componentRef.style.setProperty("--primary-color", this.props.primaryThemeColor || defaultThemeConstants.primaryThemeColor);
      this.componentRef.style.setProperty("--secondary-color", this.props.secondaryThemeColor || defaultThemeConstants.secondaryThemeColor);
      this.componentRef.style.setProperty("--primary-font-color", this.props.primaryFontColor || defaultThemeConstants.primaryFontColor);
      this.componentRef.style.setProperty("--secondary-font-color", this.props.secondaryFontColor || defaultThemeConstants.secondaryFontColor);
    }

    render() {
      const themeData = {
        language: this.props.language || 'en',
        primaryThemeColor: this.props.primaryThemeColor || defaultThemeConstants.primaryThemeColor,
        secondaryThemeColor: this.props.secondaryThemeColor || defaultThemeConstants.secondaryThemeColor,
        primaryFontColor: this.props.primaryFontColor || defaultThemeConstants.primaryFontColor,
        secondaryFontColor: this.props.secondaryFontColor || defaultThemeConstants.secondaryFontColor
      }
      return (
        <ThemeContext.Provider value={{...themeData}}>
          <div className="component-library" ref={ref => this.componentRef = ref}>

            <Wrapped {...this.props}/>

          </div>
        </ThemeContext.Provider>
      )
    }
  }
}
