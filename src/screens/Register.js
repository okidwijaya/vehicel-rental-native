import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {registerAuth} from '../../src/modules/utils/auth';

function Register({navigation}) {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const registerUser = async () => {
    try {
      const body = {
        email_address: email,
        name: name,
        password: password,
      };
      // console.log(body);
      // console.log(register);
      const result = await registerAuth(body);
      // console.log(result.data);
      if (result.data.result) {
        console.log(result);
        navigation.navigate('Login');
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/signup.png')}
        resizeMode="cover"
        style={styles.image}>
        <Text style={styles.text}>LET'S HAVE SOME RIDE </Text>
        <SafeAreaView>
          <TextInput
            style={styles.input}
            onChangeText={text => setEmail(text)}
            // value={email}
            placeholder="email"
          />
          <TextInput
            style={styles.input}
            onChangeText={text => setName(text)}
            // value={name}
            placeholder="username"
          />
          <TextInput
            style={styles.input}
            onChangeText={text => setPassword(text)}
            // value={password}
            placeholder="password"
          />
        </SafeAreaView>

        <View style={styles.containerFp}>
          <TouchableOpacity style={styles.btnLgn} onPress={registerUser}>
            <Text style={styles.login}>Signup</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Login')}>
            <Text style={styles.forgotPassword}>
              Have an account? Login now
            </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 32,
    width: 370,
    textAlign: 'left',
    lineHeight: 34,
    fontWeight: 'bold',
    padding: 60,
    flex: 1,
  },
  input: {
    height: 60,
    margin: 12,
    borderWidth: 0,
    padding: 10,
    borderRadius: 15,
    backgroundColor: '#DFDEDE',
  },
  containerFp: {
    justifyContent: 'center',
    paddingHorizontal: 10,
    flex: 2,
  },
  button: {
    alignItems: 'center',
    padding: 10,
    color: '#000000',
  },
  forgotPassword: {
    color: 'white',
    fontSize: 18,
    textAlign: 'left',
  },
  btnLgn: {
    alignItems: 'center',
    backgroundColor: '#FFCD61',
    padding: 10,
    borderRadius: 15,
    height: 60,
    textAlign: 'center',
  },
  login: {
    color: '#000000',
    fontWeight: 'bold',
    fontSize: 24,
    lineHeight: 35,
  },
});

export default Register;
