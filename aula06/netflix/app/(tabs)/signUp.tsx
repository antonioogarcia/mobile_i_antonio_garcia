import { Image, StyleSheet, TextInput, Platform, ImageBackground, View, TouchableOpacity, CheckBox, Linking } from 'react-native';


import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Link } from '@react-navigation/native';
import { Button } from '@rneui/themed';


export default function SignUp() {
  return (
    <ThemedView style={styles.body}>    
    <ImageBackground source={require('./fundo.jpg')} style={styles.background}>
    <Image style={styles.logo} source={require('./netflix.png')}></Image>
    
    <Link to='/'>
    <Image style={styles.voltar} source={require('./seta.png')}>
    </Image>
    </Link>

    <View style={styles.overlay} />
    <ThemedView style={styles.alinhar}>
          <ThemedText style={styles.signIn}>Sign Up</ThemedText>
          <ThemedView style={styles.inputContainer}>
          <TextInput style={styles.inputDireito} placeholder='Email'></TextInput>
          <TextInput style={styles.inputEsquerdo} placeholder='Phone number'></TextInput>
          </ThemedView>
          <TextInput style={styles.input} placeholder='Password' secureTextEntry={true}></TextInput>
          <TextInput style={styles.input} placeholder='Confirm your password' secureTextEntry={true}></TextInput>
            <ThemedView style={styles.checkContainer}>
        <CheckBox style={styles.checkbox}/>
        <Link to='/terms'>
        <ThemedText style={styles.agree}>I agree with the terms and conditions </ThemedText>
        </Link>
        </ThemedView>
        <Button buttonStyle={styles.logar} color="error">Sign Up</Button>
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
    inputDireito: {
      color: 'rgba(265, 265, 265, 0.3)',
      width: 145,
      height: 45,
      marginRight: 5,
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
    inputEsquerdo: {
      color: 'rgba(265, 265, 265, 0.3)',
      width: 145,
      height: 45,
      marginLeft: 5,
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
        height: 45,
        marginTop: '10%',
        marginBottom: '10%',
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
        paddingRight: 120,
        marginTop: 30,
        position: 'relative',
        left: 27,
      },
      inputContainer: {
        flexDirection: 'row',
        backgroundColor: 'rgba(0, 0, 0, 0.0)',
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
      },
      logo: {
        width: '37%',
        height: '15%',  
        resizeMode: 'contain',
        position: 'relative',
        zIndex: 999,
        top: 75,
        left: 70,
      },
      voltar: {
        width: 25,
        height: 25,  
        resizeMode: 'contain',
        position: 'relative',
        zIndex: 999,
        top: 10,
        left: 30,
      },
      agree: {
        textDecorationLine: 'underline'
      }

  },
);
