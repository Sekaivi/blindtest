'use client';
import { createContext, useContext, useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const router = useRouter();
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(null);
    const [error, setError] = useState(null);

    // Au chargement, restore user et token depuis localStorage
    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        const storedToken = localStorage.getItem('token');
        if (storedUser && storedToken) {
            setUser(JSON.parse(storedUser));
            setToken(storedToken);
        }
    }, []);

    const login = async (mail, password) => {
        try {
            const res = await fetch('/api/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ mail, password }),
            });
            const data = await res.json();
            if (!res.ok) {
                setError(data.error || 'Erreur de connexion');
                return false;
            }
            setUser(data.user);
            setToken(data.token);
            // Persister dans localStorage
            localStorage.setItem('user', JSON.stringify(data.user));
            localStorage.setItem('token', data.token);
            setError(null);
            router.push('/jeu/page.js');
            return true;
        } catch (err) {
            setError('Erreur serveur');
            return false;
        }
    };

    const register = async ({ name, mail, password }) => {
        try {
            const res = await fetch('/api/auth/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, mail, password }),
            });
            const data = await res.json();
            if (!res.ok) {
                setError(data.error || 'Erreur lors de la création du compte');
                return false;
            }
            setError(null);
            return true;
        } catch (err) {
            setError('Erreur serveur');
            return false;
        }
    };

    const logout = () => {
        setUser(null);
        setToken(null);
        setError(null);
        localStorage.removeItem('user');
        localStorage.removeItem('token');
        router.push('/login');
    };

    return (
        <AuthContext.Provider value={{ user, token, error, login, register, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

