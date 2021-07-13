import SignIn from "./page/singin";
import SignUp from "./page/singup";
import ProductPage from "./page/productPage";
import { BrowserRouter, Switch, Route, } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/singup" component={SignUp} />
        <Route exact path="/singin" component={SignIn} />
        <PrivateRoute path="/" component={ProductPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
