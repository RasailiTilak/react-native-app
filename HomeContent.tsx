// HomeContent.js
import React, { useState } from 'react';
import { View,Text,Image,Switch, StyleSheet } from 'react-native';
import ControlContent from './ControlContent';
import { useEffect } from 'react';

const HomeContent = () => {
    useEffect(() => {
      console.log('HomeContent rendered');
    }, []); // Add dependencies as needed
  
    const [isLightON, setIsLightON] = useState(false);
    const toggleLightON = () => {
        setIsLightON(!isLightON);
    };
    return (
        <View style={styles.bigDiv}>
            <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 1 }}>센서 현재 상태.</Text>
            <View style={styles.innerDiv}>
                <View style={styles.miniDiv}>
                    {/* Content for the second inner div */}
                    <Image source={require('./assets/tempu.png')} style={{ width: 40, height: 40 }} />
                    <Text style={{ color: '#000066', padding:2 }}>온도: </Text>
                </View>
                <View style={styles.miniDiv}>
                    {/* Content for the second inner div */}
                    <Image source={require('./assets/hum.png')} style={{ width: 40, height: 40 }} />
                    <Text style={{ color: '#000066', padding:2 }}>습도: </Text>
                </View>
                <View style={styles.miniDiv}>
                    {/* Content for the second inner div */}
                    <Image source={require('./assets/ccoo2.png')} style={{ width: 40, height: 40 }} />
                    <Text style={{ color: '#000066', padding:2 }}>Co2: </Text>
                </View>
                <View style={styles.miniDiv}>
                    {/* Content for the second inner div */}
                    <Image source={require('./assets/e_p.png')} style={{ width: 40, height: 40 }} />
                    <Text style={{ color: '#000066', padding:2 }}>EC/PH: </Text>
                </View>
                {/* Content for the first inner div */}
                <View style={styles.miniDiv}>
                    {/* Content for the second inner div */}
                    <Image source={require('./assets/u_v.png')} style={{ width: 40, height: 40 }} />
                    <Text style={{ color: '#000066', padding:2 }}>UV: </Text>
                </View>
                <View style={styles.miniDiv}>
                    {/* Content for the second inner div */}
                </View>
                {/* Content for the first inner div */}
            </View>
            <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 1 }}>장치 현재 상태.</Text>
            <View style={styles.innerDiv}>
                {/* Content for the second inner div */}
                <View style={styles.miniDiv}>
                    {/* Content for the second inner div */}
                    <Image source={require('./assets/light-onn.png')} style={{ width: 30, height: 30 }} />
                    <Text style={{ color: '#000066' }}>조명 </Text>
                    <View
                        style={{ alignItems: 'center' }}>
                        <Text
                            style={{
                                fontSize: 20,
                                fontWeight: 'bold',
                                color: '#000066',
                                marginBottom: 5,
                            }}>
                            {isLightON ? 'ON' : 'OFF'}
                        </Text>                        
                    </View>
                </View>

                <View style={styles.miniDiv}>
                    {/* Content for the second inner div */}
                    <Image source={require('./assets/fabb.png')} style={{ width: 40, height: 40 }} />
                    <Text style={{ color: '#000066' }}>팬</Text>
                    <View
                        style={{ alignItems: 'center' }}>
                        <Text
                            style={{
                                fontSize: 20,
                                fontWeight: 'bold',
                                color: '#000066',
                                marginBottom: 5,
                            }}>
                            {isLightON ? 'ON' : 'OFF'}
                        </Text>                        
                    </View>
                </View>



                <View style={styles.miniDiv}>
                    {/* Content for the second inner div */}
                    <Image source={require('./assets/pumpp.png')} style={{ width: 40, height: 40 }} />
                    <Text style={{ color: '#000066' }}>펌프</Text>
                    <View
                        style={{ alignItems: 'center' }}>
                        <Text
                            style={{
                                fontSize: 20,
                                fontWeight: 'bold',
                                color: '#000066',
                                marginBottom: 5,
                            }}>
                            {isLightON ? 'ON' : 'OFF'}
                        </Text>                        
                    </View>
                </View>



                <View style={styles.miniDiv}>
                    {/* Content for the second inner div */}
                    <Image source={require('./assets/heater2.png')} style={{ width: 40, height: 40 }} />
                    <Text style={{ color: '#000066' }}>난방</Text>
                    <View
                        style={{ alignItems: 'center' }}>
                        <Text
                            style={{
                                fontSize: 20,
                                fontWeight: 'bold',
                                color: '#000066',
                                marginBottom: 5,
                            }}>
                            {isLightON ? 'ON' : 'OFF'}
                        </Text>                        
                    </View>
                </View>


                <View style={styles.miniDiv}>
                    {/* Content for the second inner div */}
                    <Image source={require('./assets/wat-col.png')} style={{ width: 40, height: 40 }} />
                    <Text style={{ color: '#000066' }}>냉각</Text>
                    <View
                        style={{ alignItems: 'center' }}>
                        <Text
                            style={{
                                fontSize: 20,
                                fontWeight: 'bold',
                                color: '#000066',
                                marginBottom: 5,
                            }}>
                            {isLightON ? 'ON' : 'OFF'}
                        </Text>                        
                    </View>
                </View>



                <View style={styles.miniDiv}>
                    {/* Content for the second inner div */}
                    
                    
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
        width: '99%',
        height: 230,
        marginVertical: 10,
        backgroundColor: '#d6dbbd',
        borderWidth: 1,
        borderColor: '#ccc',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row', // Arrange children horizontally
        flexWrap: 'wrap',
    
       
    },
    miniDiv: {
        width: '30%',
        height: 100,
        marginVertical: 10,
        marginHorizontal: 5,
        backgroundColor: '#fff2e6',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 10, 
        justifyContent: 'center',
        
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

export default HomeContent;
