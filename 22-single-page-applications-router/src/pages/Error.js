import MainNavigation from "../components/MainNavigation";

export default function ErrorPage() {
    return (
        <>
            <MainNavigation />
            <main>
                <h1>Page Not Found!</h1>
                <p>Could not find this page!</p>
            </main>
        </>
    );
}