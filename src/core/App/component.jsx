import { MuiThemeProvider } from "@material-ui/core/styles";
import { StylesProvider } from "@material-ui/styles";
import { createTheme } from "core/config/theme";
import React from "react";
import { jss } from "core/config/jss";
import { Qoute } from "pages";

export function AppPresentation() {
  return (
    <StylesProvider jss={jss}>
      <MuiThemeProvider theme={createTheme()}>{<Qoute />}</MuiThemeProvider>
    </StylesProvider>
  );
}
