import menus from "mockData/menus";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Normalize from "styles/Normalize";
import Reset from "styles/Reset";
import theme from "styles/theme";

import Layout from "./pages/Layout/Layout";
import NotFound from "./pages/NotFound/NotFound";
import VendingMachine from "./pages/VendingMachine/VendingMachine";
import Wallet from "./pages/Wallet/Wallet";

const [indexPage, walletPage] = menus;

const App = () => {
  return (
    <div className="App">
      <Reset />
      <Normalize />

      <ThemeProvider theme={theme}>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <Routes>
            <Route path={indexPage.path} element={<Layout menusData={menus} />}>
              <Route path={indexPage.path} element={<VendingMachine />} />
              <Route path={walletPage.path} element={<Wallet />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
};

export default App;
