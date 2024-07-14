import { Link as ReactRouterLink, To } from "react-router-dom";
import { ReactNode } from "react";
import styles from "./TransitiveLink.module.scss";

type Props = {
  to: To;
  children: ReactNode;
};
export const TransitiveLink = ({ to, children }: Props) => {
  return (
    <ReactRouterLink to={to} target="_blank" className={styles.link}>
      {children}
    </ReactRouterLink>
  );
};
