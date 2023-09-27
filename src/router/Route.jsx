import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/home/Home";
import Donation from "../pages/donation/Donation";
import Statistics from "../pages/statistic/Statistics";
import ErrorCard from "../components/Cards/errorCard/ErrorCard";
import ManyItem from "../pages/manyItem/ManyItem";


const myCreatedRoute = createBrowserRouter([
    {
        path:"/",
        element:<MainLayout></MainLayout>,
        errorElement:<ErrorCard></ErrorCard>,
        children:[
            {
                path:"/",
                element:<Home></Home>,
                loader:()=>fetch('card.json')
                
            },
            {
                path:"/Donation",
                element:<Donation></Donation>,
            },
            {
                path:"/Statistics",
                element:<Statistics></Statistics>,
            },
            {
                path:"/Donatin/:ID",
                element:<ManyItem></ManyItem>,
                loader:()=>fetch('card.json')
                
                
            }
        ]
    }
])
export default myCreatedRoute;