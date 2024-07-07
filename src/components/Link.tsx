import {Link as ReactRouterLink, To} from "react-router-dom";
import {PropsWithChildren} from "react";
import {HashLink} from "react-router-hash-link";
import styles from './Link.module.scss'

type Props = PropsWithChildren<{
    to: To;
    hash?: boolean
}>

export const Link = ({to, children, hash}: Props) => {
    return <div>
        {hash ?
            <HashLink to={`${to}${hash}`} className={styles.link}>{children}</HashLink> :
            <ReactRouterLink to={to} download={download} target='_blank'
                             className={styles.link}>{children}</ReactRouterLink>}
    </div>
}