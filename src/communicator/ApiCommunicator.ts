import {APP_BACKEND_API_DOMAIN, APP_BACKEND_API_PORT, APP_BACKEND_API_PROTOCOL} from "@/constants.ts";
import {useAuthenticatedUserStore} from "@/stores/UserStore.ts";
import {SuccessfulLoginResponse} from "@/schemas/ApiResponses/UserResponseSchemas.ts";

export const server_url = `${APP_BACKEND_API_PROTOCOL}://${APP_BACKEND_API_DOMAIN}:${APP_BACKEND_API_PORT}`;

class ApiCommunicator {

    // async register(invitationToken: InvitationToken, username: string, email: string, password: string): Promise<SuccessfulRegisterResponse> {
    //     const $registerRequest: Successful = {
    //         "invitation_token": {
    //             "field_1": invitationToken.field_1,
    //             "field_2": invitationToken.field_2,
    //             "field_3": invitationToken.field_3,
    //             "field_4": invitationToken.field_4,
    //             "checksum": invitationToken.checksum,
    //         },
    //         "email": email,
    //         "username": username,
    //         "password": password,
    //     }
    //
    //     try {
    //         const response = await this.apiFetch({
    //             context: {
    //                 method: "POST",
    //                 body: JSON.stringify($registerRequest),
    //             },
    //             route: "/ui/register"
    //         });
    //         if(response.ok) {
    //             return SuccessfulRegisterResponse.parse(await response.json());
    //         }
    //     } catch (e) {
    //     }
    //     return {};
    // }

    async login(username: string, password: string): Promise<any> {
        const { setUser, setJwt } = useAuthenticatedUserStore.getState();

        const $loginRequest = {
            "username": username,
            "password": password,
        }

        try {
            const response = await fetch(`${server_url}/ui/auth`, {
                method: 'POST',
                body: JSON.stringify($loginRequest),
            });

            if (response.ok) {
                const loginResponse = SuccessfulLoginResponse.parse(await response.json());

                if (loginResponse.success) {
                    setUser(loginResponse.payload.user);
                    setJwt(loginResponse.payload.jwt);
                }
                return loginResponse;
            }

        } catch (e) {
           console.error(e);
        }
        return { success: false, error_message: 'Authentication failed. Please try again.' };
    }

    logout() {
        useAuthenticatedUserStore.getState().reset();
    }

    async apiFetch({ context = {}, route }: { context: RequestInit; route: `/${string}` }): Promise<Response> {
        const url = `${server_url}${route}`;
        const { jwt } = useAuthenticatedUserStore.getState();

        context.headers = new Headers({
            ...context.headers,
            Authorization: `${jwt}`,
        });

        return fetch(url, context);
    }
}

export default new ApiCommunicator();