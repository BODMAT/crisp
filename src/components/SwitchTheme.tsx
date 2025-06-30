import { useThemeStore } from "../store/theme";
import SunIcon from '../assets/sun.svg?react';
import MoonIcon from '../assets/moon.svg?react';

export function SwitchTheme() {
    const { toggleTheme } = useThemeStore();
    return (
        <button
            onClick={toggleTheme}
            className="bg-[#0108003b] dark:bg-[#01080091] rounded-[40px] overflow-hidden transition-all duration-500 flex gap-x-7 items-center justify-center relative cursor-pointer border-2 border-[#ffffff61]" >
            <div className="py-[7px] pl-[17px] relative z-3">
                <SunIcon className="w-[30px] h-[30px] text-[#373737] dark:text-[#fbfbfb7c] transition-all duration-500" />
            </div>
            <div className="py-[7px] pr-[17px] relative z-3">
                <MoonIcon className="w-[30px] h-[30px] text-[var(--color-text)] transition-all duration-500" />
            </div>

            {/* absolute bg switch*/}
            <div className="absolute h-full w-[65px] rounded-[40px] bg-[var(--color-card)] left-0 dark:left-[47%] transition-all duration-500"></div>
        </button>
    );
}