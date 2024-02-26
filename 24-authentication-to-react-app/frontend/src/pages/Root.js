import { Outlet, useLoaderData, useNavigation, useSubmit } from 'react-router-dom';

import MainNavigation from '../components/MainNavigation';
import { useEffect } from 'react';
import { getTokenDuration } from '../utils/auth';

function RootLayout() {
  // const navigation = useNavigation();
  const token = useLoaderData(); // 'token' is the data returned from the loader.
  const submit = useSubmit();
  useEffect(() => {
    if(!token) {
      return;
    }
    
    if(token === "EXPIRED") {
      submit(null, {action: '/logout', method: 'post'});
      return;
    }

    const tokenDuration = getTokenDuration();
    console.log(tokenDuration);

    setTimeout(() => {
      submit(null, {action: '/logout', method: 'post'})
    }, tokenDuration); // remaining time of the expiration of the token.
  }, [token, submit]);

  return (
    <>
      <MainNavigation />
      <main>
        {/* {navigation.state === 'loading' && <p>Loading...</p>} */}
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;
