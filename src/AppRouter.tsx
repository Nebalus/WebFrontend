import {createBrowserRouter, redirect} from "react-router-dom";
import LandingPage from "@/components/LandingPage.tsx";
import ErrorPage from "@/components/ErrorPage.tsx";
import LoginPage from "@/components/authentication/LoginPage.tsx";
import RegisterPage from "@/components/authentication/RegisterPage.tsx";
import DashboardRootLayout from "@/components/dashboard/rootlayout/DashboardRootLayout.tsx";
import loginAction from "@/actions/loginAction.ts";
import registerAction from "@/actions/registerAction.ts";
import HomeBoard from "@/components/dashboard/HomeBoard";
import ReferralsBoard from "@/components/dashboard/services/referral/ReferralsBoard";
import LinktreeBoard from "@/components/dashboard/services/linktree/LinktreeBoard";
import TodosBoard from "@/components/dashboard/services/todos/TodosBoard";
import ReferralPage from "@/components/dashboard/services/referral/ReferralPage";
import ApiCommunicator from "@/communicator/ApiCommunicator.ts";
// import protectedLoader from "@/loader/protectedLoader.ts";
import authenticatedLoader from "@/loader/authenticatedLoader.ts";
import {APP_DASHBOARD_PATH} from "@/constants.ts";
import WorkInProgress from "@/components/WorkInProgress.tsx";
import TimeCapsuleBoard from "@/components/dashboard/services/timecapsule/TimeCapsuleBoard";
import {AccountSettings} from "@/components/settings/AccountSettings";
import FormsBoard from "./components/dashboard/services/forms/FormsBoard";
import ApodBoard from "./components/dashboard/services/apod/ApodBoard";

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
                element: <ReferralsBoard />,
                children: [
                    {
                        path: "create",
                        element: <ReferralsBoard />,
                    }
                ]
            },
            {
                path: "linktree",
                element: <LinktreeBoard />
            },
            {
                path: "todos",
                element: <TodosBoard />
            },
            {
                path: "timecapsule",
                element: <TimeCapsuleBoard />
            },
            {
                path: "forms",
                element: <FormsBoard />
            },
            {
                path: "apod",
                element: <ApodBoard />
            }
        ]
    },
    {
        path: APP_DASHBOARD_PATH + "settings",
        // loader: protectedLoader,
        children: [
            {
                path: "account",
                element: <AccountSettings />,
            },
        ]
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
