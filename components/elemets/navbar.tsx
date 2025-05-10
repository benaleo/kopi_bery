"use client"
import * as React from 'react';
import {useEffect, useState} from 'react';
import Link from "next/link";
import {Dialog, DialogContent, DialogContentMenuMobile, DialogDescription, DialogHeader, DialogTitle, DialogTrigger} from "@/components/ui/dialog";
import {FaAlignJustify} from "react-icons/fa6";
import Image from "next/image";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 500);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <div className="w-full fixed top-4 z-40">
                <div className={`w-[80vw] h-16 sticky left-[10vw] top-4 rounded-md transition-all duration-300 ${isScrolled ? 'bg-slate-900 bg-opacity-100 outline outline-1 outline-slate-50' : 'bg-slate-50 bg-opacity-50'}`}>
                    <div className="relative h-full">
                        <div className="absolute z-10 flex justify-between items-center w-full h-full px-4 md:px-12">
                            <Image
                                className={`object-contain h-16 filter ${isScrolled ? 'brightness-0 invert' : 'brightness-0 invert'}`}
                                src="/assets/images/logo.svg"
                                alt="logo kopi bery"
                                width={100}
                                height={64}
                            />
                            <div className="hidden md:flex items-center justify-center gap-12">
                                <Link className={`nav-menu ${isScrolled ? 'text-slate-50' : 'text-white'}`} href="/">Home</Link>
                                <Link className={`nav-menu ${isScrolled ? 'text-slate-50' : 'text-white'}`} href="/menu">Menu</Link>
                                <Link className={`nav-menu ${isScrolled ? 'text-slate-50' : 'text-white'}`} href="/order">Order</Link>
                            </div>
                            <div className="md:hidden flex items-center">
                                <Dialog>
                                    <DialogTrigger><FaAlignJustify className={`text-2xl ${isScrolled ? 'text-slate-50' : 'text-white'}`}/></DialogTrigger>
                                    <DialogContentMenuMobile>
                                        <DialogHeader>
                                            <DialogTitle className="text-start pb-4 mb-4 border-b-2">Menu Bar</DialogTitle>
                                            <DialogDescription className="text-start flex flex-col gap-2">
                                                <Link className="nav-menu-mobile" href="/">Home</Link>
                                                <Link className="nav-menu-mobile" href="/menu">Menu</Link>
                                                <Link className="nav-menu-mobile" href="/order">Order</Link>
                                            </DialogDescription>
                                        </DialogHeader>
                                    </DialogContentMenuMobile>
                                </Dialog>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};