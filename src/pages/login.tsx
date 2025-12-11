import React, { useState } from 'react';
import { useForm } from '@mantine/form';

import { useLogin } from '../hooks/useLogin';
import Logo from '../components/svg/Logo';
import Arrow2 from '../components/svg/Arrow2';
import FormInput from '../components/FOrmInput';
import Lock from '../components/svg/Lock';
import Letter from '../components/svg/Letter';

export default function Login() {
    const login = useLogin();
    const [currentStep, setCurrentStep] = useState<'login' | '2fa'>('login');

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

    const handleSubmit = (values: typeof form.values) => {
        console.log(values);
        // login.mutate({ email: 'admin@example.com', password: '12345', rememberUser: false });
    }

    return <>
        <section className="flex p-[100px] min-h-screen h-screen">
            <div className="flex flex-col justify-between  w-[50%] h-full bg-[#0056A4] p-12">
                <div className="flex items-center gap-3 text-white font-semibold text-[20px]">
                    <div className="p-2 rounded-lg bg-white"><Logo color="#0056A4" size={24} /></div>
                    FinanceHub
                </div>
                <div className="text-white flex flex-col gap-4">
                    <h2 className="text-[36px] font-semibold leading-[45px]">Enterprise-grade financial <br /> management for modern teams</h2>
                    <h4 className="opacity-80 text-[18px]">Secure, scalable, and built for multi-tenant organizations.</h4>
                </div>
                <div className="text-[14px] text-white/60">2024 FinanceHub. All rights reserved.</div>
            </div>

            <div className="flex justify-center items-center w-[50%] h-full bg-[#F8F8F8]">
                <div className="w-[450px]">
                    {currentStep === 'login' ? <>
                        <h3 className="text-[24px] font-semibold text-[#0B0B0B] mb-2">Welcome Back</h3>
                        <h4 className="text-[16px] text-[#636363] mb-8">Sign in to your account to continue</h4>
                        <form onSubmit={form.onSubmit((values) => handleSubmit(values))} noValidate className="flex flex-col gap-6">
                            <div><FormInput form={form} Icon={<Letter />} name="email" label="Email address" type="email" placeholder="you@company.com" required /></div>
                            <div><FormInput form={form} Icon={<Lock />} name="password" label="Password" type="password" placeholder="Enter your password" required /></div>

                            <button type="submit" className="flex gap-2 justify-center items-center border-none py-2 w-full cursor-pointer text-white rounded-md bg-[#0056A4] hover:bg-[#0056A4]/90 transition-all duration-300">
                                Sign In <Arrow2 />
                            </button>
                        </form>
                    </> : <>

                    </>}
                </div>
            </div>
        </section>
    </>;
}
