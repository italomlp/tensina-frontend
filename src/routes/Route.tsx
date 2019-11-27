import React from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';

import AuthLayout from '../pages/_layouts/auth';
import DefaultLayout from '../pages/_layouts/default';
import { useGlobalState } from '../store';

type Props = {
  component?: React.Component | React.FunctionComponent;
  isPrivate?: boolean;
} & RouteProps;

export default function RouteWrapper({
  component: Component,
  isPrivate,
  ...rest
}: Props) {
  const [{ signed }] = useGlobalState('auth');

  if (!signed && isPrivate) {
    return <Redirect to="/login" />;
  }

  const Layout = signed ? DefaultLayout : AuthLayout;

  if (!Component) {
    return <Route {...rest} />;
  }

  return (
    <Route
      {...rest}
      render={(props: any) => (
        <Layout>
          <Component {...props} />
        </Layout>
      )}
    />
  );
}
