"use client"
import * as React from 'react';
import {motion, Variants} from "motion/react";

export default function PromoBanner() {
    return (
        <div className="w-full py-6">
            <div className="relative container-lg overflow-hidden mx-auto">
                <img className="w-full h-[200px] object-cover rounded-lg shadow" src="/assets/images/banner.png" alt="promo banner"/>
                <motion.div
                    variants={cardVariants}
                    initial="offscreen"
                    whileInView="onscreen"
                    className="absolute right-8 md:right-24 inset-y-1/3 text-end">
                    <p className="text-2xl font-pbold text-primary">
                        Come be a Member
                    </p>
                    <p className="italic">
                        Lorem ipsum dolor sit amet, consectetur adipisicing.
                    </p>
                </motion.div>
            </div>
        </div>
    );
};

const cardVariants: Variants = {
    offscreen: {
        opacity: 0,
        x: 300
    },
    onscreen: {
        opacity: 1,
        x: 0,
        transition: {
            bounce: 0.4,
            type: "spring",
            duration: 0.8
        }
    }
}