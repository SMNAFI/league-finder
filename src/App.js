import Home from "./components/Home/Home";
import NotFound from "./components/NotFound/NotFound";
import LeagueDetails from "./components/LeagueDetails/LeagueDetails";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path = '/'>
          <Home/>
        </Route> 
        <Route path = "/home">
          <Home/>
        </Route>
        <Route path = "/league/:id">
          <LeagueDetails/>
        </Route>
        <Route path = "*">
          <NotFound/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
