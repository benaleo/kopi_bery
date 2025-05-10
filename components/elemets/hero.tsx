"use client"
import * as React from 'react';
import {motion} from "motion/react"

export default function Hero() {
    return (
        <div className="relative w-full h-screen bg-slate-950">
            <div className="absolute z-10 left-0 top-0 w-full h-full gradient-hero opacity-80">
                <div className="absolute z-10 inset-y-1/3 left-[10vw]">
                    <motion.div
                        animate={{
                            opacity: [0, 1],
                            translateX: [0, 10],
                            translateY: [0, -10],
                            transition: {
                                duration: 2
                            }
                        }}
                        className="relative py-4 pl-16 text-orange-300">
                        <div className="absolute left-0 top-0 w-[200px] h-full z-[-1] bg-slate-50 opacity-30 rounded-l-2xl"></div>
                        <motion.div
                            initial={{
                                opacity: 0,
                                translateX: -100
                            }}
                            whileInView={{
                                translateX: 0,
                                opacity: 1,
                                transition: {
                                    opacity: 1,
                                    type: "spring",
                                    bounce: 0.4,
                                    duration: 1.5
                                }
                            }}>
                            <p className="font-pbold text-3xl whitespace-nowrap">Hello Coffee Lovers,</p>
                            <p className="font-psemibold min-w-[400px] max-w-[500px] line-clamp-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem laboriosam pariatur voluptatem.
                                Aliquid
                                at, atque commodi consequatur corporis
                                dolore dolores esse exercitationem impedit iusto magni neque porro quo recusandae reiciendis, repellat, sit sunt temporibus vitae voluptas. Deserunt dicta, dignissimos
                                eligendi error eum fuga maxime nihil sed sequi totam, unde voluptatibus!</p>
                        </motion.div>
                    </motion.div>
                </div>
                <div className="absolute z-10 inset-y-3/4 md:inset-y-2/3 right-[10vw]">
                    <motion.div
                        animate={{
                            opacity: [0, 1],
                            translateX: [10, 0],
                            translateY: [-10, 0],
                            transition: {
                                duration: 2
                            }
                        }}
                        className="relative py-4 pr-16 text-slate-300">
                        <div className="absolute right-0 top-0 w-[150px] h-full z-[-1] bg-slate-50 opacity-30 rounded-r-2xl"></div>
                        <motion.div
                            initial={{
                                opacity: 0,
                                translateX: 100
                            }}
                            whileInView={{
                                translateX: 0,
                                opacity: 1,
                                transition: {
                                    opacity: 1,
                                    type: "spring",
                                    bounce: 0.4,
                                    duration: 1.5
                                }
                            }}>
                            <p className="font-pbold text-3xl whitespace-nowrap text-end">We are open</p>
                            <p className="font-psemibold min-w-[400px] max-w-[500px] text-end line-clamp-2">Everyday !</p>
                            <p className="font-psemibold min-w-[400px] max-w-[500px] text-end line-clamp-2">Open 10 a.m - 10 p.m</p>
                        </motion.div>
                    </motion.div>
                </div>
                <motion.div
                    initial={{
                        opacity: 0,
                        scale: 0
                    }}
                    whileInView={{
                        scale: 1,
                        opacity: 1,
                        transition: {
                            duration: 5,
                            type: "spring",
                            bounce: 0.4
                        }
                    }}
                    className="absolute top-1/2 md:top-1/2 lg:top-52 right-[25vw] md:right-[37vw]  lg:right-48">
                    <img className="object-contain h-52 filter brightness-0 invert" src="/assets/images/logo.svg" alt="logo kopi bery"/>
                </motion.div>

            </div>
            <img className="w-full h-full object-cover" src="/assets/images/hero.png" alt="hero kopi bery"/>
        </div>
    );
};