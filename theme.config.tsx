import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { Inter } from "next/font/google";

const inter = Inter({ weight: "400", subsets: ["latin"] });

const theme = createTheme({
  typography: {
    fontFamily: inter.style.fontFamily,
  },
});

export const ThemeConfig: React.FC<any> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};
