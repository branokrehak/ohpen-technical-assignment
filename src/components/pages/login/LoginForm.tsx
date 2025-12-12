import React from 'react';
import type { UseFormReturnType } from '@mantine/form';

import FormInput from '../../FormInput';
import Arrow2 from '../../svg/Arrow2';
import { Checkbox } from '@mantine/core';
import Letter from '../../svg/Letter';
import Lock from '../../svg/Lock';

type FormProps = {
    email: string,
    password: string,
    rememberUser: boolean,
};

export default function LoginForm({ form, handleSubmit }: { form: UseFormReturnType<FormProps, (props: FormProps) => FormProps>, handleSubmit: (values: FormProps) => Promise<void> }) {
    return <>
        <div>
            <h3 className="text-[24px] font-semibold text-black1 mb-2">Welcome Back</h3>
            <h5 className="text-[16px] text-gray1">Sign in to your account to continue</h5>
        </div>
        <form onSubmit={form.onSubmit((values) => handleSubmit(values))} noValidate className="flex flex-col gap-6">
            <div><FormInput form={form} Icon={<Letter />} name="email" label="Email address" type="email" placeholder="you@company.com" required /></div>
            <div><FormInput form={form} Icon={<Lock />} name="password" label="Password" type="password" placeholder="Enter your password" required /></div>

            <Checkbox label="Remember me" color="#0056A4" {...form.getInputProps('rememberUser', { type: 'checkbox' })} />

            <button type="submit" className="flex gap-2 justify-center items-center border-none py-2 w-full cursor-pointer text-white rounded-md bg-blue1 hover:bg-blue1/90 transition-all duration-300">
                Sign in <Arrow2 />
            </button>
        </form>
        <div className="flex justify-center">
            <span className="text-gray1 mr-1.5 ">Don't have an account?</span>
            <button className="text-blue1 cursor-pointer hover:text-blue1/75"><b>Contact your administrator</b></button>
        </div>
        <div className="text-gray1">
            Demo: Email <span className="bg-white4 py-1 px-2 rounded-sm mx-1.5">admin@example.com</span>
            Password <span className="bg-white4 py-1 px-2 rounded-sm mx-1.5">12345</span>
        </div>
    </>;
}
