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
    console.log(response)
    return response;
  }

  if(!response.ok) {
    console.log("response not ok");
    throw json({message: 'Could not authenticate user.'} , {status: 500});
  }

  const resData = await response.json();
  const token = resData.token;

  // store token in local storage
  localStorage.setItem('token', token);
  const expiration = new Date();
  expiration.setHours(expiration.getHours() + 1);
  localStorage.setItem('expiration', expiration.toISOString()); // store expiry date of take after 1 hour of registration of login.

  // redirect to home page after successful login or signup
  return redirect('/');
}