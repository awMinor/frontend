import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import LoginPage from "./components/LoginPage";
import { Provider, connect } from "react-redux";
import store from "./stores/UserStore";
import RegistrationPage from "./components/RegistrationPage";
import LayoutPage from "./components/LayoutPage";
import Dashboard from "./components/Dashboard";
import Projects from "./components/Projects";

function App({ isLoggedIn }) {
  return (
    <Router>
      <Routes>
        <Route path="/" element={isLoggedIn ? <LayoutPage /> : <Navigate to="/login" />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/projects" element={<Projects />} />
        </Route>

        <Route path="/login" element={!isLoggedIn ? <LoginPage /> : <Navigate to="/" />} />
        <Route path="/registration" element={!isLoggedIn ? <RegistrationPage /> : <Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

const mapStateToProps = (state) => ({
  isLoggedIn: state.isLoggedIn,
});

const ConnectedApp = connect(mapStateToProps)(App);

function RootComponent() {
  return (
    <Provider store={store}>
      <ConnectedApp />
    </Provider>
  );
}

export default RootComponent;
