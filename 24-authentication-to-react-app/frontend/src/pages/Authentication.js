import { json, redirect } from 'react-router-dom';
import AuthForm from '../components/AuthForm';

function AuthenticationPage() {
  return <AuthForm />;
}

export default AuthenticationPage;

export async function action({request}) {
  
  const searchParams = new URL(request.url).searchParams;
  const mode = searchParams.get('mode') || 'login';
  
  if(mode !== 'login' && mode !== 'signup') {
    return json({message: 'Invalid mode'}, {status: 422});
  }

  const data = await request.formData();
  const authData = {
    email: data.get('email'),
    password: data.get('password')
  }

  const response = await fetch('http://localhost:8080/' + mode, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(authData),
  });

  // ---> status = 422 for invalid input & 401 for invalid user.
  if(response.status === 422 || response.status === 401) {
    return response;
  }

  if(!response.ok) {
    console.log("response not ok");
    throw json({message: 'Could not authenticate user.'} , {status: 500});
  }

  // response token soon... ... ...
  return redirect('/');
}