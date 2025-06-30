export type Colors = "black" | "white" | "blue" | "yellow" | "green";
export type Clothes = "jamper" | "oversizeShirt" | "shirt" | "sweatshirt";
export type Sizes = "xs" | "s" | "m" | "l" | "xl";

export interface IProduct {
    name: string;
    price: number;
    imagesByColor: Partial<Record<Colors, string[]>>;
    readonly type: Clothes;

    description?: string;
    sizes: Sizes[];
    accordeon: Record<string, string>;
}

abstract class Product implements IProduct {
    private _name: string;
    private _price: number;
    private _imagesByColor: Partial<Record<Colors, string[]>>;
    protected abstract readonly _type: Clothes;

    private _sizes: Sizes[];
    private _accordeon: Record<string, string>;
    private _description: string;

    constructor(
        name: string,
        price: number,
        imagesByColor: Partial<Record<Colors, string[]>>,
        sizes: Sizes[],
        accordeon: Record<string, string>,
        description: string = "This product has no description"
    ) {
        this._name = name;
        this._price = price;
        this._imagesByColor = imagesByColor;
        this._sizes = sizes;
        this._accordeon = accordeon;
        this._description = description;
    }

    get name(): string {
        return this._name;
    }

    get price(): number {
        return this._price;
    }

    get imagesByColor(): Partial<Record<Colors, string[]>> {
        return this._imagesByColor;
    }

    get type(): Clothes {
        return this._type;
    }

    get accordeon(): Record<string, string> {
        return this._accordeon;
    }

    get description(): string {
        return this._description;
    }

    get sizes(): Sizes[] {
        return this._sizes;
    }
}

export class Jamper extends Product {
    protected readonly _type: Clothes = "jamper";
    constructor(
        name: string,
        price: number,
        imagesByColor: Partial<Record<Colors, string[]>>,
        sizes: Sizes[],
        accordeon: Record<string, string>,
        description?: string
    ) {
        super(name, price, imagesByColor, sizes, accordeon, description);
    }
}

export class OversizeShirt extends Product {
    protected readonly _type: Clothes = "oversizeShirt";
    constructor(
        name: string,
        price: number,
        imagesByColor: Partial<Record<Colors, string[]>>,
        sizes: Sizes[],
        accordeon: Record<string, string>,
        description?: string
    ) {
        super(name, price, imagesByColor, sizes, accordeon, description);
    }
}

export class Shirt extends Product {
    protected readonly _type: Clothes = "shirt";
    constructor(
        name: string,
        price: number,
        imagesByColor: Partial<Record<Colors, string[]>>,
        sizes: Sizes[],
        accordeon: Record<string, string>,
        description?: string
    ) {
        super(name, price, imagesByColor, sizes, accordeon, description);
    }
}

export class Sweatshirt extends Product {
    protected readonly _type: Clothes = "sweatshirt";
    constructor(
        name: string,
        price: number,
        imagesByColor: Partial<Record<Colors, string[]>>,
        sizes: Sizes[],
        accordeon: Record<string, string>,
        description?: string
    ) {
        super(name, price, imagesByColor, sizes, accordeon, description);
    }
}