// @flow
import * as React from 'react';
import {FaInstagram, FaPhone} from "react-icons/fa6";

export default function Footer() {
    return (
        <div className="bg-slate-950 w-full py-8 text-slate-50 px-4 md:px-16">
            <div className="container-lg grid grod-cols-1 md:grid-cols-3">
                <div className="flex flex-col gap-2 py-6">
                    <img className="object-contain h-32 filter brightness-0 invert" src="/assets/images/logo.svg" alt="logo kopi bery"/>
                    <p className="text-xs">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quia.</p>
                    <div className="flex gap-2 items-center">
                        <FaPhone/> 08100000000
                    </div>
                    <div className="flex gap-2 items-center">
                        <FaInstagram/> kopibery.id
                    </div>
                </div>
                <div className="flex flex-col gap-4 py-6">
                    <p className="font-pbold min-w-[120px] w-fit text-lg pb-2 border-b-4 border-primary">
                        Quick links
                    </p>
                    <ul className="flex flex-col gap-4">
                        <li>Home</li>
                        <li>Contact Us</li>
                    </ul>
                </div>
                <div className="flex flex-col gap-4 py-6">
                    <p className="font-pbold min-w-[120px] w-fit text-lg pb-2 border-b-4 border-primary">
                        Outlet
                    </p>
                    <ul className="flex flex-col gap-4">
                        <li>Kopi Bery 1 - (Bugangan Wonosobo)</li>
                        <li>Kopi Bery 2 - (Kauman Wonosobo)</li>
                    </ul>
                </div>

            </div>
        </div>
    );
};