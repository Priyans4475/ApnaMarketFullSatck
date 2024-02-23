import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const Cart = React.lazy(() => import("pages/Cart"));
const ProductDetails = React.lazy(() => import("pages/ProductDetails"));
const ProductList = React.lazy(() => import("pages/ProductList"));
const CategorieswithSidebar = React.lazy(
  () => import("pages/CategorieswithSidebar"),
);
const HomepageVThree = React.lazy(() => import("pages/HomepageVThree"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/homepagevthree" element={<HomepageVThree />} />
          <Route
            path="/categorieswithsidebar"
            element={<CategorieswithSidebar />}
          />
          <Route path="/productlist" element={<ProductList />} />
          <Route path="/productdetails" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
