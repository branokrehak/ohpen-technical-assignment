import React, { useEffect, useState } from 'react';
import { TbEyeClosed } from 'react-icons/tb';
import { IoEyeOutline } from 'react-icons/io5';

import type { FormInputProps } from '../@types';
import Alert from './svg/Alert';
import CheckMark from './svg/CheckMark';

export default function FormInput<T extends object, P extends object = {}>(props: FormInputProps<T, P>) {
    const hasIcon = !!props.Icon;
    const isError = !!props.form.errors[props.name];
    const isValid = isError === false && props.form.values[props.name];
    const isPasswordInput = props.name === 'password';
    const [showPassword, setShowPassword] = useState(false);
    const [isFocused, setIsFocused] = useState(false);

    return <>
        <label className="flex flex-col gap-1">
            <span className={`text-[14px] font-semibold ${isError ? 'text-red1' : ''}`}>{props.label} {props.required && <span className="text-red1 ml-1.5">*</span>}</span>
            <span className="h-9 relative">
                <input className={`
                    bg-white/20 rounded-md border w-full h-9
                    focus:outline-none focus:border-blue1
                    ${isPasswordInput ? 'pr-10' : 'pr-3'}
                    ${hasIcon ? 'pl-10' : 'pl-3'}
                    ${isError ? 'border-red1' : isValid ? 'border-green1' : 'border-white1'}
                    ${isFocused && isValid ? 'shadow-[0_0_0_4px_#008F4A]' : 'shadow-xs'}
                `}
                    {...props.form.getInputProps(props.name)}
                    onFocus={(e) => {
                        setIsFocused(true);
                        props.form.getInputProps(props.name).onFocus?.(e);
                    }}
                    onBlur={(e) => {
                        setIsFocused(false);
                        props.form.getInputProps(props.name).onBlur?.(e);
                    }}
                    type={showPassword ? 'text' : props.type}
                    placeholder={props.placeholder}
                />
                {hasIcon && <span className="absolute left-3 top-[50%] translate-y-[-50%] pointer-events-none">{props.Icon}</span>}
                {isPasswordInput && (
                    <span className="absolute p-2.5 -mx-2.5 right-3 top-[50%] translate-y-[-50%] cursor-pointer" onClick={() => setShowPassword(!showPassword)}>
                        {showPassword ? <TbEyeClosed size={16} color="#636363" /> : <IoEyeOutline size={16} color="#636363" />}
                    </span>
                )}
            </span>
        </label>
        {isError && <span className="mt-2 flex items-center text-[12px] text-red1 leading-4 gap-1"><Alert /> {props.form.errors[props.name]}</span>}
        {isValid && <span className="mt-2 flex items-center text-[12px] text-green1 leading-4 gap-1"><CheckMark color="#008B52" /> Valid</span>}
    </>;
}
