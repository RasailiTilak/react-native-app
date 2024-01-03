// HomeContent.js
import React, { useEffect, useState } from 'react';

import { View, Image, Switch, Text, StyleSheet } from 'react-native';


const ControlContent = () => {
    useEffect(() => {
        console.log('ControlContent rendered');
      }, []); // Add dependencies as needed    


    const [isLightON, setIsLightON] = useState(false);
    const toggleLightON = () => {
        setIsLightON(!isLightON);
    };
    const [isFanON, setIsFanON] = useState(false);
    const toggleFanON = () => {
        setIsFanON(!isFanON);
     };
    const [isPumpON, setIsPumpON] = useState(false);
    const togglePumpON = () => {
        setIsPumpON(!isPumpON);
    };
    const [isHeaterON, setIsHeaterON] = useState(false);
    const toggleHeaterON = () => {
        setIsHeaterON(!isHeaterON);
    };
    const [isCoolerON, setIsCoolerON] = useState(false);
    const toggleCoolerON = () => {
        setIsCoolerON(!isCoolerON);
    };
    // const [isAutoMode, setIsAutoMode] = useState(false);
    // const toggleAutoMode = () => {
    //     setIsAutoMode(!isAutoMode);
    // };
    return (
        <View style={styles.bigDiv}>
            <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 1 }}>수동 모드 장치 제어</Text>
            <View style={styles.innerDiv}>
                <View style={styles.miniDiv}>
                    <Image source={require('./assets/light-onn.png')} style={{ width: 65, height: 65, margin:5 }} />
                    <Text style={{ color: '#000066' }}>조명</Text>
                    {/* Content for the second inner div */}
                </View>
                <View style={styles.miniDiv}>
                    {/* Content for the second inner div */}

                    <View
                        style={{ alignItems: 'center' }}>
                        <Text
                            style={{
                                fontSize: 20,
                                fontWeight: 'bold',
                                color: '#000066',
                                margin: 10,
                            }}>
                            {isLightON ? 'ON' : 'OFF'}
                        </Text>
                        <Switch
                            value={isLightON}
                            onValueChange={toggleLightON}
                            trackColor={{ false: '#003366', true: '#003366' }} // body color
                            thumbColor={isLightON ? '#00e64d' : '#ff3300'} //circle color

                        />
                    </View>
                </View>
            </View>

            <View style={styles.innerDiv}>
                <View style={styles.miniDiv}>
                    <Image source={require('./assets/fabb.png')} style={{ width: 65, height: 65, margin:5 }} />
                    <Text style={{ color: '#000066' }}>팬</Text>
                    {/* Content for the second inner div */}
                </View>
                <View style={styles.miniDiv}>
                    {/* Content for the second inner div */}

                    <View
                        style={{ alignItems: 'center' }}>
                        <Text
                            style={{
                                fontSize: 20,
                                fontWeight: 'bold',
                                color: '#000066',
                                margin: 10,
                            }}>
                            {isFanON ? 'ON' : 'OFF'}
                        </Text>
                        <Switch
                            value={isFanON}
                            onValueChange={toggleFanON}
                            trackColor={{ false: '#003366', true: '#003366' }} // body color
                            thumbColor={isFanON? '#00e64d' : '#ff3300'} //circle color

                        />
                    </View>
                </View>
            </View>




            <View style={styles.innerDiv}>
                <View style={styles.miniDiv}>
                    <Image source={require('./assets/pumpp.png')} style={{ width: 65, height: 65, margin:5 }} />
                    <Text style={{ color: '#000066' }}>펌프</Text>
                    {/* Content for the second inner div */}
                </View>
                <View style={styles.miniDiv}>
                    {/* Content for the second inner div */}

                    <View
                        style={{ alignItems: 'center' }}>
                        <Text
                            style={{
                                fontSize: 20,
                                fontWeight: 'bold',
                                color: '#000066',
                                margin: 10,
                            }}>
                            {isPumpON ? 'ON' : 'OFF'}
                        </Text>
                        <Switch
                            value={isPumpON}
                            onValueChange={togglePumpON}
                            trackColor={{ false: '#003366', true: '#003366' }} // body color
                            thumbColor={isPumpON ? '#00e64d' : '#ff3300'} //circle color
                        />
                    </View>
                </View>
            </View>



            <View style={styles.innerDiv}>
                <View style={styles.miniDiv}>
                    <Image source={require('./assets/heater2.png')} style={{ width: 65, height: 65, margin:5 }} />
                    <Text style={{ color: '#000066' }}>난방</Text>
                    {/* Content for the second inner div */}
                </View>
                <View style={styles.miniDiv}>
                    {/* Content for the second inner div */}

                    <View
                        style={{ alignItems: 'center' }}>
                        <Text
                            style={{
                                fontSize: 20,
                                fontWeight: 'bold',
                                color: '#000066',
                                margin: 10,
                            }}>
                            {isHeaterON ? 'ON' : 'OFF'}
                        </Text>
                        <Switch
                            value={isHeaterON}
                            onValueChange={toggleHeaterON}
                            trackColor={{ false: '#003366', true: '#003366' }} // body color
                            thumbColor={isHeaterON ? '#00e64d' : '#ff3300'} //circle color

                        />
                    </View>
                </View>

            </View>




        </View>
    );
};

