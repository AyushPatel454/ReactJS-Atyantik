import { Link, useNavigate } from "react-router-dom";

export default function Home() {
    const navigate = useNavigate();

    function handleNavigate() {
        navigate('/products');
    }

    return <>
        <h1>My Home page.</h1>
        <p>Go to products page. <Link to="/products">Products...</Link></p>
        <button onClick={handleNavigate}> Navigate to Products</button>
    </>;
}