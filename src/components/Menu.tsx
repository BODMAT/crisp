import CartIcon from '../assets/shopping-cart.svg?react';
import { usePopupStore } from '../store/popup';
import { useCallback } from 'react';
import { SwiperSettings } from './Swiper/SwiperSettings';
import { AccordionSettings } from './Accordion/AccordionSettings';

export function Menu() {
    const { open } = usePopupStore();

    const handleOpenSliderSettings = useCallback(() => {
        open("Slider settings", <SwiperSettings />);
    }, [open]);

    const handleOpenAccordionSettings = useCallback(() => {
        open("Accordeon settings", <AccordionSettings />);
    }, [open]);

    const handleOpenCart = useCallback(() => {
        open("Cart", <p className="py-5 text-[var(--color-text)] fontRoboto font-semibold">In future</p>);
    }, [open]);

    return (
        <ul className='flex gap-10 items-center text-[var(--color-text)] max-[620px]:text-[#fff] max-[620px]:flex-col text-[14px] max-[620px]:text-4xl'>
            <li>
                <button
                    onClick={handleOpenSliderSettings}
                    className="relative fontOswald font-semibold uppercase cursor-pointer transitioned after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-[var(--color-accent)] after:transition-all after:duration-200 hover:after:w-full"
                >
                    Slider settings
                </button>
            </li>

            <li>
                <button
                    onClick={handleOpenAccordionSettings}
                    className="relative fontOswald font-semibold uppercase cursor-pointer transitioned after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-[var(--color-accent)] after:transition-all after:duration-200 hover:after:w-full"
                >
                    Accordeon settings
                </button>
            </li>

            <li className='min-[620px]:ml-10'>
                <button
                    onClick={handleOpenCart}
                    className="cursor-pointer max-[620px]:w-15 max-[620px]:h-15 p-2 transitioned hover:scale-110"
                >
                    <CartIcon className="w-full h-full stroke-current text-[var(--color-text)] transitioned max-[620px]:text-[#fff] hover:text-[var(--color-accent)]" />
                </button>
            </li>
        </ul>
    );
}
