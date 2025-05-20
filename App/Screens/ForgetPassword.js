import React, { useState } from 'react';
// import { Auth } from 'aws-amplify';
import { View, Text, TextInput, Button, Alert, SafeAreaView, StatusBar } from 'react-native';

export const ForgetPassword = () => {
  const [username, setUsername] = useState('');
  const [confirmationCode, setConfirmationCode] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [stage, setStage] = useState(1);

  const handleResetPassword = async () => {
    try {
      await Auth.forgotPassword(username);
      Alert.alert('Success', 'Confirmation code sent to your email.');
      setStage(2);
    } catch (error) {
      Alert.alert('Error', error.message);
    }
  };

  const handleConfirmResetPassword = async () => {
    try {
      await Auth.forgotPasswordSubmit(username, confirmationCode, newPassword);
      Alert.alert('Success', 'Password reset successful. Please login with your new password.');
      setStage(1);
    } catch (error) {
      Alert.alert('Error', error.message);
    }
  };

  return (
    <SafeAreaView style={{marginTop:StatusBar.currentHeight}}>
      {stage === 1 ? (
        <View>
          <Text>Enter your username:</Text>
          <TextInput value={username} onChangeText={setUsername} placeholder="Username" />
          <Button title="Reset Password" onPress={handleResetPassword} />
        </View>
      ) : (
        <View>
          <Text>Enter confirmation code:</Text>
          <TextInput value={confirmationCode} onChangeText={setConfirmationCode} placeholder="Confirmation Code" />
          <Text>Enter new password:</Text>
          <TextInput value={newPassword} onChangeText={setNewPassword} placeholder="New Password" secureTextEntry />
          <Button title="Confirm Reset Password" onPress={handleConfirmResetPassword} />
        </View>
      )}
    </SafeAreaView>
  );
};