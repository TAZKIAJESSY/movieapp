import { Switch, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage.js";
import AboutPage from "./pages/AboutPage.js";
import DiscoverMoviePage from "./pages/DiscoverMoviePage.js";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/" component={HomePage} />

        <Route exact path="/about" component={AboutPage} />
        <Route exact path="/discover" component={DiscoverMoviePage} />
      </Switch>
    </div>
  );
}

export default App;
