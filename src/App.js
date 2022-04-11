import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import Navbar from "./components/Navbar";
// import Header from "./components/Header";
// import Particles, { StartValueType } from "react-particles-js";
// import Aboutus from "./components/Aboutus";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import completewebsite from "./components/completewebsite";
import aboutme from "./components/aboutme";
import home from "./components/home";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact={true} path="/" component={completewebsite}></Route>
          <Route exact={true} path="/aboutme" component={aboutme}></Route>

          <Route exact={true} path="/home" component={home}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
