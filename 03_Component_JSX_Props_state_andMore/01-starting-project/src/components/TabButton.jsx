export default function TabButton({children}) {
    function handleClick() {
        console.log("Button Clicked!");
    }
    return (
        <li>
            <button onClick={handleClick}>{children}</button>
        </li>
    );
}