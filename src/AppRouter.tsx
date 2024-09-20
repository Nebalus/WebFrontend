import {createBrowserRouter} from "react-router-dom";
// import WorkAndProgress from "@/components/WorkAndProgress.tsx"
import LandingPage from "@/components/LandingPage.tsx";
import ErrorPage from "@/components/ErrorPage.tsx";
import LoginPage from "@/components/authentication/LoginPage.tsx";
import RegisterPage from "@/components/authentication/RegisterPage.tsx";
import DashboardRootLayout from "@/components/dashboard/DashboardRootLayout.tsx";

export const appRouter = createBrowserRouter([
    {
        id: "root",
        path: "/",
        element: <LandingPage />,
        errorElement: <ErrorPage />
    },
    {
        path: "dashboard",
        element: <DashboardRootLayout />,
        errorElement: <ErrorPage />
    },
    {
        path: "login",
        element: <LoginPage />,
        errorElement: <ErrorPage />
    },
    {
        path: "register",
        element: <RegisterPage />,
        errorElement: <ErrorPage />
    },
    {
        path: "logout",
        loader() {
            console.log("LOGGING OUT!");
            return null;
        },
        errorElement: <ErrorPage />
    },
]);