import {
    CssBaseline,
    ThemeProvider as MuiThemeProvider,
    createTheme,
  } from "@mui/material";
  import React from "react";
  
  const appTheme = createTheme({
    palette: {
      primary: {
        main: "#2E054E", // Dark purple from header
        light: "#561381", // Light purple from submenu
      },
      secondary: {
        main: "#9a71b3", // Light purple text
      },
      components: {
        MuiMenuItem: {
          styleOverrides: {
            root: {
              backgroundColor: "#561381", // Light purple dropdown items
              "&:hover": {
                backgroundColor: "#63268B", // Darker purple on hover
              },
            },
          },
        },
      },
      text: {
        primary: "#ffffff",
        secondary: "#ffffffab", // Semi-transparent white for placeholder
      },
      background: {
        default: "#ffffff",
        paper: "#ffffff",
      },
    },
    typography: {
      fontFamily: "'Montserrat', Helvetica, Arial, sans-serif",
      h1: {
        fontSize: "48px",
        fontWeight: 700,
        lineHeight: 1.2,
      },
      h2: {
        fontSize: "32px",
        fontWeight: 700,
        lineHeight: 1.2,
      },
      h3: {
        fontSize: "24px",
        fontWeight: 600,
        lineHeight: 1.3,
      },
      body1: {
        fontSize: "16px",
        fontWeight: 400,
        lineHeight: "normal",
      },
      body2: {
        fontSize: "16px",
        fontWeight: 400,
        fontStyle: "italic",
        lineHeight: "normal",
      },
      button: {
        fontSize: "16px",
        fontWeight: 500,
        textTransform: "none",
      },
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            backgroundColor: "#ffffff",
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: "none",
            borderRadius: "15px",
            padding: "8px 16px",
          },
          containedPrimary: {
            backgroundColor: "#e91e63", // Pink button from the screenshot
            color: "#ffffff",
            "&:hover": {
              backgroundColor: "#c2185b",
            },
          },
        },
      },
      MuiAppBar: {
        styleOverrides: {
          root: {
            backgroundColor: "#2e054e",
            boxShadow: "none",
          },
        },
      },
      MuiInputBase: {
        styleOverrides: {
          root: {
            borderRadius: "15px",
            border: "1px solid #561381",
            color: "#ffffffab",
            "&::placeholder": {
              color: "#ffffffab",
              opacity: 1,
            },
          },
        },
      },
      MuiSelect: {
        styleOverrides: {
          root: {
            borderRadius: "15px",
            backgroundColor: "transparent",
            color: "#ffffff",
          },
        },
      },
      MuiMenuItem: {
        styleOverrides: {
          root: {
            fontFamily: "'Montserrat', Helvetica, Arial, sans-serif",
            fontSize: "16px",
          },
        },
      },
      MuiIconButton: {
        styleOverrides: {
          root: {
            color: "#ffffff",
          },
        },
      },
      MuiDivider: {
        styleOverrides: {
          root: {
            backgroundColor: "#561381",
          },
        },
      },
    },
  });
  
  export const ThemeProvider = ({ children }) => {
    return (
      <MuiThemeProvider theme={appTheme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    );
  };
  