import {useAuthenticatedUserStore} from "@/stores/UserStore.ts";
import {SuccessfulLoginResponse, SuccessfulRegisterResponse} from "@/schemas/ApiResponses/UserResponseSchemas.ts";
import {UserLoginRequest, UserRegisterRequest} from "@/schemas/ApiRequests/UserRequestSchemas.ts";
import {handleAuthError} from "@/utils/authUtils.ts";
import {APP_BACKEND_API_URL} from "@/constants.ts";

class ApiCommunicator {

    async register(userRegisterRequest: UserRegisterRequest): Promise<boolean> {
        try {
            const response = await fetch(`${APP_BACKEND_API_URL}/ui/register`, {
                method: "POST",
                body: JSON.stringify(userRegisterRequest),
                headers : {
                    "Content-Type": "application/json"
                }
            }).then(response => response.json()).then(data => SuccessfulRegisterResponse.safeParseAsync(data));

            if (response.success) {
                console.log("Registration successful");
                return response.data.success;
            }
        } catch (e) {
            console.error(e);
        }
        return false;
    }

    async login(userLoginRequest: UserLoginRequest): Promise<boolean> {
        const { setUser, setJwt } = useAuthenticatedUserStore.getState();

        try {
            const response = await fetch(`${APP_BACKEND_API_URL}/ui/auth`, {
                method: 'POST',
                body: JSON.stringify(userLoginRequest),
                headers : {
                    "Content-Type": "application/json"
                }
            }).then(response => response.json()).then(data => SuccessfulLoginResponse.safeParseAsync(data));

            if (response.success) {
                setUser(response.data.payload.user);
                setJwt(response.data.payload.jwt);
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
        const url = `${APP_BACKEND_API_URL}${route}`;
        const { jwt } = useAuthenticatedUserStore.getState();

        context.headers = new Headers({
            ...context.headers,
            Authorization: `Bearer ${jwt}`,
            "Content-Type": "application/json"
        });

        const response = await fetch(url, context);
        handleAuthError(response);

        return response;
    }
}

export default new ApiCommunicator();