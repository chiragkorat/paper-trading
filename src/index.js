import React from "react";
import { render } from "react-dom";
import Dashboard from "./components/dashboard";
import "./app.css";
import LandingPage from "./components/LandingPage/LandingPage";
import Course from "./components/Course";
import Chart from "./components/chart";


class App extends React.Component {
  render() {
    const locationData = window.location.pathname
    return (
      <div className="AppContainer">
        {
          locationData === '/course' ? <Course /> : locationData === '/course' ? <Course /> : locationData === '/chart' ? <Chart /> : <LandingPage />
        }
      </div >
    );
  }
}

render(<App />, document.getElementById("root"));
