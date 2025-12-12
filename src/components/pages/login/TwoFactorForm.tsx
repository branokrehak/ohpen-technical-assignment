import React, { useEffect, useState } from 'react';

import Arrow2 from '../../svg/Arrow2';
import { PinInput } from '@mantine/core';
import Shield from '../../svg/Shield';
import Alert from '../../svg/Alert';

export default function TwoFactorForm({ handleGoBack, handleSubmit }: { handleGoBack: () => void, handleSubmit: (value: string) => Promise<void> }) {
    const [isError, setIsError] = useState(false);
    const [inputPin, setInputPin] = useState('');
    const [count, setCount] = useState(10);
    const [isRunning, setIsRunning] = useState(true);
    const isButtonDisabled = inputPin.length !== 6;

    useEffect(() => {
        if (isRunning && count > 0) {
            const timer = setTimeout(() => setCount(count - 1), 1000);
            return () => clearTimeout(timer);
        } else if (count === 0) {
            setIsRunning(false);
        }
    }, [count, isRunning]);

    const handleInputSubmit = async () => {
        try {
            await handleSubmit(inputPin);
        } catch (_) {
            setIsError(true);
        }
    }

    const handleInputChange = (val: string) => {
        if (isError) setIsError(false);
        setInputPin(val);
    }

    const handleResendCode = () => {
        setIsRunning(true);
        setCount(10);
    }

    return <>
        <button onClick={handleGoBack} className="text-gray1 flex gap-2 items-center cursor-pointer hover:opacity-75">
            <Arrow2 color="#636363" className="rotate-180 mb-0.5" /> Back to login
        </button>
        <div>
            <div className="mb-6">
                <div className="bg-blue1/10 p-3.5 inline-flex rounded-xl"><Shield /></div>
            </div>
            <h3 className="text-[24px] font-semibold text-black1 mb-2">Two-factor authentication</h3>
            <h5 className="text-[16px]">
                <span className="text-gray1 mr-1.5">We've sent a 6-digit verification code to</span>
                <b>se***@test.test</b>
            </h5>
        </div>
        <div>
            <div className="font-medium mb-3">Verification code</div>
            <PinInput
                length={6}
                type="number"
                inputMode="numeric"
                unstyled
                placeholder=""
                onChange={handleInputChange}
                styles={{
                    input: {
                        fontSize: '20px',
                        fontWeight: 'bold',
                    },
                }}
                classNames={{
                    input: 'bg-transparent text-center w-12 h-14 rounded-xl border border-white3 focus:outline-2 focus:outline-blue1 focus:border-none filled-pin-input',
                    root: 'flex gap-3',
                }}
            />
            {isError && <span className="my-2 flex items-center text-[14px] text-red1 leading-4 gap-1"><Alert size={14} /> Invalid verification code</span>}
            <div className="mt-6">
                <span className="text-gray1 mr-1.5">Resend code in</span>
                {count > 0 ? <b>{count}s</b> : <button onClick={handleResendCode} className="cursor-pointer hover:opacity-75"><b>resend</b></button>}
            </div>
            <button onClick={handleInputSubmit} disabled={isButtonDisabled} className={`flex gap-2 justify-center items-center mt-6 border-none py-2 w-full text-white rounded-md bg-blue1 ${isButtonDisabled ? 'opacity-50' : 'hover:bg-blue1/90 cursor-pointer'} transition-all duration-300`}>
                Verify and continue
            </button>
        </div>
        <div>
            <div className="bg-white1 rounded-lg p-4 mb-4">
                <b>Didn't receive the code?</b><br />
                <p className="text-gray1">Check your spam folder or contact your administrator for assistance</p>
            </div>
            <div className="text-gray1">
                Demo: Enter <span className="bg-white4 py-1 px-2 rounded-sm">123456</span> to proceed
            </div>
        </div>
    </>;
}
