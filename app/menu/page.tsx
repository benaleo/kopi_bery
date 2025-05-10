"use client"
import * as React from 'react';
import {Button} from "@/components/ui/button";
import {menus} from "@/components/data/menus"
import Footer from "@/components/elemets/footer";
import {useRouter} from "next/navigation";

export default function Page() {
    const router = useRouter();


    const handleOrder = () => {
        router.push("/order")
    }

    return (
        <>
            <div className="w-full min-h-screen bg-slate-900">
                <div className="container-lg text-slate-50 py-[120px]">
                    <div className="flex flex-col md:flex-row gap-4 justify-between items-center py-12 w-full">
                        <p className="page-title">
                            Kopi Bery Menu
                        </p>
                        <Button onClick={() => handleOrder()} className="w-full max-w-[300px]">Klik untuk pesan</Button>
                    </div>
                    <div className="rounded-lg w-full border-2 border-slate-50 border-opacity-50 px-8 py-6">
                        {menus.length > 0 && menus.map((menu) => (
                            <div key={menu.id} className="">
                                <div className="grid grid-cols-[0.5fr_0.25fr_0.25fr] pt-4">
                                    <p className="menu-header">{menu.category}</p>
                                    <p className="menu-header">{menu.category === "OTHER" ? "PRICE" : "HOT"}</p>
                                    <p className="menu-header">{menu.category === "OTHER" ? "" : "ICE"}</p>
                                </div>
                                {menu.items.length > 0 && menu.items.map((item) => (
                                    <div key={item.id} className="grid grid-cols-[0.5fr_0.25fr_0.25fr] gap-2 pb-2 border-b-2 border-opacity-50 border-slate-50 mt-2 hover:bg-orange-600 hover:bg-opacity-30">
                                        <p className="">{item.title}</p>
                                        <p className="">{item.priceHot} {item.priceHot !== null && item.priceHot > 0 ? "K" : ""}</p>
                                        <p className="">{item.priceIce} {item.priceIce !== null && item.priceIce > 0 ? "K" : ""}</p>
                                    </div>
                                ))}

                            </div>
                        ))}
                    </div>
                </div>
                {/*footer section*/}
                <Footer/>
            </div>
        </>
    )
        ;
};