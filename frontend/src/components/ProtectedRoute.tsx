import React from 'react';
import toast from 'react-hot-toast';
import { Navigate } from 'react-router-dom';
import { useUser } from 'src/context/UserContext';
import { isAdmin, isAuthenticated } from 'src/service/auth';

interface ProtectedRouteProps {
  requiredRole?: string;
  element: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ element, requiredRole }) => {
  const [isAuthorized, setIsAuthorized] = React.useState<boolean | null>(null);
  const { isLoggedIn, setIsLoggedIn } = useUser();

  React.useEffect(() => {
    const checkAuthorization = async () => {
      setIsLoggedIn(isAuthenticated());

      if (!isAuthenticated()) {
        setIsAuthorized(false);
        return;
      }

      const isAdminResult = await isAdmin(requiredRole);
      setIsAuthorized(isAdminResult);
    };

    checkAuthorization();
  }, [requiredRole]);

  if (isAuthorized === null) {
    return null;
  }

  if (!isLoggedIn) {
    toast.error('Please log in to access this page');
    return <Navigate to=".." />;
  }

  if (!isAuthorized) {
    toast.error('You are not authorized to access this page');
    return <Navigate to="/" />;
  }

  return element;
};

export default ProtectedRoute;
