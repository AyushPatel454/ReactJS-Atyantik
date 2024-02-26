import { Outlet, useLoaderData, useNavigation, useSubmit } from 'react-router-dom';

import MainNavigation from '../components/MainNavigation';
import { useEffect } from 'react';

function RootLayout() {
  // const navigation = useNavigation();
  const token = useLoaderData(); // 'token' is the data returned from the loader.
  const submit = useSubmit();
  useEffect(() => {
    if(!token) {
      return;
    }

    setTimeout(() => {
      submit(null, {action: '/logout', method: 'post'})
    }, 1 * 60 * 60 * 1000); // 1 hour
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
