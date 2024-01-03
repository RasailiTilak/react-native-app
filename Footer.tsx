


// Footer.tsx
import React from 'react';
import { View, TouchableOpacity, Image, Text } from 'react-native';
import GraphContent from './GraphContent';
import HomeContent from './HomeContent';
import ControlContent from './ControlContent';
import SettingContent from './SettingContent';

type Section = 'Home' | 'Control' | 'Graph' | 'Settings';

interface FooterProps {
  onSectionPress: (section: Section) => void;
  activeSection: Section;
}

const Footer: React.FC<FooterProps> = ({ onSectionPress, activeSection }) => {
  const handleSectionPress = (section: Section) => {
    onSectionPress(section);
  };


  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 10,
        backgroundColor: '#d6dbbd',
      }}>
      <TouchableOpacity onPress={() => handleSectionPress('Graph')}>
        <Image source={require('./assets/graph.png')} style={{ width: 30, height: 30 }} />
        <Text style={{ color: activeSection === 'Graph' ? '#ff6600' : '#1a1a00' }}>Graph</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => handleSectionPress('Home')}>
        <Image source={require('./assets/home.png')} style={{ width: 30, height: 30 }} />
        <Text style={{ color: activeSection === 'Home' ? '#ff6600' : '#1a1a00' }}>Home</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => handleSectionPress('Control')}>
        <Image source={require('./assets/button.png')} style={{ width: 30, height: 30 }} />
        <Text style={{ color: activeSection === 'Control' ? '#ff6600' : '#1a1a00' }}>Control</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => handleSectionPress('Settings')}>
        <Image source={require('./assets/SETTING.png')} style={{ width: 30, height: 30 }} />
        <Text style={{ color: activeSection === 'Settings' ? '#ff6600' : '#1a1a00' }}>Setting</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Footer;