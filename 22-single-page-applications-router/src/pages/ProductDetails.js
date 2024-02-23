import { useParams } from "react-router";

export default function ProductDetailPage() {
    
    const params = useParams();

    return (
        <>
            <h1>Product Detail Page</h1>
            <p>{params.productId}</p>
        </>
    );
}