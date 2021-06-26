import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/home";
import LogIn from "./pages/log-in/login";
import PrivateRoute from "./shared/utility/private-router";
import SignUp from "./pages/sign-up/sign-up";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/log-in" component={LogIn} />
        <Route exact path="/sign-up" component={SignUp} />
        <PrivateRoute exact path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
