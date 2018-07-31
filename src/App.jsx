import React from "react";
import { Switch, Route } from "react-router-dom";
import routesBank from "../config/config";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import "./App.scss";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

class App extends React.Component {
  render() {
    //console.log(library);
    library.add(fab, faBars, faTimes);

    //console.log(faBars);
    const routes = routesBank.map(item => {
      return (
        <Route
          exact
          path={item.path}
          component={item.container}
          key={Math.random()}
        />
      );
    });

    return (
      <div className="App">
        <Header />
        <Switch>{routes}</Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
