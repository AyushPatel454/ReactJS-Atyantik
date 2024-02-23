import { Link } from "react-router-dom";

export default function Home() {
    return <>
    <h1>My Home page.</h1>
    <p>Go to products page. <Link to="/products">Products...</Link></p>
    </>;
}