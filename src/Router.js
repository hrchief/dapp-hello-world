import React, { Suspense, lazy } from "react";
import Spinner from "./components/Spinner";
import BaseLayout from "./components/BaseLayout";

// ** Import Route Providers
import { Router, Route, Switch, Redirect } from "react-router-dom";
import { createBrowserHistory } from "history";

const LandingPage = lazy(() => import("./pages/LandingPage"));

const history = createBrowserHistory({
  basename: "",
  forceRefresh: false,
});

const AppRouter = () => {
  return (
    <Router history={history}>
      <Suspense fallback={<Spinner />}>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/landing" />
          </Route>
          <BaseLayout>
            <Route path="/landing" exact component={LandingPage} />
          </BaseLayout>
        </Switch>
      </Suspense>
    </Router>
  );
};

export default AppRouter;
