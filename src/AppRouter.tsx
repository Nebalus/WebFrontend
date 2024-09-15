import {createBrowserRouter} from "react-router-dom";
import WorkAndProgress from "@/components/WorkAndProgress.tsx"
import LoginView from "@/components/LoginView.tsx";
import LandingPage from "@/components/landingpage/LandingPage.tsx";

export const appRouter = createBrowserRouter([
    {
        id: "root",
        path: "/",
        element: <WorkAndProgress />,
        errorElement: <WorkAndProgress />
    },
    {
        path: "landingpage",
        element: <LandingPage />,
        errorElement: <WorkAndProgress />
    },
    {
        path: "login",
        element: <LoginView />,
        errorElement: <WorkAndProgress />
    },
    {
        path: 'logout',
        errorElement: <WorkAndProgress />
    },
]);