import App from "../App";
import Signup from "../Components/Common/Signup";
import Dashboard from "../Components/Dashboard/Dashboard";
import DashboardContent from "../Components/Dashboard/DashboardContent";
import Login from "../Components/Common/Login";
import Liked from "../Components/Common/Liked";
import Profile from "../Components/Profile/Profile";
import SearchedPodcast from "../Components/Common/SearchedPodcast";
import DisplayPodcasts from "../Components/Dashboard/DisplayPodcasts";
import ErrorPage from "../Components/Common/ErrorPage";

export const routers = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        index: true,
        element: <DashboardContent />,
      },
      // {
      //   path: "/dashboard/liked",
      //   element: <Liked />,
      // },
      // {
      //   path: "/dashboard/profile",
      //   element: <Profile />,
      // },
      {
        path: "/dashboard/search/:search",
        element: <SearchedPodcast />,
      },
      {
        path: "/dashboard/podcast/:name",
        element: <DisplayPodcasts />,

      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
 
];
