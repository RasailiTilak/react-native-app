
import React, { useState } from 'react';
import { View, Image, Switch, Text, TouchableWithoutFeedback } from 'react-native';

interface HeaderProps {
//   onLogout: () => void;
//   onExit?: () => void; // Make onExit an optional prop
}

const Header: React.FC<HeaderProps> = ({ }) => {
  const [isAutoMode, setIsAutoMode] = useState(false);

  const toggleAutoMode = () => {
    setIsAutoMode(!isAutoMode);
  };

  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        backgroundColor: '#d6dbbd',
        alignItems: 'center',
      }}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Image
          source={require('./assets/mmm.png')}
          style={{ width: 250, height: 95, marginRight: 10 }}
        />
      </View>

      <View
        style={{ padding: 10, backgroundColor: '#d6dbbd', alignItems: 'center' }}>

        <Switch
          value={isAutoMode}
          onValueChange={toggleAutoMode}
          trackColor={{ false: '#003366', true: '#003366' }} // body color
          thumbColor={isAutoMode ? '#00e64d' : '#ff3300'} // circle color
        />
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            color: '#000066',
            marginBottom: 10,
          }}>
          {isAutoMode ? '자동' : '수동'}
        </Text>

        {/* Logout Button */}
        {/* <TouchableWithoutFeedback onPress={onLogout}>
          <View style={{ marginRight: 10, borderColor:'#66b3ff', borderRadius:1, height:25,width:45  }}>
          <Image
          source={require('./assets/logout2.png')}
          style={{ width: 45, height: 25,margin:9 }}
        />
          </View>
        </TouchableWithoutFeedback> */}

        {/* Exit Button (Optional) */}
        {/* {onExit && (
          <TouchableWithoutFeedback onPress={onExit}>
            <View>
              <Text style={{ color: '#003366' }}>Exit</Text>
            </View>
          </TouchableWithoutFeedback>
        )} */}
      </View>
    </View>
  );
};

export default Header;

