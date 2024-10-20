import {APP_BACKEND_API_DOMAIN, APP_BACKEND_API_PORT, APP_BACKEND_API_PROTOCOL} from "@/constants.ts";
import {useAuthenticatedUserStore} from "@/stores/authenticatedUserStore.ts";

class ApiComunicator {
    server = `${APP_BACKEND_API_PROTOCOL}://${APP_BACKEND_API_DOMAIN}:${APP_BACKEND_API_PORT}`;    async login(username: string, password: string, rememberMe: boolean): Promise<LoginResponseSchema> {
        const { setUser, setJwt } = useAuthenticatedUserStore.getState();
        const formdata = new FormData();
        formdata.append('username', username);
        formdata.append('password', password);
        formdata.append('rememberMe', rememberMe.toString());

        try {
            const response = await fetch(`${this.server}/auth`, {
                method: 'POST',
                body: formdata,
            });
            if (response.ok) {
                const loginResponse = LoginResponseSchema.parse(await response.json());
                if (loginResponse.success) {
                    setUser(loginResponse.user);
                    setJwt(loginResponse.jwt);
                }
                return loginResponse;
            }
        } catch (e) {
            /* empty */
        }
        return { success: false, error_message: 'Authentication failed. Please try again.' };
    }

    logout() {
        useAuthenticatedUserStore.getState().reset();
        useAllUsersStore.getState().reset();
    }

    async apiFetch({ context = {}, route }: { context: RequestInit; route: `/${string}` }): Promise<Response> {
        const url = `${this.server}${route}`;
        const { jwt } = useAuthenticatedUserStore.getState();

        context.headers = new Headers({
            ...context.headers,
            Authorization: `${jwt}`,
        });

        return fetch(url, context);
    }
}

export default new ApiComunicator();