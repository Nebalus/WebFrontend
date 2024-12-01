import ApiCommunicator from "@/communicator/ApiCommunicator.ts";
import {InvitationTokenSchema} from "@/schemas/schemas.ts";

export default async function registerAction({request}: { request: Request}) {
    const formData = await request.formData();
    const invitationTokenRegEx = /^(([0-9]{4})-){4}([0-9]{4})$/;
    const invitationTokenAsString = formData.get('invitationtoken')?.toString() ?? '';
    const email = formData.get('email')?.toString()?.toString() ?? '';
    const username = (formData.get('username')?.toString() ?? '').trim().replace(/\s/g, "");
    const password = (formData.get('password')?.toString() ?? '').trim();
    const passwordConfirm = (formData.get('password-confirm')?.toString() ?? '').trim();

    if (!invitationTokenRegEx.test(invitationTokenAsString)) {
        return {
            has_error: true,
            error_title: 'Invalid Format',
            error_message: 'The activation token is in a invalid format'
        }
    }

    const invitationTokenFields = invitationTokenAsString.split("-").map(Number);
    const invitationToken = InvitationTokenSchema.safeParse(
        {
            "field_1": invitationTokenFields[0],
            "field_2": invitationTokenFields[1],
            "field_3": invitationTokenFields[2],
            "field_4": invitationTokenFields[3],
            "checksum": invitationTokenFields[4]
        });

    if (!invitationToken.success) {
        return {
            has_error: true,
            error_title: 'Invalid Token',
            error_message: 'The activation token is invalid'
        }
    }

    if (!emailRegEx.test(email)) {
        return {
            has_error: true,
            error_title: 'Invalid Email',
            error_message: 'Email address is invalid'
        }
    }

    if (username === '' || password === '') {
        return {
            has_error: true,
            error_message: 'Username or Password should not be empty'
        }
    }

    if (password !== passwordConfirm) {
        return {
            has_error: true,
            error_title: 'Passwords do not match',
        }
    }

    const registerResponse = await ApiCommunicator.register(invitationToken.data, "ass", "asd", "dsd")

    return {
        has_error: true,
        error_title: 'Registration Failed',
        error_message: 'The authentication services are currently unavailable'
    }
}