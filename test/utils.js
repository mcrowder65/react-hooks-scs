import React from "react";
import { render as rtlRender } from "@testing-library/react";
import {
  createMuiTheme,
  MuiThemeProvider as ThemeProvider,
} from "@material-ui/core/styles";
import { theme } from "../src/reusable/theme";
import { Router as BrowserRouter } from "react-router-dom";
import { createBrowserHistory } from "history";

const browserHistory = createBrowserHistory();
const muiTheme = createMuiTheme(theme);
export const render = (component) => {
  return rtlRender(
    <BrowserRouter history={browserHistory}>
      <ThemeProvider theme={muiTheme}>{component}</ThemeProvider>
    </BrowserRouter>,
  );
};
