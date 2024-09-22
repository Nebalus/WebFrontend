
export default async function loginAction({request}: { request: Request}) {
    const formData = await request.formData();
    const username = formData.get('username')?.toString() ?? '';
    const password = formData.get('password')?.toString() ?? '';

    if(username.trim() === '' || password.trim() === '') {
        return {
            error: 'Username or Password should not be empty.'
        }
    }

    return {
        error: 'The authentication services is currently unavailable.'
    }
}