import axios from "axios";
import { SelectOptions } from "@/types/SelectOptions";
import { menus } from "@/components/data/menus";

export const productOptions = async (): Promise<SelectOptions[]> => {
    try {
        return menus.flatMap((menu: any) =>
            menu.items.map((item: any) => ({
                label: item.title + ` ( ${item.priceHot} K )`,
                value: item.title,
            }))
        );
    } catch (error: any) {
        throw new Error(
            error.response?.data?.message ||
            "An error occurred while fetching product options."
        );
    }
};


