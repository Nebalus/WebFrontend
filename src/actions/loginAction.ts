import ApiCommunicator from "@/communicator/ApiCommunicator.ts";
import {redirect} from "react-router-dom";
import {APP_DASHBOARD_PATH} from "@/constants.ts";

export default async function loginAction({request}: { request: Request}) {
    const formData = await request.formData();
    const username = (formData.get('username')?.toString() ?? '').trim().replace(/\s/g, "");
    const password = (formData.get('password')?.toString() ?? '').trim();

    if (username === '' || password === '') {
        return {
            has_error: true,
            error_message: 'Username or Password should not be empty.'
        }
    }

    const loginResponse = await ApiCommunicator.login(username, password);

    if (loginResponse.success) {
        return redirect(APP_DASHBOARD_PATH);
    }

    return {
        has_error: true,
        error_title: 'Authentication Failed',
        error_message: 'The authentication services are currently unavailable.'
    }
}