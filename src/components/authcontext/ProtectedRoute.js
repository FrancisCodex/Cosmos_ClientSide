import { useRouter } from 'next/router';
import { useEffect, useContext } from 'react';
import { AuthContext } from '@/components/authcontext/AuthProvider';

const ProtectedRoute = ({ children }) => {
  const Router = useRouter();
  const { isAuthenticated, authenticating } = useContext(AuthContext);
  const publicRoutes = ['/auth/login', '/auth/register', '/', '/api/user/verify', '/login/requestchangepass', '/auth/resetpassword'];

  useEffect(() => {
    if (!authenticating && !isAuthenticated && !publicRoutes.includes(Router.pathname)) {
      Router.replace('/auth/login');
    }
  }, [isAuthenticated, Router, authenticating]);

  return children;
};

export default ProtectedRoute;