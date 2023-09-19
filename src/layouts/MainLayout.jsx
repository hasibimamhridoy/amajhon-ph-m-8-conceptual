import React, { useEffect } from "react";
import Navbar from "../components/Navbar/Navbar";
import { Outlet, useLocation, useNavigation } from "react-router-dom";
import Spinner from "../components/Spinner/Spinner";
import Footer from "../pages/Footer/Footer";

const MainLayout = () => {
    
  const navigation = useNavigation();
  const loc = useLocation()
  const isLoadingProducts = navigation.state === "loading";


  useEffect(()=>{

    console.log("useEffect loc",loc);

    if (loc.pathname === '/') {
      document.title = `Amajhon - home`
    }
    else{
      document.title = `Amajhon${loc.pathname.replace('/','-')}`
    }

    if (loc.state) {
      document.title = loc.state
    }


  },[loc.pathname,loc])

  console.log(loc);

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
