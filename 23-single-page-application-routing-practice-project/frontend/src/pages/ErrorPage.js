import { useRouteError } from "react-router";
import PageContent from "../components/PageContent";
import MainNavigationBar from "../layout/MainNavigationBar";

export default function ErrorPage() {
    const error = useRouteError();
    let title = "An Error Occurred";
    let message = "Something went wrong.";

    if (error.status === 500) {
        message = JSON.parse(error.data).message;
    }

    if (error.status === 404) {
        title = "Not found!";
        message = "Could not find the resource.";
    }

    return (
        <>
            <MainNavigationBar />
            <PageContent title={title}>
                {message}
            </PageContent>
        </>
    );
}