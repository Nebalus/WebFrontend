import {createBrowserRouter} from "react-router-dom";
import WorkAndProgress from "@/components/WorkAndProgress.tsx"
import LandingPage from "@/components/landingpage/LandingPage.tsx";

export const appRouter = createBrowserRouter([
    {
        id: "root",
        path: "/",
        element: <LandingPage />,
        errorElement: <WorkAndProgress />
    },
    {
        path: "login",
        element: <WorkAndProgress />,
        errorElement: <WorkAndProgress />
    },
    {
        path: 'logout',
        errorElement: <WorkAndProgress />
    },
]);