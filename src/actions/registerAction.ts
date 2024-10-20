
export default async function registerAction({request}: { request: Request}) {
    const formData = await request.formData();
    const invitationTokenRegEx = /^(([0-9]{4})-){4}([0-9]{4})$/;
    const invitationToken = formData.get('invitationtoken')?.toString() ?? '';
    const emailRegEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const email = formData.get('email')?.toString()?.toString() ?? '';
    const username = (formData.get('username')?.toString() ?? '').trim().replace(/\s/g, "");
    const password = (formData.get('password')?.toString() ?? '').trim();
    const passwordConfirm = (formData.get('password-confirm')?.toString() ?? '').trim();

    if (!invitationTokenRegEx.test(invitationToken)) {
        return {
            has_error: true,
            error_title: 'Invalid Format',
            error_message: 'The activation token is in a invalid format.'
        }
    }

    // if (!doesInvitationTokenHaveAValidChecksum(invitationToken)) {
    //     return {
    //         has_error: true,
    //         error_title: 'Invalid Token',
    //         error_message: 'The activation token is invalid.'
    //     }
    // }

    if (!emailRegEx.test(email)) {
        return {
            has_error: true,
            error_title: 'Invalid Email',
            error_message: 'Email address is invalid.'
        }
    }

    if (username === '' || password === '') {
        return {
            has_error: true,
            error_message: 'Username or Password should not be empty.'
        }
    }

    if (password !== passwordConfirm) {
        return {
            has_error: true,
            error_title: 'Passwords do not match',
        }
    }

    return {
        has_error: true,
        error_title: 'Registration Failed',
        error_message: 'The authentication services are currently unavailable.'
    }
}

// function doesInvitationTokenHaveAValidChecksum(invitationToken: string): boolean {
//
// }