const styles = StyleSheet.create({
    bigDiv: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#e0e0e0',
        // justifyContent: 'flex-start', // Align children to the start of the row
        // alignItems: 'flex-start', // Align children to the start of the column
        // backgroundColor: '#e0e0e0',

    },
    innerDiv: {
        width: '95%',
        height: 120,
        marginVertical: 5,
        backgroundColor: '#d6dbbd',
        borderWidth: 1,
        borderColor: '#ccc',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row', // Arrange children horizontally
        flexWrap: 'wrap',
        borderRadius: 10,

    },
    miniDiv: {
        width: '47%',
        height: 100,
        marginVertical: 5,
        marginHorizontal: 5,
        backgroundColor: '#fff2e6',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 10,
        alignItems: 'center',

    },
    // miniDiv: {
    //     flexBasis: '30%', // Set the initial size based on 30% of the parent's width
    //     flexGrow: 1, // Allow flex to fill the remaining space equally
    //     height: 50,
    //     marginVertical: 2,
    //     marginHorizontal: '10%', // Add some spacing between miniDivs
    //     backgroundColor: '#fff2e6',
    //     borderWidth: 1,
    //     borderColor: '#ccc',
    //   },
});

export default ControlContent;




//------------------------------------------------------------------------------------------------------------------------------------------------------


// import React, { useState, useEffect } from 'react';
// import { View, Image, Switch, Text, StyleSheet, TouchableOpacity } from 'react-native';
// import { client } from 'react-native-mqtt'; // Import your MQTT client

// const ControlContent = () => {
//   const [isLightON, setIsLightON] = useState(false);
//   const [isFanON, setIsFanON] = useState(false);
//   const [isPumpON, setIsPumpON] = useState(false);
//   const [isHeaterON, setIsHeaterON] = useState(false);
//   const [isCoolerON, setIsCoolerON] = useState(false);

//   const mqttClient = new client({
//     uri: 'ws://121.78.116.56:9090/mqtt',
//     clientId: 'yourClientId', // Replace with your MQTT client ID
//   });

//   useEffect(() => {
//     mqttClient.connect();

//     return () => {
//       mqttClient.disconnect();
//     };
//   }, []);

//   const handlePublish = (topic, message) => {
//     if (mqttClient.isConnected()) {
//       mqttClient.publish(topic, message);
//     } else {
//       console.log('MQTT client is not connected');
//     }
//   };

//   return (
//     <View style={styles.bigDiv}>
//       {/* Your existing UI components */}
//       {/* ... */}

//       {/* Light Switch */}
//       <TouchableOpacity
//         style={styles.miniDiv}
//         onPress={() => {
//           setIsLightON(!isLightON);
//           handlePublish('light', isLightON ? 'OFF' : 'ON');
//         }}>
//         <Image source={require('./assets/light-onn.png')} style={{ width: 65, height: 65, margin: 5 }} />
//         <Text style={{ color: '#000066' }}>조명</Text>
//         <View style={{ alignItems: 'center' }}>
//           <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#000066', margin: 10 }}>
//             {isLightON ? 'ON' : 'OFF'}
//           </Text>
//           <Switch
//             value={isLightON}
//             onValueChange={() => {
//               setIsLightON(!isLightON);
//               handlePublish('light', isLightON ? 'OFF' : 'ON');
//             }}
//             trackColor={{ false: '#003366', true: '#003366' }}
//             thumbColor={isLightON ? '#00e64d' : '#ff3300'}
//           />
//         </View>
//       </TouchableOpacity>

//       {/* Fan Switch */}
//       <TouchableOpacity
//         style={styles.miniDiv}
//         onPress={() => {
//           setIsFanON(!isFanON);
//           handlePublish('fan', isFanON ? 'OFF' : 'ON');
//         }}>
//         {/* Same logic as above for Fan */}
//       </TouchableOpacity>

//       {/* Pump Switch */}
//       {/* ... Same logic for other switches ... */}
//     </View>
//   );
// };






// const styles = StyleSheet.create({
//     bigDiv: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: '#e0e0e0',
//         // justifyContent: 'flex-start', // Align children to the start of the row
//         // alignItems: 'flex-start', // Align children to the start of the column
//         // backgroundColor: '#e0e0e0',

//     },
//     innerDiv: {
//         width: '95%',
//         height: 120,
//         marginVertical: 5,
//         backgroundColor: '#d6dbbd',
//         borderWidth: 1,
//         borderColor: '#ccc',
//         justifyContent: 'center',
//         alignItems: 'center',
//         flexDirection: 'row', // Arrange children horizontally
//         flexWrap: 'wrap',
//         borderRadius: 10,

//     },
//     miniDiv: {
//         width: '47%',
//         height: 100,
//         marginVertical: 5,
//         marginHorizontal: 5,
//         backgroundColor: '#fff2e6',
//         borderWidth: 1,
//         borderColor: '#ccc',
//         borderRadius: 10,
//         alignItems: 'center',

//     },
//     // miniDiv: {
//     //     flexBasis: '30%', // Set the initial size based on 30% of the parent's width
//     //     flexGrow: 1, // Allow flex to fill the remaining space equally
//     //     height: 50,
//     //     marginVertical: 2,
//     //     marginHorizontal: '10%', // Add some spacing between miniDivs
//     //     backgroundColor: '#fff2e6',
//     //     borderWidth: 1,
//     //     borderColor: '#ccc',
//     //   },
// });

// export default ControlContent;
