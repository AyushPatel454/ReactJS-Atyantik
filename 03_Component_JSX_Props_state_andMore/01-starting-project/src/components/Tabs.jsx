// This will use for showing the Tabs and the content of the tabs. (example:- navbar and the content of the navbar)
export default function Tabs({children, buttons}) {
    return (
        <>
            <menu>{buttons}</menu>
            {children}
        </>
    );
}