import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

interface AccordionState {
    isMultiple: boolean;
    setIsMultiple: (value: boolean) => void;
}

export const useAccordionStore = create<AccordionState>()(
    persist(
        devtools((set) => ({
            isMultiple: false,
            setIsMultiple: (value) => set({ isMultiple: value }),
        })),
        {
            name: 'accordion-storage-redhotteam',
        }
    )
);
