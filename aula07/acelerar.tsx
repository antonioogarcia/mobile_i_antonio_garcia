import { useState, useEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Accelerometer } from 'expo-sensors';

export default function App() {
  const [{ x, y, z }, setData] = useState({
    x: 0,
    y: 0,
    z: 0,
  });
  const [subscription, setSubscription] = useState(null);

  const _slow = () => Accelerometer.setUpdateInterval(1000);
  const _fast = () => Accelerometer.setUpdateInterval(16);

  const _subscribe = () => {
    setSubscription(Accelerometer.addListener(setData));
  };

  const _unsubscribe = () => {
    subscription && subscription.remove();
    setSubscription(null);
  };

  useEffect(() => {
    _subscribe();
    return () => _unsubscribe();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Accelerometer: (in gs where 1g = 9.81 m/s^2)</Text>
      <Text style={styles.text}>x: {x}</Text>
      <Text style={styles.text}>y: {y}</Text>
      <Text style={styles.text}>z: {z}</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={subscription ? _unsubscribe : _subscribe} style={styles.button}>
          <Text>{subscription ? 'On' : 'Off'}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={_slow} style={[styles.button, styles.middleButton]}>
          <Text>Slow</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={_fast} style={styles.button}>
          <Text>Fast</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      paddingHorizontal: 20,
      backgroundColor: '#f5f5f5',
    },
    text: {
      textAlign: 'center',
      fontSize: 18,
      color: '#333',
      marginBottom: 10,
    },
    buttonContainer: {
      flexDirection: 'row',
      alignItems: 'stretch',
      marginTop: 20,
    },
    button: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#4CAF50',
      padding: 15,
      borderRadius: 5,
      marginHorizontal: 5,
    },
    middleButton: {
      borderLeftWidth: 0,
      borderRightWidth: 0,
    },
  });
  