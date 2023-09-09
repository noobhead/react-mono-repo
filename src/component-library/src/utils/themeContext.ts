import React from 'react';
import { ThemeData, defaultThemeConstants } from '../constants/globalConstants';

const defaultThemeData: ThemeData = {
  language: defaultThemeConstants.language,
  primaryFontColor: defaultThemeConstants.primaryFontColor,
  secondaryFontColor: defaultThemeConstants.secondaryFontColor,
  primaryThemeColor: defaultThemeConstants.primaryThemeColor,
  secondaryThemeColor: defaultThemeConstants.secondaryThemeColor
}

export const ThemeContext = React.createContext({...defaultThemeData});