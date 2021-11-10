import React from "react";
import { Switch, Route, Router, Link } from "react-router-dom";
import {
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";

import Signin from "./components/Signin";
import Signup from "./components/Signup";

const generateClassName = createGenerateClassName({
  productionPrefix: "au",
});

export default function App({ history, onSignIn }) {
  return (
    <div>
      <StylesProvider generateClassName={generateClassName}>
        <Router history={history}>
          {/* <Link to="/auth/signin">YESSSS</Link> */}
          <Switch>
            <Route path="/auth/signin">
              <Signin onSignIn={onSignIn} />
            </Route>

            <Route path="/auth/signup">
              <Signup onSignIn={onSignIn} />
            </Route>
          </Switch>
        </Router>
      </StylesProvider>
    </div>
  );
}
