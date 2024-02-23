import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/Home";
import ProductsPage from "./pages/Product.js";
import RootLayout from "./pages/Root.js";

const router = createBrowserRouter([
  {
    path: "/", 
    element: <RootLayout />, 
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/products", element: <ProductsPage /> },
  ]},
  
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
