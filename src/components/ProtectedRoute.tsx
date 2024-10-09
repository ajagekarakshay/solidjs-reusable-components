import { Component, JSX } from 'solid-js';
import { useAuth } from '~/contexts/AuthContext';
import { Navigate } from '@solidjs/router';

interface ProtectedRouteProps {
  children: JSX.Element;
}

const ProtectedRoute: Component<ProtectedRouteProps> = (props) => {
  const user = useAuth();

  return user ? props.children : <Navigate href="/login" />;
};

export default ProtectedRoute;