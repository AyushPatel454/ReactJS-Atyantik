import { Outlet } from "react-router";
import MainNavigationBar from "../layout/MainNavigationBar";

export default function RootLayout() {
    return (
        <>
            <MainNavigationBar />
            <Outlet />
        </>
    );
}