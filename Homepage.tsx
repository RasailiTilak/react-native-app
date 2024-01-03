// //homepage.tsx

// // import React from 'react';
// // import { View, Text } from 'react-native';

// // const HomePage = () => {
// //   return (
// //     <View>
// //       <Text>Welcome to the Home Page!</Text>
// //       {/* Add your home page content here */}
// //     </View>
// //   );
// // };



// //Homepage.tsx

// import React from 'react';
// import { View } from 'react-native';
// import { useState } from 'react';

// import Header from './Header';
// import Footer from './Footer';
// import HomeContent from './HomeContent';
// import ControlContent from './ControlContent';
// import SettingContent from './SettingContent';
// import GraphContent from './GraphContent';
// import { SessionContext } from './SessionContext'; // Import the SessionContext
// import { useContext } from 'react';


// type Section = 'Home' | 'Control' | 'Graph' | 'Settings'; // Define the Section type


// const HomePage: React.FC = () => {

//   const { sessionData } = useContext(SessionContext); // Retrieve sessionData from the SessionContext
//   if (session && session.isLoggedIn) {
//     // Render content for logged-in user
//     return <View>{/* Your content for logged-in user */}</View>;
//   } else {
//     // Render content for non-logged-in user or redirect to login
//     return <View>{/* Your content for non-logged-in user */}</View>;
//   }
// };

//   const [activeSection, setActiveSection] = useState<Section>('Home');

//   const handleSectionPress = (section: Section) => {
//     setActiveSection(section);
//   };

//   const renderContent = (): JSX.Element => {
//     switch (activeSection) {
//       case 'Home':
//         return <HomeContent />;
//       case 'Control':
//         return <ControlContent />;
//       case 'Graph':
//         return <GraphContent />;
//       case 'Settings':
//         return <SettingContent />;
//       default:
//         return <HomeContent />;
//     }
//   };

//   return (
//     <View style={{ flex: 1 }}>
//       <Header

//       />
//       {/* Your content component */}
//       {renderContent()}

//       {/* Your footer component */}
//       <Footer
//         onSectionPress={handleSectionPress}
//         activeSection={activeSection}
//       />
//     </View>
//   );
// };

// export default HomePage;
// // 



//Homepage.tsx

import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { useContext } from 'react';
import { SessionContext } from './SessionContext'; // Import the SessionContext
import Header from './Header';
import Footer from './Footer';
import HomeContent from './HomeContent';
import ControlContent from './ControlContent';
import SettingContent from './SettingContent';
import GraphContent from './GraphContent';

type Section = 'Home' | 'Control' | 'Graph' | 'Settings'; // Define the Section type

const HomePage: React.FC = () => {
  const { session } = useContext(SessionContext); // Retrieve session from the SessionContext

  const [activeSection, setActiveSection] = useState<Section>('Home');

  const handleSectionPress = (section: Section) => {
    setActiveSection(section);
  };

  console.log('Session:', session); // Add this line inside the functional component before the conditional rendering


  const renderContent = (): JSX.Element => {
    switch (activeSection) {
      case 'Home':
        return <HomeContent />;
      case 'Control':
        return <ControlContent />;
      case 'Graph':
        return <GraphContent />;
      case 'Settings':
        return <SettingContent />;
      default:
        return <HomeContent />;
    }
  };

  if (session && session.isLoggedIn) {
    // Render content for logged-in user
    return (
      <View style={{ flex: 1 }}>
        <Text>Welcome, {session.username}</Text>
        <Header />

        {/* Your content component */}
        {renderContent()}
        {/* Your footer component */}
        <Footer onSectionPress={handleSectionPress} activeSection={activeSection} />
      </View>
    );
  } else {
    // Render content for non-logged-in user or redirect to login
    return (
      <View>
        {/* Your content for non-logged-in user */}
        <Text>You are not logged in.</Text>
      </View>
    );
  }
};

export default HomePage;
