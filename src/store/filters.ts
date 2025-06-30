import { create } from 'zustand';
import type { Colors } from '../models/productsModel';

interface FilterState {
    availableColorsInPopup: Colors[] | null;
    currentColorInProducts: Colors | null;
    currentColorInPopup: Colors | null;
    setCurrentColorInProducts: (value: Colors | null) => void;
    setCurrentColorInPopup: (value: Colors | null) => void;
    setAvailableColorsInPopup: (value: Colors[] | null) => void;
}

export const useFilterStore = create<FilterState>((set) => ({
    currentColorInProducts: null,
    currentColorInPopup: null,
    availableColorsInPopup: null,
    setCurrentColorInProducts: (value) => set({ currentColorInProducts: value }),
    setCurrentColorInPopup: (value) => set({ currentColorInPopup: value }),
    setAvailableColorsInPopup: (value) => set({ availableColorsInPopup: value }),
}));
