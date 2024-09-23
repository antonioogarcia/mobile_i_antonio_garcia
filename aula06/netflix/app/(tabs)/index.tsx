/* npm install - npm install @rneui/themed @rneui/base
   não esquece de ler os termos de uso, siles, te amamos very much */
import { Image, StyleSheet, TextInput, Platform, ImageBackground, View, CheckBox, TouchableOpacity, Linking } from 'react-native';


import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Link } from '@react-navigation/native';
import { Button } from '@rneui/themed';
import { color } from '@rneui/base';




export default function HomeScreen() {
  return (
    <ThemedView style={styles.body}>    
    <ImageBackground source={require('./fundo.jpg')} style={styles.background}>
    <Image style={styles.logo} source={require('./netflix.png')}></Image>
    <View style={styles.overlay} />
    <ThemedView style={styles.alinhar}><ThemedView></ThemedView>
          <ThemedText style={styles.signIn}>Sign In</ThemedText>
          <TextInput style={styles.input} placeholder='Email or phone number'></TextInput>
        
          <TextInput style={styles.input} placeholder='Password' secureTextEntry={true}></TextInput>
          <Button buttonStyle={styles.logar} color="error">Sign In</Button>
        <ThemedText style={styles.or}>Or</ThemedText>
        <Link to='/signUp'> <Button title="Create an Account" titleStyle={{color: 'white'}}type="clear" buttonStyle={styles.logarCod}/></Link>
        <ThemedText style={styles.pass}>Forgot password?</ThemedText>
    
        <ThemedView style={styles.checkContainer}>
        <CheckBox style={styles.checkbox}/>
        <ThemedText>Remember me</ThemedText>
        </ThemedView>
        <ThemedText style={styles.textoCaptcha}>This page is protected by Google reCAPTCHA to ensure you're not a bot. <ThemedText style={styles.learn} onPress={() => Linking.openURL('https://support.google.com/recaptcha/?hl=en')}> Learn more</ThemedText></ThemedText>
      </ThemedView>    
      </ImageBackground>
      </ThemedView>
  
  );
}

const styles = StyleSheet.create({
    body: {
      margin: 0,
      padding: 0,
      backgroundColor: 'black',
    },
    alinhar: {
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.7)',
      paddingTop: 20,
      resizeMode: 'cover',
      margin: '5%',
      marginTop: 70,
    },
    textobranco: {
      color: 'white',
      paddingRight: 95,
    },
    signIn: {
      color: 'white',
      fontSize: 25,
      marginTop: 15,
      paddingRight: 227,
      marginBottom: 14,
   },
    learn: {
      color: '#0000FF',
      fontSize: 10,
    },
    or: {
      textAlign: 'center',
      color: 'white',
      fontSize: 20,
    },
    pass: {
      textAlign: 'center',
      color: 'white',
    },
    input: {
      color: 'rgba(265, 265, 265, 0.3)',
      width: 300,
      height: 45,
      marginTop: 20,
      padding: 8,
      shadowColor: 'white',
      borderBottomWidth: 1.2,
      borderBottomColor: '#f3f3f3',
      borderRightWidth: 1.2,
      borderRightColor: 'white',
      borderLeftWidth: 1,
      borderLeftColor: 'grey',
      borderTopWidth: 1,
      borderTopColor: 'grey',
     },
     background: {
      flex: 1,
      resizeMode: 'cover', // ou 'contain', dependendo do comportamento desejado
      justifyContent: 'center',
      width: '100%',
      height: '160%',
      },
      overlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        height: '290%',
        backgroundColor: 'rgba(0, 0, 0, 0.8)', // Fundo semi-transparente para diminuir a opacidade
      },
      logar: {
        backgroundColor: '#E50914',
        width: 300,
        height: 45,
        marginTop: '10%',
        marginBottom: '10%',
        alignContent: 'center',
        alignItems: 'center',
        paddingTop: 10,
      },
      logarCod: {
        backgroundColor: 'rgba(265, 265, 265, 0.1)',
        width: 300,
        color: 'white',
        fontStyle: 'normal',
        height: 45,
        marginTop: '10%',
        marginBottom: '10%',
        alignContent: 'center',
        alignItems: 'center',
        paddingTop: 10,
        borderBottomWidth: 1.2,
        borderBottomColor: '#f3f3f3',
        borderRightWidth: 1.5,
        borderRightColor: 'white',
        borderLeftWidth: 1,
        borderLeftColor: 'grey',
        borderTopWidth: 1,
        borderTopColor: 'grey',
      },
      checkContainer: {
        flexDirection: 'row',
        backgroundColor: 'rgba(0, 0, 0, 0.0)',
        padding: '5%',
        paddingRight: 170,
      },
      checkbox: {
        width: 15,
        height: 15,
        position: 'relative',
        right: 10,
        top: 5,
      },
      textoCaptcha: {
        fontSize: 10,
        marginLeft: '15%',
        marginRight: '15%',
        padding: 20,
        textDecorationLine: 'underline',
      },
      logo: {
        width: '37%',
        height: '15%',  
        resizeMode: 'contain',
        position: 'relative',
        zIndex: 999,
        top: 70,
        left: 20,
      }

  },
);
