import { ReactNode } from "react";

// Old way

// export const Section: React.FC<{ title: string }> = ({ children, title }) => {
//     return (
//         <section>
//             <h2>{title}</h2>
//             <p>{children}</p>
//         </section>
//     )
// }

// New way

type SectionProps = {
    title?: string, // Optional
    children: ReactNode
}

export const Section = ({ children, title = "My Subheading"}: SectionProps) => {
    return (
        <section>
            <h2>{title}</h2>
            <p>{children}</p>
        </section>
    )
}
