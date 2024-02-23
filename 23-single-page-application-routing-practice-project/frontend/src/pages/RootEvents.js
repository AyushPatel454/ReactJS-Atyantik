import { Outlet } from "react-router";
import EventNavigationBar from "../layout/EventsNavigatonBar";

export default function RootEvents() {
    return (
        <>
            <EventNavigationBar />
            <Outlet />
        </>
    );
}