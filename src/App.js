import SignIn from "./page/singin";
import SignUp from "./page/singup";
import { BrowserRouter, Switch, Route, Link, Redirect } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/singup">
          <SignUp />
        </Route>
        <Route path="/singin">
          <SignIn />
        </Route>
        <Route path="/">
          <Redirect to="/singin" />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
