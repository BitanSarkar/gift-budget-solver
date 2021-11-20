import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import useWindowDimensions from './WindowDim';
import MobileView1 from './components/MobileView1';
import DesktopView1 from './components/DesktopView1';
import MobileView2 from './components/MobileView2';
import DesktopView2 from './components/DesktopView2';
const App = () =>  {
  const ratio = Math.floor(useWindowDimensions())>0?1:0;
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/budget-finder">
            {ratio===1?<MobileView2/>:<DesktopView2/>}
          </Route>
          <Route path="/">
            {ratio===1?<MobileView1/>:<DesktopView1/>}
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
