import {useAuthenticatedUserStore} from "@/stores/authenticatedUserStore.ts";
import {redirect} from "react-router-dom";

export default function protectedLoader() {
    const { isAuthenticated } = useAuthenticatedUserStore.getState();

    if (isAuthenticated()) {
        return null;
    }

    return redirect('/login');
}