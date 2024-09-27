import {createBrowserRouter } from "react-router-dom";
import LandingPage from "@/components/LandingPage.tsx";
import ErrorPage from "@/components/ErrorPage.tsx";
import LoginPage from "@/components/authentication/LoginPage.tsx";
import RegisterPage from "@/components/authentication/RegisterPage.tsx";
import DashboardRootLayout from "@/components/dashboard/rootlayout/DashboardRootLayout.tsx";
import loginAction from "@/actions/loginAction.ts";
import registerAction from "@/actions/registerAction.ts";
import Dashboard from "@/components/dashboard/Dashboard.tsx";
import ReferralsBoard from "@/components/dashboard/ReferralsBoard.tsx";
import LinktreeBoard from "@/components/dashboard/LinktreeBoard.tsx";
import AnalyticsBoard from "@/components/dashboard/AnalyticsBoard.tsx";
import TodosBoard from "@/components/dashboard/TodosBoard.tsx";
import TicketsBoard from "@/components/dashboard/TicketsBoard.tsx";
import ReferralPage from "@/components/referral/ReferralPage.tsx";

export const appRouter = createBrowserRouter([
    {
        id: "root",
        path: "/",
        element: <LandingPage />,
        errorElement: <ErrorPage />
    },
    {
        path: "-",
        element: <DashboardRootLayout />,
        children: [
            {
                path: "",
                element: <Dashboard />
            },
            {
                path: "referrals",
                element: <ReferralsBoard />
            },
            {
                path: "linktree",
                element: <LinktreeBoard />
            },
            {
                path: "analytics",
                element: <AnalyticsBoard />
            },
            {
                path: "todos",
                element: <TodosBoard />
            },
            {
                path: "tickets",
                element: <TicketsBoard />
            }
        ]
    },
    {
        path: "ref/:referral_id",
        element: <ReferralPage />
    },
    {
        path: "login",
        action: loginAction,
        element: <LoginPage />
    },
    {
        path: "register",
        action: registerAction,
        element: <RegisterPage />
    },
    {
        path: "logout",
        loader() {
            console.log("LOGGING OUT!");
            return null;
        }
    },
]);