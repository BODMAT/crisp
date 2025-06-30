import { type Colors } from "../models/productsModel";
import { useFilterStore } from "../store/filters";

const colorStyles: Record<Colors, string> = {
    white: "bg-white",
    black: "bg-black",
    blue: "bg-blue-500",
    yellow: "bg-yellow-400",
    green: "bg-green-500",
};

export function Filters({ isInPopup }: { isInPopup?: boolean }) {
    const { currentColorInPopup, currentColorInProducts, setCurrentColorInProducts, setCurrentColorInPopup, availableColorsInPopup } = useFilterStore();

    const colors: Colors[] = isInPopup
        ? availableColorsInPopup ?? []
        : ["white", "black", "blue", "yellow", "green"];

    return (
        <div className="flex gap-3 items-center rounded-2xl border-2 border-[var(--color-text)] px-3 py-1">
            {!isInPopup && (
                <h2 className="text-[var(--color-text)] text-[35px] fontOswald font-bold max-sm:text-[25px]">
                    Filters:
                </h2>
            )}
            <div className="flex flex-wrap justify-center gap-2 max-sm:gap-1">
                {colors.map((c, i) => (
                    <label key={i} className="cursor-pointer">
                        <input
                            type="checkbox"
                            checked={isInPopup ? currentColorInPopup === c : currentColorInProducts === c}
                            onChange={() => {
                                if (!isInPopup) {
                                    setCurrentColorInProducts(currentColorInProducts === c ? null : c);
                                } else {
                                    setCurrentColorInPopup(c);
                                }
                            }}
                            className="sr-only peer"
                        />
                        <div
                            className={`w-10 h-10 border border-gray-300 rounded-full peer-checked:ring-4 ring-[var(--color-accent)] ${colorStyles[c]}`}
                        />
                    </label>
                ))}

            </div>
        </div>
    );
}
