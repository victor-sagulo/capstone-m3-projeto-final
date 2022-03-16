import { Switch, Route } from "react-router-dom";
import SingupForm from "../Components/SingupForm";
import Login from "../Pages/Login";
import SignUp from "../Pages/Signup";
import HomePage from "../Pages/Home";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <HomePage/>
      </Route>
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
