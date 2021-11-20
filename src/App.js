import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import GiftDeciderBody from './components/GiftDeciderBody';
const App = () =>  {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/">
            <GiftDeciderBody/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
