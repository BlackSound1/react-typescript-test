import { ReactNode } from "react";

interface ListProps<T> {
    items: T[],  // Array of generic types
    render: (item: T) => ReactNode
};

// The , in the generic types allow T to be recognized as a generic type
// Could also write <T extends {}>
const List = <T,>({ items, render }: ListProps<T>) => {
    return (
        <ul>
            {items.map((item, i) => (
                <li key={i}>
                    {render(item)}
                </li>
            ))}
        </ul>
    );
};

export default List;
