import englishStrings from "../constants/localization/englishStrings";
import arabicStrings from "../constants/localization/arabicStrings";
import frenchStrings from "../constants/localization/frenchStrings";
import germanStrings from "../constants/localization/germanStrings";

class LocalizationService {

  getLangConstants = (langCode) => {
    langCode = langCode || 'en';

    const englishString = { ...englishStrings };

    let langConstant = {};

    switch (langCode) {
      case "ar":
        langConstant = { ...arabicStrings };
        break;

      case "de":
        langConstant = { ...germanStrings };
        break;

      case "en":
        langConstant = { ...englishStrings };
        break;

      case "fr":
        langConstant = { ...frenchStrings };
        break;

    }
    
    return { ...englishString, ...langConstant };
  }
}

export const localizationService = new LocalizationService();
