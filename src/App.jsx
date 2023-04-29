// import React from 'react'
import { ThemeProvider } from "styled-components";
import Home from "./pages/Home";

import "./styles/scss.scss";
import 'react-notifications/lib/notifications.css';
import { NotificationContainer } from 'react-notifications';
import { theme } from "./helpers/theme";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Home />
      <NotificationContainer />
    </ThemeProvider>
  )
}
