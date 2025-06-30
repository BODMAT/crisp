import { useBurgerMenu } from "../hooks/useBurgerMenu";
import { useEffect } from "react";
import { Menu } from "./Menu";
import LogoIcon from "../assets/logo.svg?react";
export function FixedHeader() {
    const { isBurgerOpen, toggleBurger, isMobile } = useBurgerMenu();
    useEffect(() => {
        document.body.style.overflow = isBurgerOpen && isMobile ? "hidden" : "";
        document.body.style.height = isBurgerOpen && isMobile ? "100vh" : "";

        return () => {
            const root = document.getElementById("root");
            if (root) {
                root.style.overflow = "";
                root.style.height = "";
            }
        };
    }, [isBurgerOpen, isMobile]);

    return (
        <header className="bg-[var(--color-background)] transitioned py-2 h-[80px]">
            <div className="myContainer h-full flex justify-between gap-7 items-center">
                <a href="/crisp/" className="text-[var(--color-text)] transitioned font-black fontTitle text-[50px] max-[620px]:text-[35px]">
                    <LogoIcon className="stroke-current text-[var(--color-text)] transition-all duration-500" />
                </a>
                {!isMobile ? (
                    <div className="flex gap-10 items-center"><Menu /></div>
                ) : (
                    <button onClick={toggleBurger} className="group w-[36px] rounded-lg border-0 cursor-pointer">
                        <div className="grid justify-items-center gap-1.5">
                            {["rotate-45 translate-y-2.5", "scale-x-0", "-rotate-45 -translate-y-2.5"].map(
                                (cls, i) => (
                                    <span
                                        key={i}
                                        className={`h-1 w-9 bg-[var(--color-text)] rounded-full transition-all duration-500 ${isBurgerOpen ? cls : ""
                                            }`}
                                    ></span>
                                )
                            )}
                        </div>
                    </button>
                )}

                <div
                    className={`fixed top-[80px] left-0 h-[calc(100vh-80px)] w-full z-50 transition-transform transitioned bg-black/75 text-white ${isBurgerOpen ? "translate-x-0" : "-translate-x-full"
                        }`}
                >
                    <div className="flex flex-col items-center justify-center gap-10 py-15 text-3xl">
                        <Menu />
                    </div>
                </div>
            </div>
        </header>
    )
}