// import React from 'react'
import { ThemeProvider } from "styled-components";
import Home from "./pages/Home";

const theme = {
  textColorMain: "#FFF",
  textColorSecond: "#333333",

  accentColor: "#28A745",
  placeHolderColor: "#808080",

  roundRadius: "5px",

  btnType1Bg: "#28A745",
  btnType1BgHover: "#2EBF4F",
  btnType2Bg: "inherit",
  btnType2BgHover: "#FFF",
  btnType3Bg: "inherit",
  btnType3BgHover: "#FFF",

}

export default function App() {
  return (
    <ThemeProvider theme={theme}>

      <Home />
    </ThemeProvider>

  )
}
