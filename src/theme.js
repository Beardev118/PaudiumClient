import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";

import { queryByText } from "@testing-library/react";

let theme = createMuiTheme({
  props: {
    MuiButtonBase: {
      disableRipple: true,
    },
    MuiAppBar: {
      color: "transparent",
    },
  },
  palette: {
    primary: {
      main: "#1E61B9",
      contrastText: "#FFF",
    },
    inherit: {
      main: "#FFF",
    },
    secondary: {
      main: "#FFF",
      contrastText: "#FFF",
    },
    background: {
      default: "#1D2C56",
      paper: "#FFF",
    },
  },

  typography: {},

  overrides: {
    // List Item
    MuiListItem: {
      divider: {
        borderBottom: "1px solid rgba(255,255,255,0.4)",
      },
      container:{
        listStyleType:'none',
      }
    },

    MuiListItemText: {
      primary: {
        color: "#FFF",
      },
      secondary: {
        color: "rgba(255,255,255,0.4)",
      },
    },

    MuiButton: {
      root: {
        height: "56px",
      },
    },

    MuiTabPanel: {
      root: {
        padding: 0,
      },
    },
    MuiIconButton: {
      root: {
        padding: 0,
      },
    },
    MuiBottomNavigationAction: {
      root: {
        color: "rgba(255,255,255,0.4)",
        "&$selected": {
          color: "#FFF",
        },
        disableRipple: true,
      },
    },

    MuiBottomNavigation: {
      root: {
        backgroundColor: "#1D2C56",
        borderTop: "solid 1px rgba(255,255,255,0.3)",
      },
    },
  },
});

theme = responsiveFontSizes(theme);
export default theme;
