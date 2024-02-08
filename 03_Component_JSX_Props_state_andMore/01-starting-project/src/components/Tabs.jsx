// This will use for showing the Tabs and the content of the tabs. (example:- navbar and the content of the navbar)
export default function Tabs({children, buttons, buttonsContainer}) {
    const ButtonContainer = buttonsContainer; // <menu>...</menu> // convert into custom tag.
    return (
        <>
            <ButtonContainer>{buttons}</ButtonContainer>
            {children}
        </>
    );
}