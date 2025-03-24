import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export function AuthCheck({ children }) {
    const navigate = useNavigate();

    useEffect(() => {
        const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
        if (isLoggedIn) {
            navigate('/Home', { replace: true });
        }
    }, [navigate]);

    return children;
}