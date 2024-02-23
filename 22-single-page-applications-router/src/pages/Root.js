import { Outlet } from "react-router";
import MainNavigation from "../components/MainNavigation.js";

export default function RootLayout() {
    return (
        <>
            <MainNavigation />
            <main>
                <Outlet />
            </main>
        </>
    );
}