"use client"

import * as React from 'react';
import {motion, Variants} from "motion/react"
import Hero from "@/components/elemets/hero";
import Footer from "@/components/elemets/footer";
import ProductCards from "@/components/elemets/product-cards";
import LocationMaps from "@/components/elemets/location-maps";
import PromoBanner from "@/components/elemets/promo-banner";

interface productProps {
    id: number,
    title: string,
    description: string,
    href: string
}

const listProduct: productProps[] = [
    {
        id: 1,
        title: "Black Coffee",
        description: "lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquid animi architecto.",
        href: "/assets/images/coffee-1.png"
    },
    {
        id: 2,
        title: "Hot Coffee",
        description: "lorem ipsum dolor sit amet. Ab aliquid animi architecto.",
        href: "/assets/images/coffee-2.png"
    },
    {
        id: 3,
        title: "Ice Coffee",
        description: "lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        href: "/assets/images/coffee-1.png"
    },

]

export default function Page() {
    return (
        <div>
            {/* hero section */}
            <Hero/>
            {/* body card products section*/}
            <div className="py-12 container-lg flex flex-col items-center justify-center text-center">
                <div className="w-full flex justify-center items-center">
                    <motion.div
                        initial="offscreen"
                        whileInView="onscreen"
                        variants={cardVariants}
                        className="z-[-2]"
                    >
                        <div className="flex flex-col md:flex-row justify-center items-center gap-2 text-2xl text-black font-pbold w-full">
                            <p className="">Fresh and</p>
                            <p className="text-primary">Tasty Coffee</p>
                        </div>
                        <p className="max-w-4xl">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquid animi architecto, assumenda consequatur corporis cum dignissimos eaque est iusto
                            minima minus molestias natus, nemo nulla officiis quis, quos rem repudiandae sit tenetur voluptatibus voluptatum? Accusamus ipsam magnam mollitia neque.</p>
                    </motion.div>
                </div>

                <div className="py-2 grid grid-cols-1 md:grid-cols-3 gap-12 bg-white z-[-1]">
                    {listProduct.length > 0 && listProduct.map((item) => (
                        <ProductCards key={item.id} title={item.title} href={item.href}>
                            {item.description}
                        </ProductCards>
                    ))}
                </div>
            </div>
            {/*loation section*/}
            <LocationMaps/>
            {/*promo banner section*/}
            <PromoBanner/>
            {/*footer section*/}
            <Footer/>
        </div>
    );
};

const cardVariants: Variants = {
    offscreen: {
        y: 200,
        opacity: 0,
        overflow: "hidden"
    },
    onscreen: {
        y: 0,
        opacity: 1,
        transition: {
            type: "spring",
            bounce: 0.4,
            duration: 2
        }
    }
}