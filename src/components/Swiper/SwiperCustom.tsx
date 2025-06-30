import { Swiper } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper as SwiperClass } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useEffect, useRef, type ReactNode } from 'react';
import { useSwiperStore } from '../../store/swiperSchema';
import { Filters } from '../Filters';

export function SwiperCustom({ children, title, isInPopup = false }: { children: ReactNode, title?: string, isInPopup?: boolean }) {
    const prevRef = useRef<HTMLButtonElement>(null);
    const nextRef = useRef<HTMLButtonElement>(null);
    const swiperRef = useRef<SwiperClass | null>(null);
    const { slidesPerViewMax, gap, navigation, pagination } = useSwiperStore();

    useEffect(() => {
        const swiper = swiperRef.current;
        if (!swiper || isInPopup) return;

        const currentBreakpoint = swiper.currentBreakpoint;
        const breakpointParams = swiper.params.breakpoints?.[currentBreakpoint ?? ''];

        if (breakpointParams) {
            const width = window.innerWidth;
            if (width >= 1024) {
                breakpointParams.slidesPerView = slidesPerViewMax;
                swiper.params.slidesPerView = slidesPerViewMax;
            }
            breakpointParams.spaceBetween = 15 + gap;
            swiper.params.spaceBetween = 15 + gap;

            swiper.update();
        }
    }, [slidesPerViewMax, gap]);

    useEffect(() => {
        const onResize = () => swiperRef.current?.update();
        window.addEventListener('resize', onResize);
        return () => window.removeEventListener('resize', onResize);
    }, []);

    const onSwiperInit = (swiper: SwiperClass) => {
        swiperRef.current = swiper;
    };

    useEffect(() => {
        const swiper = swiperRef.current;
        if (!swiper) return;

        const updateNavButtons = () => {
            const prev = prevRef.current;
            const next = nextRef.current;
            if (!prev || !next) return;

            if (swiper.isBeginning) {
                prev.classList.add("disabled");
            } else {
                prev.classList.remove("disabled");
            }

            if (swiper.isEnd) {
                next.classList.add("disabled");
            } else {
                next.classList.remove("disabled");
            }
        };

        swiper.on("slideChange", updateNavButtons);
        swiper.on("afterInit", updateNavButtons);

        return () => {
            swiper.off("slideChange", updateNavButtons);
            swiper.off("afterInit", updateNavButtons);
        };
    }, []);

    return (
        <div className="pt-5 flex items-center justify-center">
            <div className="myContainer !w-full">
                <div className={`flex items-center justify-between gap-3 mb-4 !px-[15px] ${!title ? 'justify-center' : ""}`}>
                    {title && (
                        <h1 className='text-[var(--color-text)] text-[35px] fontOswald uppercase font-bold max-sm:text-[25px]'>{title}</h1>
                    )}
                    {navigation && (
                        <div className="flex gap-3">
                            <button ref={prevRef} className="disabled:bg-gray-500 disabled:cursor-not-allowed cursor-pointer fontOswald font-bold text-2xl px-4 py-2 bg-gray-200 rounded-full hover:bg-gray-300">←</button>
                            <button ref={nextRef} className="disabled:bg-gray-500 disabled:cursor-not-allowed cursor-pointer fontOswald font-bold text-2xl px-4 py-2 bg-gray-200 rounded-full hover:bg-gray-300">→</button>
                        </div>
                    )}
                </div>
                <div className="myContainer mb-3">
                    <Filters isInPopup={isInPopup} />
                </div>
                <Swiper
                    onSwiper={onSwiperInit}
                    modules={[Navigation, Pagination]}
                    observer={true}
                    observeParents={true}
                    breakpoints={{
                        1024: {
                            slidesPerView: isInPopup ? 1 : slidesPerViewMax,
                            spaceBetween: 15 + gap,
                        },
                        620: {
                            slidesPerView: isInPopup ? 1 : 2,
                            spaceBetween: 15 + gap,
                        },
                        0: {
                            slidesPerView: 1,
                            spaceBetween: 15 + gap,
                        },
                    }}
                    pagination={pagination ? { clickable: true } : false}
                    navigation={
                        navigation ?
                            {
                                prevEl: prevRef.current,
                                nextEl: nextRef.current,
                            }
                            : false
                    }
                    onBeforeInit={(swiper) => {
                        if (swiper.params.navigation && typeof swiper.params.navigation !== 'boolean') {
                            swiper.params.navigation.prevEl = prevRef.current;
                            swiper.params.navigation.nextEl = nextRef.current;
                        }
                    }}
                    className="w-full !px-[15px]"
                >
                    {children}
                </Swiper>
            </div>
        </div>
    );
}
