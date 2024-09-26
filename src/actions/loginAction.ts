
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

    return {
        has_error: true,
        error_title: 'Authentication Failed',
        error_message: 'The authentication services is currently unavailable.'
    }
}