import {createBrowserRouter} from "react-router-dom";
import WorkAndProgress from "@/components/WorkAndProgress.tsx"
import LandingPage from "@/components/landingpage/LandingPage.tsx";
import {ErrorPage} from "@/components/ErrorPage.tsx";

export const appRouter = createBrowserRouter([
    {
        id: "root",
        path: "/",
        element: <LandingPage />,
        errorElement: <ErrorPage />
    },
    {
        path: "login",
        element: <WorkAndProgress />,
        errorElement: <WorkAndProgress />
    }
]);