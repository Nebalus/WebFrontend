import {createBrowserRouter, redirect} from "react-router-dom";
import LandingPage from "@/components/LandingPage.tsx";
import ErrorPage from "@/components/ErrorPage.tsx";
import LoginPage from "@/components/authentication/LoginPage.tsx";
import RegisterPage from "@/components/authentication/RegisterPage.tsx";
import DashboardRootLayout from "@/components/dashboard/rootlayout/DashboardRootLayout.tsx";
import loginAction from "@/actions/loginAction.ts";
import registerAction from "@/actions/registerAction.ts";
import DashBoard from "@/components/dashboard/DashBoard.tsx";
import ReferralsBoard from "@/components/dashboard/ReferralsBoard.tsx";
import LinktreeBoard from "@/components/dashboard/LinktreeBoard.tsx";
import AnalyticsBoard from "@/components/dashboard/AnalyticsBoard.tsx";
import TodosBoard from "@/components/dashboard/TodosBoard.tsx";
import TicketsBoard from "@/components/dashboard/TicketsBoard.tsx";
import ReferralPage from "@/components/referral/ReferralPage.tsx";
import ApiCommunicator from "@/communicator/ApiCommunicator.ts";
import protectedLoader from "@/loader/protectedLoader.ts";
import authenticatedLoader from "@/loader/authenticatedLoader.ts";
import {APP_DASHBOARD_PATH} from "@/constants.ts";
import WorkAndProgress from "@/components/WorkAndProgress.tsx";
import TimeCapsuleBoard from "@/components/dashboard/TimeCapsuleBoard.tsx";

export const appRouter = createBrowserRouter([
    {
        id: "root",
        path: "/",
        element: <LandingPage />,
        errorElement: <ErrorPage />
    },
    {
        path: APP_DASHBOARD_PATH,
        element: <DashboardRootLayout />,
        loader: protectedLoader,
        children: [
            {
                path: "",
                element: <DashBoard />
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
            },
            {
                path: "timecapsule",
                element: <TimeCapsuleBoard />
            }
        ]
    },
    {
        path: "ref/:referral_id",
        element: <ReferralPage />
    },
    {
        path: "linktree/:linktree_id",
        element: <WorkAndProgress />
    },
    {
        path: "login",
        action: loginAction,
        loader: authenticatedLoader,
        element: <LoginPage />
    },
    {
        path: "register",
        action: registerAction,
        loader: authenticatedLoader,
        element: <RegisterPage />
    },
    {
        path: "logout",
        loader() {
            ApiCommunicator.logout();
            return redirect('/login');
        }
    },
]);