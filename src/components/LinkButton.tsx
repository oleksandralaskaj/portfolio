import {Link, To} from "react-router-dom";
import {PropsWithChildren} from "react";

type Props = PropsWithChildren<{
    to: To
}>
export const LinkButton = ({children, to}: Props) => {
    return <Link to={to}>{children}</Link>
}