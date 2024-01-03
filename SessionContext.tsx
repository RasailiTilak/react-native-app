// import React, { createContext, useState, ReactNode } from 'react';

// // Define the shape of your session data
// interface SessionData {
//   username: string;
//   isLoggedIn: boolean;
//   // Add other necessary session data
// }

// // Define the context
// interface SessionContextProps {
//   session: SessionData | null;
//   setSession: React.Dispatch<React.SetStateAction<SessionData | null>>;
// }

// export const SessionContext = createContext<SessionContextProps>({
//   session: null,
//   setSession: () => null,
// });

// interface SessionProviderProps {
//   children: ReactNode;
// }

// // Define a provider for the context
// export const SessionProvider: React.FC<SessionProviderProps> = ({ children }) => {
//   const [session, setSession] = useState<SessionData | null>(null);

//   return (
//     <SessionContext.Provider value={{ session, setSession }}>
//       {children}
//     </SessionContext.Provider>
//   );
// };




import React, { createContext, useState, ReactNode } from 'react';

// Define the shape of your session data
export interface SessionData {
    username: string;
    isLoggedIn: boolean;
    // Other necessary session data
  }

// Define the context
interface SessionContextProps {
  session: SessionData | null;
  setSession: React.Dispatch<React.SetStateAction<SessionData | null>>;
}

export const SessionContext = createContext<SessionContextProps>({
  session: null,
  setSession: () => null,
});

interface SessionProviderProps {
  children: ReactNode;
}

// Define a provider for the context
export const SessionProvider: React.FC<SessionProviderProps> = ({ children }) => {
  const initialSession: SessionData = {
    username: '', // Set the initial username here
    isLoggedIn: false, // Set the initial login status here
    // Add other necessary session data
  };

  const [session, setSession] = useState<SessionData | null>(initialSession);

  return (
    <SessionContext.Provider value={{ session, setSession }}>
      {children}
    </SessionContext.Provider>
  );
};
