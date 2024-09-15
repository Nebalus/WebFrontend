import '@assets/css/app.css'
import {ThemeProvider} from "../assets/providers/ThemeProvider.tsx";
import {RouterProvider} from "react-router-dom";
import {appRouter} from '@/AppRouter.tsx';

function App() {

    return (
          <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
              <RouterProvider router={appRouter} fallbackElement={"TEST"}></RouterProvider>
          </ThemeProvider>
    )
}

export default App
