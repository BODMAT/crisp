import { useAccordionStore } from "../../store/accordion";

export function AccordionSettings() {
    const { isMultiple, setIsMultiple } = useAccordionStore();
    return (
        <div className="flex flex-col gap-3 py-5 mx-auto">
            <div className="flex items-center gap-3">
                <label htmlFor="pagination-toggle" className="fontRoboto font-semibold text-[18px] text-[var(--color-text)]">
                    Allow multiple
                </label>
                <input
                    id="pagination-toggle"
                    type="checkbox"
                    checked={isMultiple}
                    onChange={(e) => setIsMultiple(e.target.checked)}
                    className="w-5 h-5 accent-[var(--color-accent)] cursor-pointer"
                />
            </div>
        </div>
    )
}