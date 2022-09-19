import user from 'user.json';
// import data from './data.json';
// import friends from './friends.json';
// import items from './transactions.json';

import { Profile } from "./Profile/Profile";

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
       <Profile user={user} />
    </div>
  );
};
