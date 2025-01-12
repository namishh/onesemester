import { useState } from "react";

export const Accordion = ({ title, children }: { title: string; children: React.ReactNode }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-emerald-500">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex w-full justify-between items-center py-4 px-2 transition-colors"
            >
                <span className="font-medium">{title}</span>
                <span className="transform transition-transform duration-200" style={{
                    transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)'
                }}>
                    ▼
                </span>
            </button>
            <div className={`overflow-hidden transition-all duration-200 ${isOpen ? 'max-h-content py-4' : 'max-h-0'}`}>
                {children}
            </div>
        </div>
    );
};