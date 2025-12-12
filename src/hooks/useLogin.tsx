import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

export const useLogin = () => {
    const navigate = useNavigate();

    return useMutation({
        mutationFn: async ({ email, password, rememberUser }: { email: string; password: string, rememberUser: boolean }) => {
            // sensitive data as params because im too lazy to create a server ¯\_(ツ)_/¯
            const res = await fetch(`http://localhost:3001/users?email=${email}&password=${password}`);
            const users = await res.json();

            if (users.length === 0) throw new Error('Invalid credentials');

            return { user: users[0], rememberUser };
        },
        onSuccess: ({ user, rememberUser }) => {
            if (rememberUser) {
                // save user to local storage
                localStorage.setItem('token', 'user-token');
                localStorage.setItem('user', JSON.stringify(user));
            } else {
                // save user to session storage
                sessionStorage.setItem('token', 'user-token');
                sessionStorage.setItem('user', JSON.stringify(user));
            }

            navigate('/');
        },
    }).mutate;
}
