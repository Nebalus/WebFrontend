
export default async function registerAction({request}: { request: Request}) {
    const formData = await request.formData();
    const activationTokenRegEx = /^(([0-9]{4})-){4}([0-9]{4})$/;
    const activationToken = formData.get('activationtoken')?.toString() ?? '';
    const emailRegEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const email = formData.get('email')?.toString()?.toString() ?? '';
    const username = (formData.get('username')?.toString() ?? '').trim().replace(/\s/g, "");
    const password = (formData.get('password')?.toString() ?? '').trim();
    const passwordConfirm = (formData.get('password-confirm')?.toString() ?? '').trim();

    if (!activationTokenRegEx.test(activationToken)) {
        return {
            has_error: true,
            error_title: 'Invalid Format',
            error_message: 'The activation token is in a invalid format.'
        }
    }

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
        error_message: 'The authentication services is currently unavailable.'
    }
}