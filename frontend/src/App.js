import "./App.css";
import Homepage from "./components/Homepage";
import Signup from "./components/Signup";
import Signin from "./components/Singin";
import Dashboard_Std from "./components/DashBoard_Std";
import Dashboard_Class from "./components/DashBoard_Class";
import Dashboard_Hygine from "./components/DashBoard_Hygine";
import Login from "./components/Login/login"
import Dashboard_Snakes from "./components/DashBoard_Snakes";
import Dashboard_Puzzle from "./components/DashBoard_Puzzle";
import Form from "./components/Form";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/home" exact component={Homepage} />
          <Route path="/signup" exact component={Signup} />
          <Route path="/signin" exact component={Signin} />
          <Route path="/dashboardstd" exact component={Dashboard_Std} />
          <Route path="/dashboardclass" exact component={Dashboard_Class} />
          <Route path="/dashboardhygine" exact component={Dashboard_Hygine} />
          <Route path="/dashboardsnakes" exact component={Dashboard_Snakes} />
          <Route path="/dashboardpuzzle" exact component={Dashboard_Puzzle} />
          <Route path="/" exact component={Login} />
          <Route path="/form" exact component={Form} />
          <Homepage />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
