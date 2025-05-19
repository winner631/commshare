import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import{ MonteserratAlternates_400Regular }
const LoginScreen = () => {
  const [useremail, setUserEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleForgotPassword = () => {
    if (useremail === 'user' && password === 'password') {
    } else {
      Alert.alert('Error', 'Invalid Email');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Forgot Your Password</Text>
      <Text style={styles.title}>Enter your email address and we will send you instructions to reset your password</Text>
      <TextInput
        style={styles.input}
        placeholder="Useremail"
        value={useremail}
        onChangeText={setUserEmail}
      />
      {/* <Button title="Create" color="#242475" onPress={() => { alert("Button clicked") }} /> */}
                    <TouchableOpacity onPress={() => { handleSearchPress() }} style={styles.btn}>
                        <Text style={{ color: "white", fontSize: 20, fontFamily: "MontserratAlternates_400Regular"  }}>Login</Text>
                    </TouchableOpacity>
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <Button title="Login" onPress={handleLogin} />
      <Button title="Back to the platform" onPress={handleLogin} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
   btn: {
        backgroundColor: "#5d21b7",
        borderRadius: 30,
        paddingHorizontal: 15,
        justifyContent: "center",
        alignItems: "center",
    },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
  },
});
