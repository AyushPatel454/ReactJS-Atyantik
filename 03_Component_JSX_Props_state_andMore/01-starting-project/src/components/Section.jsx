export default function Section({title, children, ...props}) {
    // ...props => id, className
    return (
        <section {...props}>
            <h2>{title}</h2>
            {children}
        </section>
    )
}