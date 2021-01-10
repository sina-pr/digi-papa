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
import { useSelector } from "react-redux";
import Cart from "./component/body/cart";

function App() {
  const dark = useSelector((state) => state.theme.darkTheme);

  const theme = createMuiTheme({
    palette: {
      type: dark ? "dark" : "light",
    },
  });
  const [count, setCount] = useState(0);
  const sendIT = () => {
    setCount(count + 1);
  };

  /*const themeChanger = () => {
    setDark(!dark);
  };*/
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
        <Paper style={{ height: "fitContent", minHeight: "100%" }}>
          <div className="App">
            <Header
              onPriceChange={priceChanger}
              value={value}
              onFillter={fillterPrice}
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
              <Route path="/cart">
                <Cart />
              </Route>
            </Switch>
          </div>
        </Paper>
      </ThemeProvider>
    </Router>
  );
}

export default App;
