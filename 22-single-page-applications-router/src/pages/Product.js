import { Link } from "react-router-dom";

const PRODUCTS = [
  { id: 'p1', title: 'A Book' },
  { id: 'p2', title: 'A Carpet' },
  { id: 'p3', title: 'A Desk' },
];

export default function ProductPage() {
  return (
    <div>
      <h1>Product Page</h1>
      <ul>
        {
          PRODUCTS.map(product => (
            <li key={product.id}>
              <Link to={`${product.id}`}>{product.title}</Link>
            </li>
            )
          )
        }
      </ul>
    </div>
  );
}