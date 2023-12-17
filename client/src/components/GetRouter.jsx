import {createBrowserRouter, Navigate} from "react-router-dom";
import Layout from "../hocs/Layout";
import ErrorPage from "./ErrorPage";
import PrivateRoutes from "../hocs/PrivateRoutes";
import AutenticationRoutes from "../hocs/AuthenticationRoutes";
import Authentication from "../containers/authentication/Authentication";
import Friends from "../containers/friends/Friends";
import FriendsProfile from "../containers/friends/FriendsProfile";
import AddFriends from "../containers/friends/AddFriends";
import Groups from "../containers/groups/Groups";
import AddExpense from "../containers/addExpense/AddExpense";
import Activity from "../containers/activity/Activity";
import Account from "../containers/account/Account";
import Pending from "../containers/stockBuddy/Pending";
import AddGroups from "../containers/groups/AddGroups";
import GroupsProfile from "../containers/groups/GroupsProfile";




export function getRouter(store) {
    const stockBuudyRoutes={
        path: "/stockBuddy",
        element: <PrivateRoutes bottomBar={false} ><Pending/></PrivateRoutes>,
    };
    return (
        createBrowserRouter([
        {
            path: "/",
            element: <Layout/>,
            errorElement: <ErrorPage />,
            children: [
                {
                    path: '/',
                    element:<AutenticationRoutes><Navigate to="/authentication" replace={true} /></AutenticationRoutes>,
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
                    path: "/friendsadd",
                    element:<PrivateRoutes><AddFriends/></PrivateRoutes>,
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
                    path: "/groupsadd",
                    element:<PrivateRoutes><AddGroups/></PrivateRoutes>,
                },
                {
                    path: "/groups/:id",
                    element:<PrivateRoutes><GroupsProfile/></PrivateRoutes>,
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
                stockBuudyRoutes,
              ],
        },
        
        
      ]));
}
