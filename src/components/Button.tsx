import {MouseEventHandler, PropsWithChildren} from "react";

type Props = {
    onClickHandler: MouseEventHandler<HTMLButtonElement>,
}

export const Button = ({onClickHandler, children}: PropsWithChildren<Props>) => {
    return <button onClick={onClickHandler}>{children}</button>
}
