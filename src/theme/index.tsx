import { createTheme } from "@mui/material/styles"
import { alpha } from "@mui/material/styles"
const Theme = createTheme({
    typography: {
        fontFamily: [
            'Open Sans',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif'
        ].join(','),
    },
    palette: {

        action: {
            disabled: alpha("#ffffff", .5),
            // disabledBackground:  "#f00",
        },

        primary: {
            light: "#24bee5",
            main: "#217dbb",
            dark: "#3498db",

        },
        common: {
            white: "#ffffff",
            black: "#000000",
        },
        text: {
            primary: "#ffffff",
            secondary: "#ffffff",
        },

        secondary: {
            light: "#cccccc",
            dark: "#696969",
            main: "#777777",
            contrastText: "#333333"
        },
    }
})

export default Theme;