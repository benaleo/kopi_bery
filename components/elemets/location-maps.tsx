"use client"
import * as React from 'react';
import {motion, Variants} from "motion/react";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";

export default function LocationMaps() {
    return (
        <div className="w-full bg-slate-900 py-16 text-slate-50">
            <div className="container-lg mx-auto w-full">
                <div className="flex flex-col md:flex-row gap-4">
                    <motion.div
                        variants={leftVariants}
                        initial="offscreen"
                        whileInView="onscreen"
                        className="flex flex-col gap-2 max-w-[400px]">
                        <p className="text-2xl font-pbold pl-2">
                            Buy out products from anywhere
                        </p>
                        <div className="flex flex-wrap">
                            <div className="p-2 w-1/4">
                                <Input name="name" placeholder="your name" className="bg-slate-900 text-slate-100 placeholder:text-slate-400"/>
                            </div>
                            <div className="p-2 w-3/4">
                                <Input name="email" placeholder="your email" className="bg-slate-900 text-slate-100 placeholder:text-slate-400"/>
                            </div>
                            <div className="p-2 w-1/2">
                                <Input name="phone" placeholder="your phone" className="bg-slate-900 text-slate-100 placeholder:text-slate-400"/>
                            </div>
                            <div className="p-2 w-1/2">
                                <Input name="country" placeholder="your country" className="bg-slate-900 text-slate-100 placeholder:text-slate-400"/>
                            </div>
                        </div>
                        <Button >Kirim</Button>

                    </motion.div>
                    <motion.div
                        variants={rightVariants}
                        initial="offscreen"
                        whileInView="onscreen"
                        className="w-full">
                        <img src="/assets/images/location.png" alt="location bery" className="w-full h-[400px] object-cover rounded-lg"/>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

const leftVariants : Variants = {
    offscreen: {
        x: -300,
        opacity: 0
    },
    onscreen: {
        x: 0,
        opacity: 1,
        transition: {
            type: "spring",
            bounce: 0.4,
            duration: 1.5,
        },
    },
};

const rightVariants : Variants = {
    offscreen: {
        x: 300,
        opacity: 0
    },
    onscreen: {
        x: 0,
        opacity: 1,
        transition: {
            delay: 1,
            type: "spring",
            bounce: 0.4,
            duration: 1.5,
        },
    },
};