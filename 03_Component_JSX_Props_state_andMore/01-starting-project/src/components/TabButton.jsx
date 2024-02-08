export default function TabButton({children, isSelected, ...props}) {
    // ...props => onClick, className
    return (
        <li>
            <button className={isSelected ? "active" : undefined} {...props}>{children}</button>
        </li>
    );
}