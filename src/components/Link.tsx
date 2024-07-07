import {Link as ReactRouterLink, To} from "react-router-dom";
import {PropsWithChildren} from "react";

type Props = PropsWithChildren<{
    to: To
}>

export const Link = ({to, children}: Props) => {
    return <ReactRouterLink to={to}>{children}</ReactRouterLink>
}