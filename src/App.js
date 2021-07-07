import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/home";
import LogIn from "./pages/log-in/login";
import PrivateRoute from "./shared/utility/private-router";
import SignUp from "./pages/sign-up/sign-up";
import ResetPassword from "./pages/reset-password/reset-password";
import { AuthProvider } from "./contexts/auth-context";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <AuthProvider>
          <Route exact path="/log-in" component={LogIn} />
          <Route exact path="/sign-up" component={SignUp} />
          <Route exact path="/forgot-password" component={ResetPassword} />
          <PrivateRoute exact path="/" component={Home} />
        </AuthProvider>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
