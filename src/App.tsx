import Router from "Router";
import { GlobalStyle } from "style/global.style";
import { dark, light } from "style/theme";
import { ThemeProvider } from "styled-components";
import { useAppSelector } from "hooks/useStore";

export const App = () => {
  const isDark = useAppSelector(({ theme }) => theme.value);

  return (
    <ThemeProvider theme={isDark ? dark : light}>
      <Router />
      <GlobalStyle />
    </ThemeProvider>
  );
};

export default App;
