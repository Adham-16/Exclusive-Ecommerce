import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

export function Home() {
    const navigate = useNavigate();

    useEffect(() => {
        if (!localStorage.getItem("isLoggedIn")) {
            navigate("/login", { replace: true });
        } else {
            window.history.replaceState(null, "", "/home");
        }
    }, [navigate]);

    const handleLogout = () => {
        localStorage.removeItem("isLoggedIn");
        navigate("/login", { replace: true });

    };
    return (
        <div>Home</div>
    )
}
