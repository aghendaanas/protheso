// src/components/AdminLogin.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../components/AdminLogin.css"

const AdminLogin = () => {
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const ADMIN_PASSWORD = '565666'; // Replace with your admin password

        if (password === ADMIN_PASSWORD) {
            navigate('/submissions');
        } else {
            alert('Incorrect password');
        }
    };

    return (
        <div className="admin-login-container">
            <h2>Admin Login</h2>
            <form onSubmit={handleSubmit} className="admin-login-form">
                <label>
                    Mot de passe:
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </label>
                <button type="submit">Connecter</button>
            </form>
        </div>
    );
};

export default AdminLogin;
