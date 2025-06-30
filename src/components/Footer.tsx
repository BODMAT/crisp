import GitHubIcon from '../assets/github-mark.svg?react';
import { SwitchTheme } from './SwitchTheme';
export function Footer() {
    return (
        <footer className="bg-[var(--color-background)] transitioned py-3 min-h-[80px]">
            <div className="myContainer h-full flex justify-between gap-7 items-center max-[520px]:flex-wrap max-[520px]:justify-center  max-[520px]:gap-2 max-[520px]:text-center">
                <p className='text-[var(--color-text)] text-[18px] transitioned fontOswald font-regular tracking-wide uppercase'>© 2025 CRISP - BODMAT</p>
                <div className="flex gap-5">
                    <SwitchTheme />
                    <a target='_blank' href='https://github.com/BODMAT' className=" p-2 rounded-full flex items-center justify-center transitioned hover:scale-110 cursor-pointer">
                        <GitHubIcon className="w-[40px] h-[40px] stroke-current text-[var(--color-text)] transition-all duration-500" />
                    </a>
                </div>
            </div>
        </footer>
    )
}