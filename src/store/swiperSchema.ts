import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

interface SwiperState {
    navigation: boolean;
    pagination: boolean;
    gap: number;
    slidesPerViewMax: 2 | 3 | 4;

    setNavigation: (value: boolean) => void;
    setPagination: (value: boolean) => void;
    setGap: (value: number) => void;
    setSlidesPerViewMax: (value: 2 | 3 | 4) => void;
}

export const useSwiperStore = create<SwiperState>()(
    persist(
        devtools((set) => ({
            navigation: true,
            pagination: true,
            gap: 30,
            slidesPerViewMax: 3,

            setNavigation: (value) => set({ navigation: value }),
            setPagination: (value) => set({ pagination: value }),
            setGap: (value) => set({ gap: value }),
            setSlidesPerViewMax: (value) => set({ slidesPerViewMax: value }),
        })),
        {
            name: 'swiper-storage-redhotteam',
        }
    )
);
