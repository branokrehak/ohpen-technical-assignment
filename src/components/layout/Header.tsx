import React from 'react';
import Arrow1 from '../svg/Arrow1';
import QuestionMark from '../svg/QuestionMark';
import Bell from '../svg/Bell';
import User from '../svg/User';

export default function Header() {
    return <>
        <header className="flex w-full justify-between px-6 h-16 border-b border-b-white3 bg-white">
            <ul className="flex items-center h-full gap-4">
                <li className="cursor-pointer flex items-center gap-2 border border-white3 py-1.25 px-3 rounded-sm">
                    <span className="inline-flex items-center justify-center rounded-sm bg-blue1 text-white w-6 h-6 text-[12px] font-semibold">A</span>
                    Acme Corporation
                    <Arrow1 className="-rotate-90" />
                </li>
                <li className="cursor-pointer flex items-center gap-2 border border-white3 py-1.25 px-3 rounded-sm">
                    <span className="bg-green3 h-2.5 w-2.5 rounded-full"></span>
                    Production
                    <Arrow1 className="-rotate-90" />
                </li>
                <li className="flex gap-2">
                    <span className="text-gray1">/</span>
                    <span className="text-gray1">Acme Corporation</span>
                    <span className="text-gray1">/</span>
                    <span className="text-black1">Production</span>
                </li>
            </ul>
            <div className="flex gap-2 items-center">
                <div><button className="cursor-pointer p-2.5"><QuestionMark /></button></div>
                <div><button className="cursor-pointer p-2.5"><Bell /></button></div>
                <div className="cursor-pointer flex items-center gap-2 px-3">
                    <div className="flex justify-center items-center bg-white4 rounded-full h-8 w-8"><User /></div>
                    <div>
                        <div className="font-medium leading-5">John Doe</div>
                        <div className="font-medium leading-4 text-gray1 text-[12px]">Admin</div>
                    </div>
                    <Arrow1 className="-rotate-90" />
                </div>
            </div>
        </header>
    </>;
}
