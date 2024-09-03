import { ThemeOptions } from "@mui/material";

export default function getTheme(): ThemeOptions {
    return {
        components: {
            MuiButton: {
                styleOverrides: {
                    text: {
                        fontFamily: 'roboto'
                    }
                }
            }
        }
    }
}
