import { createMuiTheme } from "@material-ui/core/styles";

const YoutubeCloneTheme = createMuiTheme({
  palette: {
    primary: {
      main: "#898989",
    },
    secondary: {
      main: "#FF0102",
    },
    background: {
      default: "#F9F9F9",
    },
  },
  overrides: {
    MuiAppBar: {
      root: {
        boxShadow: "none",
      },
    },
  },
});

export default YoutubeCloneTheme;
