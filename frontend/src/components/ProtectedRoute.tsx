import React from 'react';
import toast from 'react-hot-toast';
import { Navigate } from 'react-router-dom';
import { isAdmin, isAuthenticated } from 'src/service/auth';

interface ProtectedRouteProps {
	requiredRole?: string;
	element: React.ReactNode;
}

// Convert the component to use async/await properly with React's useEffect and useState
const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
	element,
	requiredRole,
}) => {
	const [isAuthorized, setIsAuthorized] = React.useState<boolean | null>(null);

	React.useEffect(() => {
		const checkAuthorization = async () => {
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

	if (!isAuthorized) {
		toast.error('You are not authorized to access this page');
		return <Navigate to="/" />;
	}

	return element;
};

export default ProtectedRoute;
