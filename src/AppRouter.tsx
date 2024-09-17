import {createBrowserRouter} from "react-router-dom";
import WorkAndProgress from "@/components/WorkAndProgress.tsx"
import LandingPage from "@/components/LandingPage.tsx";
import ErrorPage from "@/components/ErrorPage.tsx";
import LoginView from "@/components/LoginView.tsx";

export const appRouter = createBrowserRouter([
    {
        id: "root",
        path: "/",
        element: <LandingPage />,
        errorElement: <ErrorPage />
    },
    {
        path: "login",
        element: <LoginView />,
        errorElement: <WorkAndProgress />
    }
]);