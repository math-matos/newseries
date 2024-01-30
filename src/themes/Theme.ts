import { createTheme } from "@mui/material";

export const Theme = createTheme({
    typography: {
      fontFamily: [
        'Roboto',
        'Inter',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
    },
    palette: {
        primary: {
            main: '#FED916'
        },
        secondary: {
            main: '#121212'
        }
    },
    components: {
      MuiSelect: {
        styleOverrides: {
          root: {
            border: 'none',
            "&:focus": {
              border: 'none'
            },
            fontFamily: 'Inter',
            fontSize: '1.5rem',
            outline: 'none',
            borderBottom: '1px solid #0067B1'
          }
        }
      } 
    }
  });