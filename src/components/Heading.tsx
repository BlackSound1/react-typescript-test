import { ReactElement } from "react";

// Can define props as a type
type HeadingProps = { title: string };


const Heading = ({ title }: HeadingProps): ReactElement => {
    return <h1>{title}</h1>
}

export default Heading;
