import { Image, StyleSheet, TextInput, Platform } from 'react-native';


import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';


export default function HomeScreen() {
  return (
     
    <ThemedView style={styles.body}>
      <ThemedView style={styles.loginContainer}>
        <ThemedText style={styles.signIn}>Sign In</ThemedText>
          <ThemedText style={styles.label}>Email</ThemedText>
          <TextInput style={styles.input} placeholder='Email'></TextInput>
         
          <br></br>
          <ThemedText style={styles.label}>Password</ThemedText> 
          <TextInput style={styles.input} placeholder='Password' secureTextEntry={true}></TextInput>
        <ThemedText style={styles.or}>Or</ThemedText>
        <ThemedText style={styles.pass}>Forgot password?</ThemedText>
        <br></br>
        <ThemedText style={styles.textobranco}>New to netflix? Sign up now</ThemedText>
        <ThemedText style={styles.textobranco}>This page is protected by Google reCAPTCHA to ensure you're not a bot. <ThemedText style={styles.learn}> Learn more</ThemedText></ThemedText>
      </ThemedView>
      </ThemedView>
  );
}

const styles = StyleSheet.create({
    body: {
      margin: 0,
      padding: 0,
    },
    loginContainer: {
      paddingLeft: 20,
      margin: 10,
      alignContent: 'center',
      backgroundColor: '#222122', // Cor de fundo do container
      height: 400,
      width: 350,
      marginTop: 90,
      opacity: 60,
    },
    textobranco: {
      color: 'white',
    },
    signIn: {
      color: 'white',
      fontSize: 25,
   },
    label: {
      color: 'white',
      fontSize: 20,
      marginTop: 10,
   },
    learn: {
      color: '#0000FF'
    },
    or: {
      textAlign: 'center',
      color: 'white',
      fontSize: 20,
      marginTop: 10,
    },
    pass: {
      textAlign: 'center',
      color: 'white',
    },
    input: {
      backgroundColor: 'white',
      width: 300,
      height: 30,
      marginTop: 25,
      padding: 5,
      shadowColor: 'white',
    
       }

  },
);
