import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Front from "./Front";
import Newarrival from "./Newarrival";
import Links from "components/Links";
const Home = () => {
  return (
    <div className="">
      <Header/>
     
  <div className="flex justify-evenly mt-4">
      
        
         <Links name={"HomepageVThree"} to={"homepagevthree"} />
         <Links name={"CategorieswithSidebar"} to={"categorieswithsidebar"} />
         <Links name={"ProductList"} to={"productlist"} />
         <Links name={"ProductDetails"} to={"productdetails"} />
         <Links name={"Cart"} to={"cart"} />
         
{/*        
        <li>
          <Link className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800"to="/categorieswithsidebar">CategorieswithSidebar</Link>
        </li>
        <li>
          <Link className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800" to="/productlist">ProductList</Link>
        </li>
        <li>
          <Link className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800" to="/productdetails">ProductDetails</Link>
        </li>
        <li>
          <Link className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800" to="/cart">Cart</Link>
        </li> */}
      
      </div>
      <Front/>
      <Newarrival/>
    </div>
  );
};
export default Home;
