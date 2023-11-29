import {createBrowserRouter} from "react-router-dom";
import Layout from "../hocs/Layout";
import ErrorPage from "./ErrorPage";
import PrivateRoutes from "../hocs/PrivateRoutes";
import AutenticationRoutes from "../hocs/AuthenticationRoutes";
import Authentication from "../containers/authentication/Authentication";
import Friends from "../containers/friends/Friends";
import FriendsProfile from "../containers/friends/FriendsProfile";
import Groups from "../containers/groups/Groups";
import AddExpense from "../containers/addExpense/AddExpense";
import Activity from "../containers/activity/Activity";
import Account from "../containers/account/Account";

export function getRouter(store) {
    return (
        createBrowserRouter([
        {
            path: "/",
            element: <Layout/>,
            errorElement: <ErrorPage />,
            children: [
                {
                    path: '/',
                    element:<AutenticationRoutes><Authentication/></AutenticationRoutes>,
                },
                {
                    path: "/authentication",
                    element:<AutenticationRoutes><Authentication/></AutenticationRoutes>,
                },
                {
                    path: "/friends",
                    element:<PrivateRoutes><Friends/></PrivateRoutes>,
                },
                {
                    path: "/friends/:id",
                    element:<PrivateRoutes><FriendsProfile/></PrivateRoutes>,
                },
                {
                    path: "/groups",
                    element:<PrivateRoutes><Groups/></PrivateRoutes>,
                },
                {
                    path: "/activity",
                    element:<PrivateRoutes><Activity/></PrivateRoutes>,
                },
                {
                    path: "/addExpense",
                    element:<PrivateRoutes><AddExpense/></PrivateRoutes>,
                },
                {
                    path: "/account",
                    element:<PrivateRoutes><Account/></PrivateRoutes>,
                },
              ],
        }
        
      ]));
}
