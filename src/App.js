import React, { useState } from "react";

import "./App.css";
import Header from "./component/Header/index";
import { ThemeProvider, createMuiTheme, Paper } from "@material-ui/core";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import Main from "./component/body/main";
import Detail from "./component/body/Detail";
import Footer from "./component/footer/footer";

function App() {
  const [dark, setDark] = useState(false);
  const theme = createMuiTheme({
    palette: {
      type: dark ? "dark" : "light",
    },
  });
  const [count, setCount] = useState(0);
  const sendIT = () => {
    setCount(count + 1);
  };

  const themeChanger = () => {
    setDark(!dark);
  };
  const [value, setValue] = useState([100, 1000]);
  const priceChanger = (event, newValue) => {
    setValue(newValue);
  };
  const [fillterdPrice, setFillterdPrice] = useState([0, 1000]);
  const fillterPrice = () => {
    setFillterdPrice(value);
  };
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Paper style={{ height: "fitContent", minHeight: "100vh" }}>
          <div className="App">
            <Header
              onPriceChange={priceChanger}
              value={value}
              onFillter={fillterPrice}
              onThemeChange={themeChanger}
              dark={dark}
              count={count}
            />
            <Switch>
              <Route exact path="/">
                <Redirect to="/products" />
              </Route>
              <Route exact path="/products">
                <Main fillterdPrice={fillterdPrice} sendToStore={sendIT} />
              </Route>
              <Route path="/products/:id">
                <Detail />
              </Route>
            </Switch>
            <Footer />
          </div>
        </Paper>
      </ThemeProvider>
    </Router>
  );
}

export default App;
