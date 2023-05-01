import React from 'react';
import { useSelector } from 'react-redux';
import SignUp from './User/SignUp';
import SignIn from './User/SignIn';
import SignOut from './User/SignOut';

const App = () => {
  const user = useSelector((state) => state.auth.user);

  return (
    <div>
      {user ? (
        <>
          <h1>Welcome, {user.email}!</h1>
          <SignOut />
        </>
      ) : (
        <>
          <SignUp />
          <SignIn />
        </>
      )}
    </div>
  );
};

export default App;
