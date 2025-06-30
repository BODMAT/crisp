import { useState } from "react";
import type { IProduct } from "../../models/productsModel";
import { Accordion } from "../Accordion/Accordion";
import { SwiperCustom } from "./SwiperCustom";
import { SwiperSlide } from "swiper/react";
import { useFilterStore } from "../../store/filters";
import { usePopupStore } from "../../store/popup";

export function ProductInfo({ product }: { product: IProduct }) {
    const { currentColorInPopup: color } = useFilterStore();
    const images = color && product.imagesByColor[color];
    const [selectedSize, setSelectedSize] = useState<string>("");
    const { close, open } = usePopupStore();
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!selectedSize) {
            alert("Будь ласка, виберіть розмір");
            return;
        }
        close();
        setTimeout(() => open("Notification", <p className="py-5 text-[var(--color-text)] fontRoboto font-semibold">Додано в кошик: {product.name} - {color}, {selectedSize}</p>), 200);
    };
    return (
        <div className="mb-5 flex flex-nowrap items-center gap-3 w-full max-[620px]:flex-col-reverse">
            <div className="w-1/2 max-[620px]:w-full">
                <SwiperCustom isInPopup={true}>
                    {images && images.map((image, index) => (
                        <SwiperSlide key={index}>
                            <img src={image} alt={product.name} className="mb-10 w-full h-auto object-contain rounded-2xl" />
                        </SwiperSlide>
                    ))}
                </SwiperCustom>
            </div>
            <div className="w-1/2 max-[620px]:w-full flex flex-col gap-3">
                <p className='fontRoboto font-bold text-[20px] tracking-wide text-[var(--color-text)]'>Вартість: {product.price} грн</p>
                <p className='fontRoboto font-bold text-[16px] tracking-wide text-[var(--color-text)]'>Опис: {product.description}</p>
                <Accordion data={product.accordeon} />

                <form className="pt-4" onSubmit={handleSubmit}>
                    <div className="flex gap-7 items-center mb-3">
                        <legend className="font-semibold text-[var(--color-text)]">Choose size</legend>
                        <div className="flex flex-wrap gap-4">
                            {product.sizes.map((size) => (
                                <label key={size} className="cursor-pointer flex items-center gap-2">
                                    <input
                                        type="radio"
                                        name="size"
                                        value={size}
                                        checked={selectedSize === size}
                                        onChange={() => setSelectedSize(size)}
                                        className="cursor-pointer accent-[var(--color-accent)]"
                                        required
                                    />
                                    <span className="text-[var(--color-text)]">{size}</span>
                                </label>
                            ))}
                        </div>
                    </div>


                    <button
                        type="submit"
                        className="cursor-pointer bg-[var(--color-accent)] text-[var(--color-text)] py-2 rounded-2xl transition-transform hover:scale-95 w-full"
                    >
                        Додати в кошик
                    </button>
                </form>

            </div>
        </div>
    )
}