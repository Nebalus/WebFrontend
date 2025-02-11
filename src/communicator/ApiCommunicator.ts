import {APP_BACKEND_API_DOMAIN, APP_BACKEND_API_PORT, APP_BACKEND_API_PROTOCOL} from "@/constants.ts";
import {useAuthenticatedUserStore} from "@/stores/UserStore.ts";
import {SuccessfulLoginResponse, SuccessfulRegisterResponse} from "@/schemas/ApiResponses/UserResponseSchemas.ts";
import {UserLoginRequest, UserRegisterRequest} from "@/schemas/ApiRequests/UserRequestSchemas.ts";
import {handleAuthError} from "@/utils/authUtils.ts";

export const server_url = `${APP_BACKEND_API_PROTOCOL}://${APP_BACKEND_API_DOMAIN}:${APP_BACKEND_API_PORT}`;

class ApiCommunicator {

    async register(userRegisterRequest: UserRegisterRequest): Promise<boolean> {
        try {
            const response = await fetch(`${server_url}/ui/register`, {
                method: "POST",
                body: JSON.stringify(userRegisterRequest),
            });
            if(response.ok) {
                const registerResponse = SuccessfulRegisterResponse.parse(await response.json());
                return registerResponse.success;
            }
        } catch (e) {
            console.error(e);
        }
        return false;
    }

    async login(userLoginRequest: UserLoginRequest): Promise<boolean> {
        const { setUser, setJwt } = useAuthenticatedUserStore.getState();

        try {
            const response = await fetch(`${server_url}/ui/auth`, {
                method: 'POST',
                body: JSON.stringify(userLoginRequest),
            });

            if (response.ok) {
                const loginResponse = SuccessfulLoginResponse.parse(await response.json());
                setUser(loginResponse.payload.user);
                setJwt(loginResponse.payload.jwt);
                return true;
            }
        } catch (e) {
           console.error(e);
        }
        return false;
    }

    logout() {
        useAuthenticatedUserStore.getState().reset();
    }

    async apiFetch({ context = {}, route }: { context: RequestInit; route: `/${string}` }): Promise<Response> {
        const url = `${server_url}${route}`;
        const { jwt } = useAuthenticatedUserStore.getState();

        context.headers = new Headers({
            ...context.headers,
            Authorization: `${jwt}`
        });

        const response = await fetch(url, context);
        handleAuthError(response);

        return response;
    }
}

export default new ApiCommunicator();