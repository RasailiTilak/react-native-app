// HomeContent.js
import React,{useEffect} from 'react';
import { View, Text, TextInput, Image, StyleSheet } from 'react-native';

const SettingContent = () => {
    useEffect(() => {
        console.log('SettingContent rendered');
      }, []); // Add dependencies as needed
    
    return (
        <View style={styles.bigDiv}>
            <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 1 }}>장치 제어 설정</Text>

            <View style={styles.innerDiv}>
                <View style={styles.miniDiv}>
                    {/* Content for the second inner div */}
                    <Image source={require('./assets/light_1setting.png')} style={{ width: 60, marginLeft: 20, height: 60 }} />
                </View>
                <View style={styles.miniDiv}>
                    {/* Content for the second inner div */}
                    <Text style={{ fontSize: 15, fontWeight:'bold', marginLeft: 10, marginTop: 4 }}>조명 ON 시:</Text>
                    <TextInput
                        style={styles.miniDiv3}
                        keyboardType="numeric"
                        placeholder="숫자."
                        id='f-i-1'
                    />
                </View>
                <View style={styles.miniDiv}>
                    {/* Content for the second inner div */}
                    <Text style={{ fontSize: 15,fontWeight:'bold', marginLeft: 10, marginTop: 4 }}>조명 ON 분:</Text>
                    <TextInput
                        style={styles.miniDiv3}
                        keyboardType="numeric"
                        placeholder="숫자."
                        id='f-i-2'
                    />
                </View>
            </View>
            <View style={styles.innerDiv}>
                <View style={styles.miniDiv}>
                    {/* Content for the second inner div */}
                    <Image source={require('./assets/light_setting.png')} style={{ width: 60, marginLeft: 20, height: 60 }} />
                </View>
                <View style={styles.miniDiv}>
                    {/* Content for the second inner div */}
                    <Text style={{ fontSize: 15, fontWeight:'bold', marginLeft: 10, marginTop: 4 }}>조명 OFF 시:</Text>
                    <TextInput
                        style={styles.miniDiv3}
                        keyboardType="numeric"
                        placeholder="숫자."
                        id='f-i-1'
                    />
                </View>
                <View style={styles.miniDiv}>
                    {/* Content for the second inner div */}
                    <Text style={{ fontSize: 15,fontWeight:'bold', marginLeft: 10, marginTop: 4 }}>조명OFF 분:</Text>
                    <TextInput
                        style={styles.miniDiv3}
                        keyboardType="numeric"
                        placeholder="숫자."
                        id='f-i-2'
                    />
                </View>
            </View>


            <View style={styles.innerDiv}>
                <View style={styles.miniDiv}>
                    {/* Content for the second inner div */}
                    <Image source={require('./assets/fan_setting.png')} style={{ width: 60, marginLeft: 20, height: 60 }} />
                </View>
                <View style={styles.miniDiv}>
                    {/* Content for the second inner div */}
                    <Text style={{ fontSize: 15,fontWeight:'bold', marginLeft: 10, marginTop: 4 }}>팬 ON 분:</Text>
                    <TextInput
                        style={styles.miniDiv3}
                        keyboardType="numeric"
                        placeholder="숫자."
                        id='f-i-1'
                    />
                </View>
                <View style={styles.miniDiv}>
                    {/* Content for the second inner div */}
                    <Text style={{ fontSize: 15,fontWeight:'bold', marginLeft: 10, marginTop: 4 }}>팬 OFF 분:</Text>
                    <TextInput
                        style={styles.miniDiv3}
                        keyboardType="numeric"
                        placeholder="숫자."
                        id='f-i-2'
                    />
                </View>
            </View>

            <View style={styles.innerDiv}>
                <View style={styles.miniDiv}>
                    {/* Content for the second inner div */}
                    <Image source={require('./assets/pump_setting.png')} style={{ width: 60, marginLeft: 20, height: 60 }} />
                </View>
                <View style={styles.miniDiv}>
                    {/* Content for the second inner div */}
                    <Text style={{ fontSize: 15, fontWeight:'bold',marginLeft: 10, marginTop: 4 }}>펌프 ON 초:</Text>
                    <TextInput
                        style={styles.miniDiv3}
                        keyboardType="numeric"
                        placeholder="숫자."
                        id='f-i-1'
                    />
                </View>
                <View style={styles.miniDiv}>
                    {/* Content for the second inner div */}
                    <Text style={{ fontSize: 15, fontWeight:'bold', marginLeft: 10, marginTop: 4 }}>펌프 OFF 분:</Text>
                    <TextInput
                        style={styles.miniDiv3}
                        keyboardType="numeric"
                        placeholder="숫자."
                        id='f-i-2'
                    />
                </View>
            </View>

            <View style={styles.innerDiv}>
                <View style={styles.miniDiv}>
                    {/* Content for the second inner div */}
                    <Image source={require('./assets/heater_setting2.png')} style={{ width: 60, marginLeft: 20, height: 60 }} />
                </View>
                <View style={styles.miniDiv}>
                    {/* Content for the second inner div */}
                    <Text style={{ fontSize: 13,fontWeight:'bold', marginLeft: 10, marginTop: 4 }}>난방 ON 분:</Text>
                    <TextInput
                        style={styles.miniDiv3}
                        keyboardType="numeric"
                        placeholder="숫자."
                        id='f-i-1'
                    />
                </View>
                <View style={styles.miniDiv}>
                    {/* Content for the second inner div */}
                    <Text style={{ fontSize: 13,fontWeight:'bold', marginLeft: 10, marginTop: 4 }}>난방 OFF 분:</Text>
                    <TextInput
                        style={styles.miniDiv3}
                        keyboardType="numeric"
                        placeholder="숫자."
                        id='f-i-2'
                    />
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
        height: 95,
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
        width: '30%',
        height: 74,
        //marginVertical: 5,
        marginHorizontal: 5,
        backgroundColor: '#fff2e7',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 10,
        justifyContent: 'center',
        margin:10,

    },
    miniDiv2: {
        width: '19%',
        height: 72,
        marginVertical: 1,
        marginHorizontal: 1,
        backgroundColor: '#fff2e6',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 10,
        justifyContent: 'center',

    },
    miniDiv3: {
        width: '99%',
        height: 58,
        // marginVertical: 1,
        marginHorizontal: 1,
        backgroundColor: '#fff2e6',
        // borderWidth: 1,
        // borderColor: '#ccc',
        //borderRadius: 10,
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

export default SettingContent;
