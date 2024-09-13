import {createBrowserRouter} from "react-router-dom";
import WorkAndProgress from "./components/WorkAndProgress.tsx"
import LoginView from "./components/LoginView.tsx";

export const appRouter = createBrowserRouter([
    {
        id: "root",
        path: "/",
        element: <WorkAndProgress />,
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