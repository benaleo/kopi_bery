interface menuProps {
    id: number,
    category: string,
    items: {
        id: number,
        title: string,
        priceHot: number | null,
        priceIce: number | null
    }[]
}

export const menus: menuProps[] = [
    {
        id: 1,
        category: "EXPRESSO BASED",
        items: [
            {
                id: 1,
                title: "Espresso",
                priceHot: 16,
                priceIce: null
            },
            {
                id: 2,
                title: "Americano",
                priceHot: 18,
                priceIce: 19
            },
            {
                id: 3,
                title: "Latte",
                priceHot: 20,
                priceIce: 22
            },
            {
                id: 4,
                title: "Magic",
                priceHot: 20,
                priceIce: null
            },
            {
                id: 5,
                title: "Cappucinno",
                priceHot: 18,
                priceIce: 20
            },
            {
                id: 6,
                title: "Mochacinno",
                priceHot: 20,
                priceIce: 22
            },
        ]
    },
    {
        id: 2,
        category: "MANUAL BREW",
        items: [
            {
                id: 1,
                title: "v60",
                priceHot: 18,
                priceIce: null
            },
            {
                id: 2,
                title: "Japanesse",
                priceHot: null,
                priceIce: 20
            },
            {
                id: 3,
                title: "Cold Brew",
                priceHot: null,
                priceIce: 22
            }
        ]
    },
    {
        id: 3,
        category: "NON COFFEE",
        items: [
            {
                id: 1,
                title: "Chocolate",
                priceHot: 17,
                priceIce: 19
            },
            {
                id: 2,
                title: "Charcoal",
                priceHot: 18,
                priceIce: 20
            },
            {
                id: 3,
                title: "Green Tea",
                priceHot: 20,
                priceIce: 22
            },
            {
                id: 4,
                title: "Red Velvet",
                priceHot: 20,
                priceIce: 22
            },

        ]
    },
    {
        id: 4,
        category: "KOPI SUSU",
        items: [
            {
                id: 1,
                title: "Kesayanganmu",
                priceHot: 17,
                priceIce: 19
            },
            {
                id: 2,
                title: "Asmara",
                priceHot: 18,
                priceIce: 20
            },
            {
                id: 3,
                title: "Kopi Bery",
                priceHot: 18,
                priceIce: null
            },
            {
                id: 4,
                title: "Kopi Arum",
                priceHot: 20,
                priceIce: null
            },
            {
                id: 5,
                title: "Kopi BTS",
                priceHot: 20,
                priceIce: null
            },
            {
                id: 6,
                title: "Black Sabbath",
                priceHot: 20,
                priceIce: null
            },

        ]
    },
    {
        id: 5,
        category: "MOCKTAIL",
        items: [
            {
                id: 1,
                title: "Mix Bery",
                priceHot: 18,
                priceIce: null
            },
            {
                id: 2,
                title: "Lemon De Black",
                priceHot: 20,
                priceIce: null
            },
            {
                id: 3,
                title: "Summer Tea",
                priceHot: 20,
                priceIce: null
            },
        ]
    },
{
        id: 6,
        category: "OTHER",
        items: [
            {
                id: 1,
                title: "Air Mineral",
                priceHot: 5,
                priceIce: null
            },
            {
                id: 2,
                title: "Extra Ice",
                priceHot: 1,
                priceIce: null
            },
        ]
    },

]