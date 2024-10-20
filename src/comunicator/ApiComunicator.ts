import {APP_BACKEND_API_DOMAIN, APP_BACKEND_API_PORT, APP_BACKEND_API_PROTOCOL} from "@/constants.ts";
import {useAuthenticatedUserStore} from "@/stores/authenticatedUserStore.ts";

class ApiComunicator {
    server = `${APP_BACKEND_API_PROTOCOL}://${APP_BACKEND_API_DOMAIN}:${APP_BACKEND_API_PORT}`;

    async login(username: string, password: string): Promise<any> {
        const {setUser} = useAuthenticatedUserStore.getState();
    }
}

export default new ApiComunicator();