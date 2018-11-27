import React, { Component } from "react";

export const themes = {
  light: {
    foreground: "#000000",
    background: "#eeeeee"
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222"
  }
};

export const language = "English";

export const ThemeContext = React.createContext({ themes });
export const LocaleContext = React.createContext({ language });
