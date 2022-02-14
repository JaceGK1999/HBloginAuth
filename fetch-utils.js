// Enter Supabase Information
const SUPABASE_URL = 'https://uhmsxsfarryniihsuyry.supabase.co';
const SUPABASE_KEY =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVobXN4c2ZhcnJ5bmlpaHN1eXJ5Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY0NDg1ODk5NSwiZXhwIjoxOTYwNDM0OTk1fQ.6nj7bcX8HwQyFQNgiIoCcY6u37Gv4ctD0Ivcfo9zsKQ';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export function getUser() {
    return client.auth.session() && client.auth.session().user;
}

export async function signupUser(email, password) {
    const resp = await client.auth.signUp({ email, password });
    console.log(resp);
}

export async function signInUser(email, password) {
    const response = await client.auth.signIn({ email, password });

    return response.user;
}

export async function checkAuth() {
    const user = getUser();
    if (!user) {
        location.replace('/');
    }
}

export async function redirectIfLoggedIn() {
    const user = getUser();
    console.log(user);
    if (user) {
        location.replace('/other-page');
    }
}

export async function logout() {}
