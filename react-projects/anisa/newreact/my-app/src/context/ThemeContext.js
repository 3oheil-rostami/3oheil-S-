import { createContext } from "react";

const ThemContext = createContext()

export const Themes = {
  dark: { color: 'white', backgroundColor: 'black' },
  light: { color: 'black', backgroundColor: 'darkgray' }
}

export default ThemContext