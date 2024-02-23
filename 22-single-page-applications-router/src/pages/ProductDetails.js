import { useParams } from "react-router";
import { Link } from "react-router-dom";

export default function ProductDetailPage() {
    
    const params = useParams();

    return (
        <>
            <h1>Product Detail Page</h1>
            <p>{params.productId}</p>
            <Link to=".." relative="path">Go Back</Link>
        </>
    );
}