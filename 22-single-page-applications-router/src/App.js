import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/Home";
import ProductsPage from "./pages/Product.js";
import RootLayout from "./pages/Root.js";
import ErrorPage from "./pages/Error.js";

const router = createBrowserRouter([
  {
    path: "/", 
    element: <RootLayout />, 
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/products", element: <ProductsPage /> },
  ]},
  
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
