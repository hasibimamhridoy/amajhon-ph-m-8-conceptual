import React from "react";
import Navbar from "../components/Navbar/Navbar";
import { Outlet, useNavigation } from "react-router-dom";
import Spinner from "../components/Spinner/Spinner";
import Footer from "../pages/Footer/Footer";

const MainLayout = () => {
    
  const navigation = useNavigation();
  const isLoadingProducts = navigation.state === "loading";

  return (
    <div>
      <Navbar></Navbar>

      {isLoadingProducts ? (
        <Spinner></Spinner>
      ) : (
        <div className="my-6 min-h-screen">
          <Outlet></Outlet>
        </div>
      )}

      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
