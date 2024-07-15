import { Link as ReactRouterLink, To } from "react-router-dom";
import { PropsWithChildren } from "react";
import { HashLink } from "react-router-hash-link";
import styles from "./LinkButton.module.scss";

type Props = PropsWithChildren<{
  to: To;
  download?: boolean;
  hash?: string;
}>;
export const LinkButton = ({ children, to, download, hash }: Props) => {
  return (
    <div className={styles.button}>
      {hash ? (
        <HashLink to={`${to}${hash}`}>{children}</HashLink>
      ) : (
        <ReactRouterLink to={to} download={download}>
          {children}
        </ReactRouterLink>
      )}
    </div>
  );
};
