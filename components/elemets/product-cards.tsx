"use client"
import * as React from 'react';
import {motion, Variants} from "motion/react"

interface Props {
    children: React.ReactNode
    title: string
    href: string
    alt?: string
}

export default function ProductCards({children, title, href, alt}: Props) {
    return (
        <motion.div
            variants={cardVariants}
            initial="offscreen"
            whileInView="onscreen"
            className="flex flex-col items-center">
            <img className="w-full max-w-[300px] aspect-square object-cover" src={href !== null ? href : "/assets/images/coffee-1.png"} alt={alt}/>
            <p className="text-2xl font-bold text-primary">
                {title}
            </p>
            <p className="px-4 max-w-[350px]">
                {children}
            </p>
        </motion.div>

    );
};

const cardVariants: Variants = {
    offscreen: {
      y: -40,
        opacity: 0
    },
    onscreen: {
      y: 0,
        opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 3,
      },
    },
  };