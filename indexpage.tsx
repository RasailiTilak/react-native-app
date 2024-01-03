
//indexpage.tsx
import React, { useState, useContext } from 'react';
import { View, TextInput, Button, Text, Image, ImageBackground, Alert } from 'react-native';
import { SessionContext,SessionData } from './SessionContext';
interface IndexPageProps {
    navigation: {
        navigate: (screen: string) => void;
    };
}

const IndexPage: React.FC<IndexPageProps> = ({ navigation }) => {
    const { setSession } = useContext(SessionContext); // Retrieve setSession from the SessionContext
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);

    
    const handleLogin = async () => {
        try {
            const response = await fetch('http://ipaddress-of-the-server/mini-farm/mini-farm-app/login2.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username,
                    password,
                }),
            });
    
            const rawData = await response.text();
           // console.log('Received data:', rawData);
    
            if (response.ok) {
                const data = JSON.parse(rawData);
    
                if (data.success) {
                    // Update the session context with user data
                    const loggedInUser: SessionData = {
                        username: data.user.user, // Access the username correctly
                        isLoggedIn: true,
                        // Add other necessary user data from the response
                    };
                    setSession(loggedInUser);
                    navigation.navigate('Home');
                } else {
                    console.log('Login failed. Please check your credentials.');
                    Alert.alert('Login failed :-Please check your credentials.');
                }
            } else {
                console.log('Login failed due to server error.');
                Alert.alert('Login failed due to server error.');
            }
        } catch (error) {
            console.error('Error:', error);
            console.log('An error occurred. Please try again.');
        }
    };
    
    return (


        <View style={{ flex: 1, backgroundColor: '#9ba65c' }}>
            {/* First Big View */}
            <View style={{ flex: 0.2, flexDirection: 'row', backgroundColor: '#e5d7a4' }}>
                {/* Inner View 1 */}
                <ImageBackground
                    source={require('./assets/mmm.png')}
                    style={{ flex: 0.2, height: 150, width: 400, margin: 20 }}>
                    <View style={{ flex: 0.8, }}>
                        {/* Content for first inner view */}
                    </View>
                </ImageBackground>
                {/* Inner View 2 */}

            </View>

            {/* Second Big View */}

            <ImageBackground
                source={require('./assets/bg_login.png')}
                style={{ flex: 0.6, height: '80%', width: '100%' }}
                resizeMode="cover"
            >
                <View style={{ flex: 0.6, justifyContent: 'center', alignItems: 'center', padding: 200 }}>
                    {/* Inner View 1 */}

                    <View style={{ height: 70, width: 150, padding: 10, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center' }}>
                        {/* Content for first inner view in the second big view */}
                        <TextInput
                            placeholder="Username"
                            value={username}
                            onChangeText={text => setUsername(text)}
                        />
                    </View>
                    {/* Inner View 2 */}
                    <View style={{ height: 70, width: 150, padding: 10, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>
                        {/* Content for second inner view in the second big view */}
                        <TextInput
                            placeholder="Password"
                            value={password}
                            onChangeText={text => setPassword(text)}
                            secureTextEntry={true}
                        />
                    </View>
                    <View style={{ height: 70, width: 75, margin: 10, padding: 5 }}>
                        <Button title="로그인" onPress={handleLogin} />
                    </View>


                </View>
            </ImageBackground>

            {/* Third Big View */}
            <View style={{ flex: 0.2, justifyContent: 'center', backgroundColor: '#e5d7a4', paddingLeft: 10 }}>
                {/* Text as footer */}
                <Text style={{ fontSize: 20, color: 'blue' }}>(주) 동양테크윈</Text>
                <Text style={{ fontSize: 16, color: 'black' }}>전화:- +82 41 633 0340</Text>
                <Text style={{ fontSize: 16, color: 'black' }}>팩스:- +82 41633 0350</Text>
                <Text style={{ fontSize: 18, color: 'brown' }}>이메일: info@dytw.kr</Text>
                <Text style={{ fontSize: 18, color: 'brown' }}>홈페이지:- http://www.dytw.kr</Text>
                <Text style={{ fontSize: 18, color: 'brown' }}>주소 : 충청남도 홍성군 홍북읍 첨단산단3길 122</Text>
            </View>
        </View>
    );

};

export default IndexPage;
