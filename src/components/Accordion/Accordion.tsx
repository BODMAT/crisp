import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useAccordionStore } from "../../store/accordion";

export function Accordion({
    data,
}: {
    data: Record<string, string | undefined | null>;
}) {
    const [openIndexes, setOpenIndexes] = useState<number[]>([]);
    const { isMultiple } = useAccordionStore();
    const entries = Object.entries(data).filter(
        ([title, content]) => title && content
    );

    const toggle = (index: number) => {
        setOpenIndexes((prev) =>
            prev.includes(index)
                ? prev.filter((i) => i !== index)
                : isMultiple
                    ? [...prev, index]
                    : [index]
        );
    };

    return (
        <div className="w-full">
            {entries.map(([title, content], index) => (
                <div key={index}>
                    <button
                        onClick={() => toggle(index)}
                        className="w-full text-left p-4 text-[var(--color-text)] fontOswald cursor-pointer font-semibold flex justify-between items-center"
                    >
                        <h4>{title}</h4>
                        <div className="relative w-4 h-4">
                            <span
                                className={`absolute left-0 top-1/2 w-full h-[2px] bg-current transition-transform duration-300 origin-center ${openIndexes.includes(index) ? "rotate-45" : "-rotate-45 translate-y-1"
                                    }`}
                            />
                            <span
                                className={`absolute left-0 bottom-1/2 w-full h-[2px] bg-current transition-transform duration-300 origin-center ${openIndexes.includes(index) ? "-rotate-45 top-1/2" : "rotate-45 -translate-y-1"
                                    }`}
                            />
                        </div>
                    </button>

                    <AnimatePresence initial={false}>
                        {openIndexes.includes(index) && (
                            <motion.div
                                key="content"
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                className="overflow-hidden"
                            >
                                <div className="p-4 text-[var(--color-text)] fontRoboto">{content}</div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            ))}
        </div>
    );
}
