import { useSwiperStore } from "../../store/swiperSchema";

export function SwiperSettings() {
    const { navigation, pagination, slidesPerViewMax, gap, setGap, setSlidesPerViewMax, setNavigation, setPagination } = useSwiperStore();

    return (
        <div className="flex flex-col gap-3 pb-5 mx-auto">
            <div className="flex items-center gap-3">
                <label htmlFor="pagination-toggle" className="fontRoboto font-semibold text-[18px] text-[var(--color-text)]">
                    Pagination
                </label>
                <input
                    id="pagination-toggle"
                    type="checkbox"
                    checked={pagination}
                    onChange={(e) => setPagination(e.target.checked)}
                    className="w-5 h-5 accent-[var(--color-accent)] cursor-pointer"
                />
            </div>

            <div className="flex items-center gap-3">
                <label htmlFor="navigation-toggle" className="fontRoboto font-semibold text-[18px] text-[var(--color-text)]">
                    Navigation
                </label>
                <input
                    id="navigation-toggle"
                    type="checkbox"
                    checked={navigation}
                    onChange={(e) => setNavigation(e.target.checked)}
                    className="w-5 h-5 accent-[var(--color-accent)] cursor-pointer"
                />
            </div>

            <div className="flex items-center gap-3">
                <label htmlFor="gap" className="fontRoboto font-semibold text-[18px] text-[var(--color-text)]">
                    Space between slides
                </label>
                <input
                    id="gap"
                    type="range"
                    value={gap}
                    onChange={(e) => (setGap(Number(e.target.value)))}
                    className="w-25 h-5 accent-[var(--color-accent)] cursor-pointer"
                />
            </div>

            <div className="flex items-center gap-3">
                <label htmlFor="slidesPerViewMax" className="fontRoboto font-semibold text-[18px] text-[var(--color-text)]">
                    Maximum number of slides on the desktop
                </label>
                <input
                    id="slidesPerViewMax"
                    min={2}
                    max={4}
                    type="range"
                    value={slidesPerViewMax}
                    onChange={(e) => setSlidesPerViewMax(Number(e.target.value) as 2 | 3 | 4)}
                    className="w-25 h-5 accent-[var(--color-accent)] cursor-pointer"
                />
            </div>
        </div>
    )
}