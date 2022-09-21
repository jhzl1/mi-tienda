import { createTheme } from "@mui/material"

export const theme = createTheme({
  palette: {
    primary: {
      main: "#003890",
      contrastText: "rgba(255,255,255,0.87)",
    },
    secondary: {
      main: "#bfdbfe",
      contrastText: "#003890",
      dark: "#d2d2d2",
    },
  },
  typography: {
    allVariants: {
      fontFamily: "Poppins",
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: true,
        variant: "contained",
      },
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: "10px",
          fontWeight: "400",
          "&:disabled": {
            backgroundColor: "#d4d4d4",
            color: "#fafafa",
            cursor: "not-allowed",
            pointerEvents: "all !important",
            "&:hover": {
              backgroundColor: "#a3a3a3",
            },
          },
        },
      },
    },
  },
})
