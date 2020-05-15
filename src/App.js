import React from "react";
import HomeScreen from "./screens/HomeScreen";
import Menu from "./screens/Menu";
import Cart from "./screens/Cart";
import { BrowserRouter } from "react-router-dom";
import { Route } from "react-router";
import Header from "./components/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Route exact path="/" component={HomeScreen} />
      <Route path="/menu" component={Menu} />
      <Route path="/cart" component={Cart} />
    </BrowserRouter>
  );
}

export default App;
