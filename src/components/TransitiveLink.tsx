import { Link as ReactRouterLink, To } from "react-router-dom";
import { ReactNode } from "react";
import styles from "./TransitiveLink.module.scss";

type Props = {
  to?: To;
  children: ReactNode;
};
export const TransitiveLink = ({ to, children }: Props) => {
  if (!to) {
    return children;
  }

  return (
    <ReactRouterLink to={to} className={styles.link}>
      {children}
    </ReactRouterLink>
  );
};
