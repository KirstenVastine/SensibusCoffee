import * as React from "react";
import { Route } from "react-router-dom";

export type AppRouteProps = {
  component: React.ComponentType<any>;
  layout: React.ComponentType<any>;
  path?: string | string[];
  exact?: boolean;
};

const AppRoute: React.SFC<AppRouteProps> = (props) => {
  const { component: Component, layout: Layout, ...rest } = props;
  const token = localStorage.getItem("token");
  return (
    <Route
      {...rest}
      render={(props) => (
        <Layout>
          <Component {...props} />
        </Layout>
      )}
    />
  );
};

export default AppRoute;
