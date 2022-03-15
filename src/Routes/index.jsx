import { Switch, Route } from "react-router-dom";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/"></Route>
      <Route path="/login"></Route>
      <Route path="/signup"></Route>
      <Route path="/dashboard/"></Route>
      <Route path="/profile"></Route>
    </Switch>
  );
};
