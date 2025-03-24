import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export function ProtectedRoute({ children }) {
    const navigate = useNavigate();

    useEffect(() => {
        const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
        if (!isLoggedIn) {
            navigate('/login', { replace: true });
        }
    }, [navigate]);

    return children;
}