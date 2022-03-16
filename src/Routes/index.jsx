import { Switch, Route } from "react-router-dom";
import SingupForm from "../Components/SingupForm";
import Login from "../Pages/Login";
import SignUp from "../Pages/Signup";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/"></Route>
      <Route path="/login">
        <Login/>
      </Route>
      <Route path="/signup">
        <SignUp/>
      </Route>
      <Route path="/dashboard/"></Route>
      <Route path="/profile"></Route>
      <Route path="/games"></Route>
    </Switch>
  );
};

export default Routes;
