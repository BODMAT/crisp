import { Jamper, OversizeShirt, Shirt, Sweatshirt } from "../models/productsModel";

const sizeAccordion: Record<string, string> = {
    "Таблиця розмірів": `
Розмір XS:
  - Ширина (A): 50 см
  - Довжина (B): 68 см
  - Довжина рукава (C): 71 см
  - Ширина в грудях (D): 58 см

Розмір S:
  - Ширина (A): 52 см
  - Довжина (B): 70 см
  - Довжина рукава (C): 73 см
  - Ширина в грудях (D): 60 см

Розмір M:
  - Ширина (A): 54 см
  - Довжина (B): 72 см
  - Довжина рукава (C): 75 см
  - Ширина в грудях (D): 62 см

Розмір L:
  - Ширина (A): 56 см
  - Довжина (B): 74 см
  - Довжина рукава (C): 78 см
  - Ширина в грудях (D): 64 см

Розмір XL:
  - Ширина (A): 58 см
  - Довжина (B): 76 см
  - Довжина рукава (C): 80 см
  - Ширина в грудях (D): 66 см
`
};

const jamper = new Jamper(
    "Cool Jamper",
    599,
    {
        black: [
            "./jamper/jamper-black-1.jpg",
            "./jamper/jamper-black-2.jpg",
            "./jamper/jamper-size.jpg",
        ],
        white: [
            "./jamper/jamper-white-1.jpg",
            "./jamper/jamper-white-2.jpg",
            "./jamper/jamper-size.jpg",
        ],
        blue: [
            "./jamper/jamper-blue-1.jpg",
            "./jamper/jamper-blue-2.jpg",
            "./jamper/jamper-size.jpg",
        ],
    },
    ["s", "m", "l"],
    {
        "Матеріал": "80% бавовна, 20% поліестер",
        "Догляд": "Рекомендується ручне прання",
        ...sizeAccordion,
    },
    "Цей джемпер підходить для повсякденного носіння. Він має високий рівень комфорту, затишність і легкість."
);


const oversizeShirt = new OversizeShirt(
    "Oversize Shirt",
    699,
    {
        black: [
            "./oversizeShirt/oversizeShirt-black-1.jpg",
            "./oversizeShirt/oversizeShirt-black-2.jpg",
            "./oversizeShirt/oversizeShirt-size.jpg"
        ],
        white: [
            "./oversizeShirt/oversizeShirt-white-1.jpg",
            "./oversizeShirt/oversizeShirt-white-2.jpg",
            "./oversizeShirt/oversizeShirt-size.jpg"
        ],
        green: [
            "./oversizeShirt/oversizeShirt-green-1.jpg",
            "./oversizeShirt/oversizeShirt-green-2.jpg",
            "./oversizeShirt/oversizeShirt-size.jpg"
        ]
    },
    ["xs", "s", "m", "xl"],
    {
        "Матеріал": "100% бавовна",
        "Догляд": "Прати при температурі не більше 30°С",
        ...sizeAccordion,
        "Пустий не відображається": "",
    },
    "Стильна oversize сорочка з м’якого матеріалу, ідеальна для повсякденного образу."
);

const shirt = new Shirt(
    "Classic Shirt",
    499,
    {
        black: [
            "./shirt/shirt-black-1.jpg",
            "./shirt/shirt-black-2.jpg",
            "./shirt/shirt-size.jpg"
        ],
        white: [
            "./shirt/shirt-white-1.jpg",
            "./shirt/shirt-white-2.jpg",
            "./shirt/shirt-size.jpg"
        ],
        yellow: [
            "./shirt/shirt-yellow-1.jpg",
            "./shirt/shirt-yellow-2.jpg",
            "./shirt/shirt-size.jpg"
        ]
    },
    ["s", "m", "l"],
    {
        "Матеріал": "70% бавовна, 30% поліестер",
        "Догляд": "Можна прати в машинці",
        ...sizeAccordion,
    },
    "Класична сорочка, яка пасує до будь-якого стилю та образу."
);

const sweatshirt = new Sweatshirt(
    "Cozy Sweatshirt",
    999,
    {
        black: [
            "./sweatshirt/sweatshirt-black-1.jpg",
            "./sweatshirt/sweatshirt-black-2.jpg",
            "./sweatshirt/sweatshirt-size.jpg"
        ],
        white: [
            "./sweatshirt/sweatshirt-white-1.jpg",
            "./sweatshirt/sweatshirt-white-2.jpg",
            "./sweatshirt/sweatshirt-size.jpg"
        ],
        yellow: [
            "./sweatshirt/sweatshirt-yellow-1.jpg",
            "./sweatshirt/sweatshirt-yellow-2.jpg",
            "./sweatshirt/sweatshirt-size.jpg"
        ]
    },
    ["xs", "s", "m", "l", "xl"],
    {
        "Матеріал": "60% бавовна, 40% поліестер",
        "Догляд": "Прати вручну або в делікатному режимі",
        ...sizeAccordion,
    },
    "Затишний світшот для прохолодної погоди, забезпечує комфорт і тепло."
);

export const products = [sweatshirt, shirt, oversizeShirt, jamper];