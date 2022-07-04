import { createTheme } from "@mui/material";

const theme = createTheme({
    color: {
        primary: "rgb(39,49,112)",
        primaryAlpha: (a) => `rgba(39,49,112, ${a})`,

        primaryActive: "rgb(49, 62, 140)",
        primaryHover: "rgb(26, 32, 74)",
        textOnPrimary: "whitesmoke",

        secondary: "rgb(214, 175, 55)",
        secondaryAlpha: (a) => `rgba(214, 175, 55, ${a})`,

        secondaryHover: "#edbd28",
        secondaryActive: "#bf9d32"
    },
    iconSize: "1.5rem"
});

export default theme;
