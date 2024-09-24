import { createTheme } from "@mui/material/styles";
import typography from "./typography";
import shadows from "./shadows";

export const theme = createTheme({
  shadows,
  typography,
  palette: {
    mode: "dark",
    divider: "rgb(238, 245, 255)",
    background: {
      default: "rgb(134, 182, 246)",
      paper: "rgb(238, 245, 255)",
    },
    text: {
      primary: "rgb(180, 212, 255)",
      secondary: "rgb(23, 107, 135)",
    },
    primary: {
      main: "rgb(180, 212, 255)",
    },
    secondary: {
      main: "rgb(134, 182, 246)",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 0,
        },
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: "rgba(23, 107, 135, 0.8)",
          border: "2px solid rgb(238, 245, 255)",
          borderRadius: 20,
        },
      },
    },
  },
});

export default theme;
