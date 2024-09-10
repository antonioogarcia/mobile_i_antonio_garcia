import { Image, StyleSheet, TextInput, Platform, ImageBackground, View, Button, TouchableOpacity, CheckBox } from 'react-native';


import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';


export default function HomeScreen() {
  return (
 
    <ThemedView style={styles.body}>    
    <ImageBackground source={require('./fundo.jpg')} style={styles.background}>
    <View style={styles.overlay} />
      <ThemedView style={styles.loginContainer}>
          <ThemedText style={styles.signIn}>Sign in</ThemedText>
          <ThemedView style={styles.alinhar}>
          <TextInput style={styles.input} placeholder='Email or phone number'></TextInput>
          <br></br>
          <TextInput style={styles.input} placeholder='Password' secureTextEntry={true}></TextInput>
          <TouchableOpacity style={styles.logar}>
        <ThemedText style={styles.buttonText}>Sign in</ThemedText>
      </TouchableOpacity> 
        <ThemedText style={styles.or}>Or</ThemedText>
        <TouchableOpacity style={styles.logarCod}>
        <ThemedText>Sign in with a code</ThemedText>
      </TouchableOpacity> 
      </ThemedView>
        <ThemedText style={styles.pass}>Forgot password?</ThemedText>
        <br></br>
        <ThemedView style={styles.checkContainer}>
        <CheckBox style={styles.checkbox}/>
        <ThemedText style={styles.check}>Remember me</ThemedText>
        </ThemedView>
        <ThemedText style={styles.textobranco}>New to netflix? Sign up now</ThemedText>
        <ThemedText style={styles.textoCaptcha}>This page is protected by Google reCAPTCHA to ensure you're not a bot. <ThemedText style={styles.learn}> Learn more</ThemedText></ThemedText>
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
    loginContainer: {
      padding: '5%',
      backgroundColor: 'rgba(0, 0, 0, 0.6)', // Cor de fundo do container
      resizeMode: 'cover',
      width: 350,
      marginTop: 90,
       },
    alinhar: {
      alignItems: 'center',
      margin: 6,
      backgroundColor: 'rgba(0, 0, 0, 0.0)',
      paddingTop: 20,
    },
    textobranco: {
      color: 'white',
    },
    signIn: {
      color: 'white',
      fontSize: 25,
      marginTop: 15,
   },
    learn: {
      color: '#0000FF',
      fontSize: 10,
    },
    or: {
      textAlign: 'center',
      color: 'white',
      fontSize: 20,
      marginTop: 1,
    },
    pass: {
      textAlign: 'center',
      color: 'white',
    },
    input: {
      color: 'rgba(265, 265, 265, 0.3)',
      width: 300,
      height: 45,
      marginTop: 15,
      padding: 5,
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
      opacity: 70,
      },
      overlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        height: '290%',
        backgroundColor: 'rgba(0, 0, 0, 0.7)', // Fundo semi-transparente para diminuir a opacidade
      },
      logar: {
        backgroundColor: '#E50914',
        width: 300,
        height: 45,
        margin: '10%',
        alignContent: 'center',
        alignItems: 'center',
        paddingTop: 10,
      },
      logarCod: {
        backgroundColor: 'rgba(265, 265, 265, 0.1)',
        width: 300,
        height: 45,
        margin: '10%',
        alignContent: 'center',
        alignItems: 'center',
        paddingTop: 10,
        borderBottomWidth: 1.2,
        borderBottomColor: '#f3f3f3',
        borderRightWidth: 1.2,
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
        padding: 30
      }

  },
);
