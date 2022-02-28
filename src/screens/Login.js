import React, {useState, useEffect} from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {connect, useDispatch} from 'react-redux';
import {loginAction} from '../store/actions/auth';

const Login = props => {
  const [email, onChangeText] = useState('');
  const [password, onChangePsd] = useState('');
  const dispatch = useDispatch();
  const navigation = props.navigation;
  const handleLogin = () => {
    const body = {
      user: email,
      password,
    };
    dispatch(loginAction(body));
    console.log(body);
  };

  useEffect(() => {
    if (props.auth.isFulfilled === true) {
      // return navigate('/', {replace: true});
      navigation.navigate('StackTab');
      console.log('login success');
    }
    if (props.auth.isRejected === true) {
      console.log('login failed');
    }
  }, [props.auth, navigation]);
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/login.png')}
        resizeMode="cover"
        style={styles.image}>
        <Text style={styles.text} onPress={() => navigation.navigate('Home')}>
          LET'S EXPLORE THE WORLD
        </Text>
        <SafeAreaView>
          <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            value={email}
            placeholder="email"
          />
          <TextInput
            style={styles.input}
            onChangeText={onChangePsd}
            value={password}
            placeholder="password"
          />
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('ForgotPassword')}>
            <Text style={styles.forgotPassword}>Forgot password ?</Text>
          </TouchableOpacity>
        </SafeAreaView>
        <View style={styles.containerFp}>
          <TouchableOpacity style={styles.btnLgn}>
            <Text style={styles.login}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Register')}>
            <Text style={styles.forgotPassword}>
              Don't have account? Sign up now
            </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

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

const mapStateToProps = state => {
  return {
    auth: state.auth,
  };
};

// export default Login;
export default connect(mapStateToProps)(Login);