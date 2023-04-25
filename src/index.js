import React from "react";
import { Provider } from "react-redux";
import store from "./stores/UserStore";
import RootContainer from "./containers/RootContainer";
import LayoutPage from "./components/LayoutPage";

let root = RootContainer();
root.render(<Provider store={store}>
  <LayoutPage />
</Provider>);
