import {createBrowserRouter} from "react-router-dom";
import WorkAndProgress from "./components/WorkAndProgress.tsx"

export const appRouter = createBrowserRouter([
        {
            id: "root",
            path: "/",
            element: <WorkAndProgress />,
            errorElement: <WorkAndProgress />
        }
    ]
)