
export default async function registerAction({request}: { request: Request}) {
    const formData = await request.formData();
    const activationTokenRegRx = /^(([0-9]{4})-){4}([0-9]{4})$/;
    const activationToken = formData.get('activationtoken')?.toString() ?? '';
    const username = formData.get('username')?.toString() ?? '';
    const password = formData.get('password')?.toString() ?? '';

    if (!activationTokenRegRx.test(activationToken)) {
        return {
            error: 'The activation token is in a invalid format.'
        }
    }

    if (username.trim() === '' || password.trim() === '') {
        return {
            error: 'Username or Password should not be empty.'
        }
    }

    return {
        error: 'The authentication services is currently unavailable.'
    }
}