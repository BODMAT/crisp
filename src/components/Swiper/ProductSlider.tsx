import { SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { products } from '../../data/product';
import type { Colors, IProduct } from '../../models/productsModel';
import { useCallback } from 'react';
import { usePopupStore } from '../../store/popup';
import { SwiperCustom } from './SwiperCustom';
import { ProductInfo } from './ProductInfo';

export function ProductSlider() {
    const { open } = usePopupStore();
    const openPopup = useCallback((product: IProduct, color: Colors) => {
        open(`${product.name} - ${color}`, <ProductInfo product={product} color={color} />);
    }, [open]);

    return (
        <SwiperCustom title="View our products">
            {products.map((product: IProduct) => {
                return Object.entries(product.imagesByColor).map(([color, images]) => {
                    const firstImage = images?.[0];
                    if (!firstImage) return null;

                    return (
                        <SwiperSlide key={`${product.name}-${color}`}>
                            <button
                                onClick={() => openPopup(product, color as Colors)}
                                className="!w-full mb-10 cursor-pointer transitioned hover:scale-95"
                            >
                                <img src={firstImage} alt={`${product.name} ${color}`} className="w-full h-auto object-cover rounded-2xl" />
                                <div className="text-center mt-2 text-[var(--color-text)] p-2 rounded-2xl bg-[var(--color-card)] flex justify-center items-center gap-3">
                                    <h3 className='fontRoboto font-bold text-[18px] tracking-wide'>
                                        {product.name} - {color}
                                    </h3>
                                    <p className='fontRoboto font-bold text-[20px] tracking-wide'>
                                        {product.price} грн
                                    </p>
                                </div>
                            </button>
                        </SwiperSlide>
                    );
                });
            })}
        </SwiperCustom>
    );


}
