import { Switch, Route } from "react-router-dom";
import SingupForm from "../Components/SingupForm";
import Login from "../Pages/Login";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/"></Route>
      <Route path="/login">
        <Login/>
      </Route>
      <Route path="/signup"></Route>
      <Route path="/dashboard/"></Route>
      <Route path="/profile"></Route>
      <Route path="/games"></Route>
    </Switch>
  );
};

export default Routes;
