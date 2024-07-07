import {Navigation} from "./Navigation.tsx";
import {Outlet} from "react-router-dom";


export const Layout = () => {
    return <>
        <Navigation/>
        <Outlet/>
    </>
}