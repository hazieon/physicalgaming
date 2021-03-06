import "./App.css";
// import { Switch, Router, Route, Link } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ScrollToTop from "./Components/ScrollToTop";
import Landing from "./Components/Landing";
import Logo from "./Components/Logo";

function App() {
  return (
    <div className="App">
      {/* <Logo />
      <Landing /> */}
      <Logo />
      <Router>
        <div>
          <nav className="nav-bar">
            <ul>
              {/* <li>
                <Link to="/">
                  <Logo />
                </Link>
              </li> */}
              <Link to="/News">
                <li className="pages" id="creative">
                  News
                </li>
              </Link>
            </ul>
          </nav>

          <ScrollToTop>
            <Switch>
              <Route path="/">
                <Landing />
              </Route>
            </Switch>
          </ScrollToTop>
        </div>
      </Router>
    </div>
  );
}

export default App;
