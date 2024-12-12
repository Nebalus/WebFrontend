import {createBrowserRouter, redirect} from "react-router-dom";
import LandingPage from "@/components/LandingPage.tsx";
import ErrorPage from "@/components/ErrorPage.tsx";
import LoginPage from "@/components/authentication/LoginPage.tsx";
import RegisterPage from "@/components/authentication/RegisterPage.tsx";
import DashboardRootLayout from "@/components/dashboard/rootlayout/DashboardRootLayout.tsx";
import loginAction from "@/actions/loginAction.ts";
import registerAction from "@/actions/registerAction.ts";
import HomeBoard from "@/components/dashboard/boards/HomeBoard.tsx";
import ReferralsBoard from "@/components/dashboard/boards/ReferralsBoard.tsx";
import LinktreeBoard from "@/components/dashboard/boards/LinktreeBoard.tsx";
import AnalyticsBoard from "@/components/dashboard/boards/AnalyticsBoard.tsx";
import TodosBoard from "@/components/dashboard/boards/TodosBoard.tsx";
import TicketsBoard from "@/components/dashboard/boards/TicketsBoard.tsx";
import ReferralPage from "@/components/referral/ReferralPage.tsx";
import ApiCommunicator from "@/communicator/ApiCommunicator.ts";
// import protectedLoader from "@/loader/protectedLoader.ts";
import authenticatedLoader from "@/loader/authenticatedLoader.ts";
import {APP_DASHBOARD_PATH} from "@/constants.ts";
import WorkInProgress from "@/components/WorkInProgress.tsx";
import TimeCapsuleBoard from "@/components/dashboard/boards/TimeCapsuleBoard.tsx";
import {ProfileSettings} from "@/components/settings/ProfileSettings.tsx";

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
        // loader: protectedLoader,
        children: [
            {
                path: "",
                element: <HomeBoard />
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
        path: APP_DASHBOARD_PATH + "settings",
        element: <ProfileSettings />,
        // loader: protectedLoader,
    },
    {
        path: "ref/:referral_id",
        element: <ReferralPage />
    },
    {
        path: "linktree/:linktree_id",
        element: <WorkInProgress />
    },
    {
        path: "form/:form_id",
        element: <WorkInProgress />
    },
    {
        path: "filetransfer/:file_id",
        element: <WorkInProgress />
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
