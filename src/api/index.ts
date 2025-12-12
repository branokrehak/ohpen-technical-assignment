export const fetchUser = async (email: string, password: string) => {
    const res = await fetch(`http://localhost:3001/users?email=${email}&password=${password}`);
    const users = await res.json();

    if (users.length === 0) throw new Error('Invalid credentials');

    return users[0];
}
