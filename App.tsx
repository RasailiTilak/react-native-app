// App.js or index.js

// import React from 'react';
// import AppNavigator from './AppNavigator';
// import { SessionProvider } from './SessionContext'; // Import the SessionProvider

// const App = () => {
  
//   return <AppNavigator />;
// };

// export default App;

import React from 'react';
import AppNavigator from './AppNavigator';
import { SessionProvider } from './SessionContext'; // Import the SessionProvider

const App = () => {
  return (
    <SessionProvider>
      <AppNavigator />
    </SessionProvider>
  );
};

export default App;
