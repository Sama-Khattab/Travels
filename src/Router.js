import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Packages from "./pages/Packages";
import Dest from "./pages/Dest";
import TravelGuide from "./pages/TravelGuide";
import Book from "./pages/Book";
import NotFoundPage from "./pages/NotFoundPage";
import Contact from "./pages/Contact";
import Testimonial from "./pages/Testimonial";
import Regestration from "./pages/Regestration";
import LogIn from "./pages/LogIn";


export const router = createBrowserRouter ([
    {
        path:"/",
        element:<App/>,
        children:[
           {
            path:"/",
            element:<Home/>
           },
           {
            path:"/About",
            element:<About/>,
           },
           {
            path:"/Services",
            element:<Services/>,
           },
           {
            path:"/Packages",
            element:<Packages/>
           },
           {
            path:"/Destinations",
            element:<Dest/>
           },
           {
            path:"/travel-guids",
            element:<TravelGuide/>
           },
           {
            path:"/Booking",
            element:<Book/>,
           },
           {
            path:"/Contact",
            element:<Contact/>
           },
           {
            path:"/Testimonial",
            element:<Testimonial/>
           },
           {
            path:"/Regestration",
            element:<Regestration/>
           },
           {
            path:"/Log-in",
            element:<LogIn/>
           },
           {
            path:"*",
            element:<NotFoundPage/>,
           },
    ]
    }
])