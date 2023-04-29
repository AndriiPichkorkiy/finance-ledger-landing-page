// import React from 'react'
import { ThemeProvider } from "styled-components";
import Home from "./pages/Home";

const theme = {
  textColorMain: "#FFF",
  textColorSecond: "#333333",

  accentColor: "#28A745",
  placeHolderColor: "#808080",

  bgSection: "#FFF",
  bgBlogSection: "#0284D0",
  bgCallbackSection: "#F4F4F4",

  borderRadius: "5px",

  paddingMobile: "20px",
  paddingTablet: "32px",
  paddingLaptop: "28px",

  btnType1Bg: "#28A745",
  btnType1BgHover: "#2EBF4F",

  btnType2Bg: "inherit",
  btnType2TextColor: "#28A745",
  btnType2BgHover: "#FFF",

  btnType3Bg: "inherit",
  btnType3TextColor: "#0284D0",
  btnType3BgHover: "#FFF",

}

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>

  )
}
