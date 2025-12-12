import React, { useState } from 'react';
import { useForm } from '@mantine/form';
import { useNavigate } from 'react-router-dom';

import Logo from '../components/svg/Logo';
import { fetchUser } from '../api';
import LoginForm from '../components/pages/login/LoginForm';
import TwoFactorForm from '../components/pages/login/TwoFactorForm';

export default function Login() {
    const [currentStep, setCurrentStep] = useState<'login' | '2fa'>('2fa');
    const [user, setUser] = useState();
    const navigate = useNavigate();

    const form = useForm({
        mode: 'uncontrolled',
        validateInputOnChange: true,
        initialValues: {
            email: '',
            password: '',
            rememberUser: false,
        },
        validate: {
            email: (value) => {
                if (!value) return 'Email is required';
                const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                return pattern.test(value) ? null : 'Email address is invalid';
            },
            password: (value) => {
                if (!value) return 'Password is required';
                return value.length > 2 ? null : 'Password is too short';
            },
        },
    });

    const handleSubmitLogin = async (values: typeof form.values) => {
        // demo version - not secure
        const user = await fetchUser(values.email, values.password);

        setUser(user);
        setCurrentStep('2fa');
    }

    const handleSubmit2fa = async (value: string) => {
        if (value !== '123456') throw new Error();

        if (form.values.rememberUser) {
            // save user to local storage
            localStorage.setItem('token', 'user-token');
            localStorage.setItem('user', JSON.stringify(user));
        } else {
            // save user to session storage
            sessionStorage.setItem('token', 'user-token');
            sessionStorage.setItem('user', JSON.stringify(user));
        }

        navigate('/');
    }

    const handleGoBack = () => {
        setCurrentStep('login');
    }

    return <>
        <section className="flex p-25 min-h-screen h-screen">
            <div className="flex flex-col justify-between  w-[50%] h-full bg-blue1 p-12">
                <div className="flex items-center gap-3 text-white font-semibold text-[20px]">
                    <div className="p-2 rounded-lg bg-white"><Logo color="#0056A4" size={24} /></div>
                    FinanceHub
                </div>
                <div className="text-white flex flex-col gap-4">
                    <h2 className="text-[36px] font-semibold leading-11.25">Enterprise-grade financial <br /> management for modern teams</h2>
                    <h4 className="opacity-80 text-[18px]">Secure, scalable, and built for multi-tenant organizations.</h4>
                </div>
                <div className="text-[14px] text-white/60">2024 FinanceHub. All rights reserved.</div>
            </div>

            <div className="flex justify-center items-center w-[50%] h-full bg-white2">
                <div className="w-112.5 flex flex-col gap-8">
                    {currentStep === 'login' ? <>
                        <LoginForm form={form} handleSubmit={handleSubmitLogin} />
                    </> : <>
                        <TwoFactorForm handleGoBack={handleGoBack} handleSubmit={handleSubmit2fa} />
                    </>}
                </div>
            </div>
        </section>
    </>;
}
