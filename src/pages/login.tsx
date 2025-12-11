import React from 'react';
import { useLogin } from '../hooks/useLogin';

export default function Login() {
    const login = useLogin();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        login.mutate({ email: 'admin@example.com', password: '12345', rememberUser: false });
    }

    return <>
        <section className="login">
            {/* temp */}
            <button className="text-4xl" onClick={handleSubmit}>login</button>
        </section>
    </>;
}
