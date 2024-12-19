import React from "react";
import ReactDom from "react-dom/client";
import Body from "./src/components/Body";
import { createBrowserRouter, RouterProvider, Outlet, useLocation } from "react-router";
import Header from "./src/components/Header";
import Skills from "./src/components/Skills";
import ContactMe from "./src/components/ContactMe";
import Particlescomp from "./src/components/Particlescomp";
import About from "./src/components/About";
import Resume from "./src/components/Resume"
const Portapp = () => {
  const location = useLocation();
  const path = location.pathname==="/"
  
  return (
    <div className="App-layout">
      {path && <Particlescomp />}
      <Header />
      <Outlet />
    </div>
  );
}
const routeApp = createBrowserRouter([
  {
    path: "/",
    element: <Portapp />,
    children: [
      {
        path: "/",
        element: <Body />,
      } ,
      
      {
        path : "/skills",
        element: <Skills />
      },
      {
        path: "/ContactMe",
        element: <ContactMe />
      },
      {
        path: "/About",
        element: <About />
      },
      {

        path: "/resume",
        element: <Resume />
      }
    ],
  },
]);

const root = ReactDom.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={routeApp} />)
