class StyleUtils {

  setStyleSheetForRtlLtr = (langDir) => {
    if ("rtl" == langDir) {
      import("../styles/styles-rtl.scss");
    } else {
      import("../styles/styles-ltr.scss");
    }

  }

}

export const styleUtils = new StyleUtils();
