import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { HomeIcon } from "@heroicons/react/24/solid";

const DashboardSidebar = () => {
  return (
    <div className="shadow-md">
      <Link to="/">
        <h1 className=" hover:bg-gray-200  my-4 cursor-pointer p-2 m-2 rounded-lg">
          Phone-Hunter-Bd
        </h1>
      </Link>

      <div className="nav-container flex space-y-5 flex-col pb-5 pl-5">
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/dashboard/profile">Profile</Link>
        <Link to="/dashboard/editProfile">EditProfile</Link>
      </div>
    </div>
  );
};

export default DashboardSidebar;
