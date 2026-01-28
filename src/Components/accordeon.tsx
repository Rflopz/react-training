import { useState } from "react";

interface AccordeonProps {
    title: string;
    children: React.ReactNode;
}

interface AccordeonItemProps {
    title: string;
    children: (isOpen: boolean) => React.ReactNode;
}

function Accordeon({ title, children }: AccordeonProps) {
    return (
        <div>
            {children}
        </div>
    )
}

function AccordeonItem({ title, children }: AccordeonItemProps) {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div style={{ border: "1px solid #ccc" }}>
            <h3 onClick={() => setIsOpen(!isOpen)} style={{ cursor: "pointer" }}>{title}</h3>
            {isOpen && children(isOpen)}
        </div>
    )
}

Accordeon.Item = AccordeonItem

export default Accordeon